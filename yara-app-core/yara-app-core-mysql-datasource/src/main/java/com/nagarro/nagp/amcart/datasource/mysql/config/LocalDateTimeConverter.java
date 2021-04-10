package com.nagarro.nagp.yara-app.datasource.mysql.config;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.AttributeConverter;

public class LocalDateTimeConverter implements AttributeConverter<LocalDateTime, Timestamp> {

	@Override
	public Timestamp convertToDatabaseColumn(final LocalDateTime entityValue) {
		if (entityValue == null) {
			return null;
		}
		return Timestamp.valueOf(entityValue);
	}

	@Override
	public LocalDateTime convertToEntityAttribute(final Timestamp dbData) {
		return dbData.toLocalDateTime();
	}

}
