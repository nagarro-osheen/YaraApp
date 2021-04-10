/**
 * 
 */
package com.nagarro.nagp.yara.workflowmanagement.config-app.inventory.config;

import java.io.IOException;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

/**
 * @author aarzootrehan
 *
 */
@Configuration
public class MApperConfig {

	@Bean
	@Primary
	ObjectMapper objectMapper() {
		Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder();
		builder.serializerByType(ObjectId.class, new ToStringSerializer());
		builder.deserializerByType(ObjectId.class, new JsonDeserializer() {
			@Override
			public Object deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
				Map oid = p.readValueAs(Map.class);
				return new ObjectId((Integer) oid.get("timestamp"), (Integer) oid.get("machineIdentifier"),
						((Integer) oid.get("processIdentifier")).shortValue(), (Integer) oid.get("counter"));
			}
		});
		return builder.build();
	}

}
