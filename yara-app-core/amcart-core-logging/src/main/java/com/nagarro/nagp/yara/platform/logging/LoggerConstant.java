/*
 *
 */
package com.nagarro.nagp.yara.platform.logging;

/**
 * This interface contains all the logging-related constants.
 *
 */
public final class LoggerConstant {

    /** The Constant ENDPOINT_URL. */
    public static final String ENDPOINT_URL = "${endpoint-url}";

    /** The Constant ENTER_MESSAGE. */
    public static final String ENTER_MESSAGE = "Entering Method $[methodName]($[arguments])";

    /** The Constant EXIT_MESSAGE. */
    public static final String EXIT_MESSAGE = "Leaving Method $[methodName](), "
        + "Execution Time $[invocationTime], returned $[returnValue]";

    /** The Constant ENTER_MESSAGE. */
    public static final String CONTROLLER_BUSINESS_CONTEXT_ENTER_MESSAGE = "Entering Service $[targetClassShortName] for rest-end-point "
        + ENDPOINT_URL + "($[arguments])";

    /** The Constant EXIT_MESSAGE. */
    public static final String CONTROLLER_BUSINESS_CONTEXT_EXIT_MESSAGE = "Leaving Service $[targetClassShortName] for rest-end-point "
        + ENDPOINT_URL + ", Execution Time $[invocationTime]";

    /** The Constant SETTINGS_PREFIX. */
    public static final String SETTINGS_PREFIX = "trace-logging";

    /** The Constant ENABLED_SETTING. */
    public static final String ENABLED_SETTING = "enabled";

    /** The Constant JOIN_POINT_OR_SEPRATOR. */
    public static final String JOIN_POINT_OR_SEPRATOR = " || ";

    /** The join point and seprator. */
    public static final String JOIN_POINT_AND_SEPRATOR = " && ";

    /** The Constant NGM_DEFAULT_ADVICE. */
    public static final String NGM_DEFAULT_ADVICE = " execution(public * com.nagarro.nagp.*.*(..))) ";

    /** The Constant NGM_REST_ADVICE. */
    public static final String NGM_REST_ADVICE = " execution(public * (@org.springframework.web.bind.annotation.RestController *).*(..))"
        + " && execution(public * com.nagarro.nagp..*.*(..))";

    /** The Constant REQUEST_REQUEST_URI. */
    public static final String REQUEST_REQUEST_URI = "http.requestURI";

    /**
     * Instantiates a new LoggerConstant.
     */
    private LoggerConstant() {
    }
}