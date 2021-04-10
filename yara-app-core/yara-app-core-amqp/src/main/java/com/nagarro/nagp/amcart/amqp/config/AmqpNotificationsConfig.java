package com.nagarro.nagp.yara-app.amqp.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nagarro.nagp.yara-app.amqp.notifications.Constants;

@Configuration
public class AmqpNotificationsConfig {

	@Bean
	public Queue notificationsQueue() {
		return new Queue(Constants.NOTIFICATIONS_QUEUE_NAME, false);
	}

	@Bean
	public DirectExchange notificationsExchange() {
		return new DirectExchange(Constants.NOTIFICATIONS_QUEUE_EXCHANGE);
	}

	@Bean
	public Binding binding(Queue notificationsQueue, DirectExchange notificationsExchange) {
		return BindingBuilder.bind(notificationsQueue).to(notificationsExchange).with(Constants.NOTIFICATIONS_ROUTING_KEY);
	}

	@Bean
	public MessageConverter jsonMessageConverter() {
		return new Jackson2JsonMessageConverter();
	}

	@Bean
	public AmqpTemplate amqpNotificationsTemplate(ConnectionFactory connectionFactory) {
		RabbitTemplate amqpTemplate = new RabbitTemplate(connectionFactory);
		amqpTemplate.setMessageConverter(jsonMessageConverter());
		return amqpTemplate;

	}

}
