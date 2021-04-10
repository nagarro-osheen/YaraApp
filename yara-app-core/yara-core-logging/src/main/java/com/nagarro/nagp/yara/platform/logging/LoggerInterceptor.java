/*
 *
 */
package com.nagarro.nagp.yara.platform.logging;

import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.logging.Log;
import org.slf4j.MDC;
import org.slf4j.event.Level;
import org.springframework.aop.interceptor.CustomizableTraceInterceptor;

/**
 * The Class LoggerInterceptor extends {@link CustomizableTraceInterceptor}. </br>
 * Messages are written on method entry and exit if, successful </br>
 */
public class LoggerInterceptor extends CustomizableTraceInterceptor {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = -5564255106508508977L;

    /** The log exception. */
    private boolean logException = false;

    /** The log exception. */
    private Level logLevel;

    /**
     * Writes the supplied message to the supplied {@code Log} instance. By default messages are written at
     * {@code DEBUG} level.
     *
     * @param logger
     *            the logger
     * @param message
     *            the message
     * @param ex
     *            the ex
     */
    @Override
    protected void writeToLog(final Log logger, final String message, final Throwable ex) {

        if (this.logException || ex == null) {
            if (this.logLevel.equals(Level.INFO)) {
                if (ex != null) {
                    logger.info(message, ex);
                } else {
                    logger.info(message);
                }
            } else {
                if (ex != null) {
                    logger.trace(message, ex);
                } else {
                    logger.trace(message);
                }
            }
        }
    }

    /**
     * Determine whether the given {@link Log} instance is enabled.
     *
     * @param logger
     *            the {@code Log} instance to check
     * @return true, if is log enabled
     */
    @Override
    protected boolean isLogEnabled(final Log logger) {
        boolean isEnabled = false;
        if (this.logLevel.equals(Level.INFO)) {
            isEnabled = logger.isInfoEnabled();
        } else if (this.logLevel.equals(Level.TRACE)) {
            isEnabled = logger.isTraceEnabled();
        }
        return isEnabled;
    }

    @Override
    protected String replacePlaceholders(final String message, final MethodInvocation methodInvocation,
        final Object returnValue, final Throwable throwable, final long invocationTime) {
        String msg = message;
        if (MDC.get(LoggerConstant.REQUEST_REQUEST_URI) != null) {
            msg = msg.replace(LoggerConstant.ENDPOINT_URL, MDC.get(LoggerConstant.REQUEST_REQUEST_URI));
        }
        return super.replacePlaceholders(msg, methodInvocation, returnValue, throwable, invocationTime);
    }

    /**
     * Checks if is log exception.
     *
     * @return true, if is log exception
     */
    public boolean isLogException() {
        return this.logException;
    }

    /**
     * Sets the log exception.
     *
     * @param logException
     *            the new log exception
     */
    public void setLogException(final boolean logException) {
        this.logException = logException;
    }

    /**
     * Sets the log level.
     *
     * @param logLevel
     *            the new log level
     */
    public void setLogLevel(final Level logLevel) {
        this.logLevel = logLevel;
    }
}
