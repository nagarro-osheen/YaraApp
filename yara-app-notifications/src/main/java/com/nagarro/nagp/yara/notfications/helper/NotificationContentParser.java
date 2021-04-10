package com.nagarro.nagp.yara.notfications.helper-app.notfications.helper;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;

import com.nagarro.nagp.yara-app.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;

public class NotificationContentParser {

	private static final Map<String, String> USER_PROPERTIES_MAP = new HashMap<>();

	static {
		USER_PROPERTIES_MAP.put(ParserConstants.USER_NAME_PROPERTY, ParserConstants.USER_NAME_FIELD);
	}

	public static String parseNotificaitonContent(String content, NotificationDTO notification, UserDTO userDTO)
			throws IllegalArgumentException, IllegalAccessException {
		String returnValue = parseUserPropertiesInContent(content, userDTO);
		return returnValue;
	}

	private static String parseUserPropertiesInContent(String content, UserDTO userDTO)
			throws IllegalArgumentException, IllegalAccessException {
		String returnValue = content;
		Map<String, String> fieldValueMap = getFieldValuesMapFromObject(UserDTO.class, userDTO);
		for (Entry<String, String> entry : USER_PROPERTIES_MAP.entrySet()) {
			returnValue = parsePropertiesInContent(entry, returnValue, fieldValueMap);
		}
		return returnValue;
	}

	private static Map<String, String> getFieldValuesMapFromObject(Class<?> clazz, Object object)
			throws IllegalArgumentException, IllegalAccessException {
		Map<String, String> userFieldValuesMap = new HashMap<>();
		for (Field field : clazz.getDeclaredFields()) {
			field.setAccessible(true);
			userFieldValuesMap.put(field.getName(), (Optional.ofNullable(field.get(object)).orElse("")).toString());
		}
		return userFieldValuesMap;
	}

	private static String parsePropertiesInContent(Entry<String, String> entry, String content,
			Map<String, String> fieldValueMap) {
		return putPropertyValueInContent(entry.getKey(), entry.getValue(), fieldValueMap, content);
	}

	private static String putPropertyValueInContent(String property, String field, Map<String, String> fieldValueMap,
			String content) {
		return content.replaceAll(getFormattedPropertyString(property), fieldValueMap.get(field));
	}

	private static String getFormattedPropertyString(String property) {
		return ParserConstants.ESCAPED_PROPERTY_PREFIX + property + ParserConstants.ESCAPED_PROPERTY_SUFFIX;
	}

}
