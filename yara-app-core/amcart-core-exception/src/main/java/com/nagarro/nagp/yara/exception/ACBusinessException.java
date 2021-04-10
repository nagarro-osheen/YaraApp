package com.nagarro.nagp.yara.exception;

import java.util.List;

import com.nagarro.nagp.yara.exception.models.ResponseMessage;

/**
 * This class extends the base class {@link ACBaseException} for providing the framework for checked exception
 * handling. The application should throw this exception in case of business fault.
 */
public class ACBusinessException extends ACBaseException {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = 1393115699347678628L;

    
    /**
     * Instantiates a new AC business exception.
     *
     * @param message the message
     * @param cause the cause
     * @param errorCode the error code
     */
    public ACBusinessException(final String message, final Throwable cause, final String errorCode) {
        super(message, cause, errorCode);
    }

    /**
     * Instantiates a new AC business exception.
     *
     * @param message the message
     * @param cause the cause
     */
    public ACBusinessException(final String message, final Throwable cause) {
        super(message, cause);
    }

    /**
     * Instantiates a new AC business exception.
     *
     * @param message the message
     */
    public ACBusinessException(final String message) {
        super(message);
    }

    /**
     * Instantiates a new AC business exception.
     *
     * @param message the message
     * @param cause the cause
     * @param errorCode the error code
     * @param isWarning the is warning
     */
    public ACBusinessException(final String message, final Throwable cause, final String errorCode,
        final boolean isWarning) {
        super(message, cause, errorCode, isWarning);
    }

    /**
     * Instantiates a new AC business exception.
     *
     * @param message the message
     * @param cause the cause
     * @param errorCode the error code
     * @param messages the messages
     */
    public ACBusinessException(final String message, final Throwable cause, final String errorCode,
        final List<ResponseMessage> messages) {
        super(message, cause, errorCode, messages);
    }
}
