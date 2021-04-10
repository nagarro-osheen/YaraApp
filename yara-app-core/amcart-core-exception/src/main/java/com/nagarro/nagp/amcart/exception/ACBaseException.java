package com.nagarro.nagp.amcart.exception;

import java.util.List;
import java.util.Map;

import com.nagarro.nagp.amcart.exception.models.ResponseMessage;

/**
 * The base class encapsulating basic exception properties.
 */
public abstract class ACBaseException extends Exception {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = 1393115699347678628L;

    /**
     * The error code is used to identify type of exception ie. may be used to show error on UI
     */
    protected String errorCode;

    /** The param map. */
    public Map<String, Object> paramMap;

    /** The messages. */
    protected List<ResponseMessage> messages;

    /** The isWarning attribute. */
    protected boolean isWarning;

  
    /**
     * Instantiates a new AC base exception.
     *
     * @param message the message
     */
    public ACBaseException(final String message) {
        super(message);
    }

    /**
     * Instantiates a new AC base exception.
     *
     * @param message the message
     * @param errorCode the error code
     */
    public ACBaseException(final String message, final String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    /**
     * Instantiates a new AC base exception.
     *
     * @param message the message
     * @param cause the cause
     * @param errorCode the error code
     */
    public ACBaseException(final String message, final Throwable cause, final String errorCode) {
        super(message, cause);
        this.errorCode = errorCode;
    }

   
    /**
     * Instantiates a new AC base exception.
     *
     * @param message the message
     * @param cause the cause
     */
    public ACBaseException(final String message, final Throwable cause) {
        super(message, cause);
    }

  
    /**
     * Instantiates a new AC base exception.
     *
     * @param errorCode the error code
     * @param message the message
     * @param paramMap the param map
     */
    public ACBaseException(final String errorCode, final String message, final Map<String, Object> paramMap) {
        super(message);
        this.errorCode = errorCode;
        this.paramMap = paramMap;
    }

   
    /**
     * Instantiates a new AC base exception.
     *
     * @param message the message
     * @param cause the cause
     * @param errorCode the error code
     * @param isWarning the is warning
     */
    public ACBaseException(final String message, final Throwable cause, final String errorCode,
        final boolean isWarning) {
        super(message, cause);
        this.errorCode = errorCode;
        this.isWarning = isWarning;
    }

 
    /**
     * Instantiates a new AC base exception.
     *
     * @param message the message
     * @param cause the cause
     * @param errorCode the error code
     * @param messages the messages
     */
    public ACBaseException(final String message, final Throwable cause, final String errorCode,
        final List<ResponseMessage> messages) {
        super(message, cause);
        this.errorCode = errorCode;
        this.messages = messages;
    }

    /**
     * Gets the error code.
     *
     * @return the error code
     */
    public String getErrorCode() {
        return this.errorCode;
    }

    /**
     * Sets the error code.
     *
     * @param errorCode
     *            the new error code
     */
    public void setErrorCode(final String errorCode) {
        this.errorCode = errorCode;
    }

    /**
     * Gets the param map.
     *
     * @return the param map
     */
    public Map<String, Object> getParamMap() {
        return this.paramMap;
    }

    /**
     * Sets the param map.
     *
     * @param paramMap
     *            the param map
     */
    public void setParamMap(final Map<String, Object> paramMap) {
        this.paramMap = paramMap;
    }

    /**
     * Gets the isWarning attribute.
     *
     * @return the boolean
     */
    public boolean isWarning() {
        return isWarning;
    }

    /**
     * Sets the isWarning.
     *
     * @param isWarning
     *            the isWarning attribute
     */
    public void setWarning(boolean isWarning) {
        this.isWarning = isWarning;
    }

    /**
     * Gets the messages.
     *
     * @return the messages
     */
    public List<ResponseMessage> getMessages() {
        return messages;
    }

    /**
     * Sets the messages.
     *
     * @param messages the new messages
     */
    public void setMessages(List<ResponseMessage> messages) {
        this.messages = messages;
    }

    /**
     * Gets the detail.
     *
     * @return the detail
     */
    public String getDetail() {
        return this.getClass().getSimpleName() + " [message=" + this.getMessage() + ", errorCode=" + this.errorCode
            + "]";
    }

}
