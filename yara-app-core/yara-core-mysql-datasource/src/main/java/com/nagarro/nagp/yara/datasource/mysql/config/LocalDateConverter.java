package com.nagarro.nagp.yara.datasource.mysql.config;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.AttributeConverter;

public class LocalDateConverter implements AttributeConverter<LocalDate, Date> {

	@Override
	public Date convertToDatabaseColumn(final LocalDate entityValue) {
		if (entityValue == null) {
			return null;
		}
		return Date.valueOf(entityValue);
	}

	@Override
	public LocalDate convertToEntityAttribute(final Date databaseValue) {
		if (databaseValue == null) {
			return null;
		}
		return databaseValue.toLocalDate();
	}

}
