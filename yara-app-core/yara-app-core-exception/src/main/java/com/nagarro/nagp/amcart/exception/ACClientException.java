package com.nagarro.nagp.yara-app.exception;

import java.util.List;
import java.util.Map;

import com.nagarro.nagp.yara-app.exception.models.ResponseMessage;


/**
 * This class extends the base class {@link ACBaseException} for providing the framework for checked exception
 * handling. This exception is not available to any business module.
 */
public class ACClientException extends ACBaseException {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = 4085782802449992696L;

    /** The service which failed. */
    private String serviceWhichFailed;

    /** The correlation id. */
    private String correlationId;

    /** The service identifier which has failed. */
    private String serviceWhichFailedIdentifier;

    /**
     * Instantiates a new AC client exception.
     *
     * @param serviceWhichFailed
     *            the service which failed
     * @param message
     *            the message
     */
    public ACClientException(final String serviceWhichFailed, final String message) {
        super(message);
        this.serviceWhichFailed = serviceWhichFailed;
    }

    /**
     * Instantiates a new AC client exception.
     *
     * @param serviceWhichFailed
     *            the service which failed
     * @param error
     *            the error
     * @param message
     *            the message
     */
    public ACClientException(final String serviceWhichFailed, final Throwable error, final String message) {
        super(message, error);
        this.serviceWhichFailed = serviceWhichFailed;
    }

    /**
     * Instantiates a new AC client exception.
     *
     * @param serviceWhichFailed
     *            the service which failed
     * @param serviceWhichFailedIdentifier
     *            the service which failed identifier
     * @param errorCode
     *            The error code is used to identify type of exception ie. may be used to show error on UI
     * @param message
     *            the message
     */
    public ACClientException(final String serviceWhichFailed, final String serviceWhichFailedIdentifier,
        final String errorCode, final String message) {
        super(errorCode, message);
        this.serviceWhichFailed = serviceWhichFailed;
        this.serviceWhichFailedIdentifier = serviceWhichFailedIdentifier;
    }

    /**
     * Instantiates a new AC client exception.
     *
     * @param serviceWhichFailed
     *            the service which failed
     * @param serviceWhichFailedIdentifier
     *            the service which failed identifier
     * @param correlationId
     *            the correlation id
     * @param errorCode
     *            the error code
     * @param message
     *            the message
     */
    public ACClientException(final String serviceWhichFailed, final String serviceWhichFailedIdentifier,
        final String correlationId, final String errorCode, final String message) {
        super(errorCode, message);
        this.serviceWhichFailed = serviceWhichFailed;
        this.serviceWhichFailedIdentifier = serviceWhichFailedIdentifier;
        this.correlationId = correlationId;
    }

    /**
     * Instantiates a new AC client exception.
     *
     * @param serviceWhichFailed
     *            the service which failed
     * @param serviceWhichFailedIdentifier
     *            the service which failed identifier
     * @param correlationId
     *            the correlation id
     * @param errorCode
     *            the error code
     * @param message
     *            the message
     * @param paramMap
     *            the param map
     */
    public ACClientException(final String serviceWhichFailed, final String serviceWhichFailedIdentifier,
        final String correlationId, final String errorCode, final String message, final Map<String, Object> paramMap) {
        super(errorCode, message, paramMap);
        this.serviceWhichFailed = serviceWhichFailed;
        this.serviceWhichFailedIdentifier = serviceWhichFailedIdentifier;
        this.correlationId = correlationId;
    }

    /**
     * Instantiates a new AC client exception.
     *
     * @param message
     *            the message
     * @param cause
     *            the error
     * @param errorCode
     *            the error code
     * @param messages
     *            the response messages
     */
    public ACClientException(final String message, final Throwable cause, final String errorCode,
        final List<ResponseMessage> messages) {
        super(message, cause, errorCode, messages);
    }

    /**
     * @return the serviceWhichFailed
     */
    public String getServiceWhichFailed() {
        return serviceWhichFailed;
    }

    /**
     * @return the correlationId
     */
    public String getCorrelationId() {
        return correlationId;
    }

    /**
     * @return the serviceWhichFailedIdentifier
     */
    public String getServiceWhichFailedIdentifier() {
        return serviceWhichFailedIdentifier;
    }

}