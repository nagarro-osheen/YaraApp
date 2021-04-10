package com.nagarro.nagp.yara.exception;

import java.util.List;

import com.nagarro.nagp.yara.exception.models.ResponseMessage;

/**
 * The Class NGMTechnicalException.
 */
public class ACTechnicalException extends ACBaseException {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = 1L;

    /**
     * Instantiates a new GTM technical exception.
     *
     * @param message
     *            the message
     * @param cause
     *            the cause
     * @param errorCode
     *            The error code is used to identify type of exception ie. may be used to show error on UI
     */
    public ACTechnicalException(final String message, final Throwable cause, final String errorCode) {
        super(message, cause, errorCode);
    }

    /**
     * Instantiates a new GTM technical exception.
     *
     * @param message
     *            the message
     * @param cause
     *            the cause
     */
    public ACTechnicalException(final String message, final Throwable cause) {
        super(message, cause);
    }

    /**
     * Instantiates a new GTM technical exception.
     *
     * @param message
     *            the message
     */
    public ACTechnicalException(final String message) {
        super(message);
    }

    /**
     * Instantiates a new GTM technical exception.
     *
     * @param message
     *            the message
     * @param cause
     *            the cause
     * @param errorCode
     *            The error code is used to identify type of exception i.e may be used to show error on UI
     * @param messages
     *            the response messages
     */
    public ACTechnicalException(final String message, final Throwable cause, final String errorCode,
        final List<ResponseMessage> messages) {
        super(message, cause, errorCode, messages);
    }
}
