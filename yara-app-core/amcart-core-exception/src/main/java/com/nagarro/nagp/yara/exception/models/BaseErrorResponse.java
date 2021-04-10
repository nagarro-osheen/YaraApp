package com.nagarro.nagp.yara.exception.models;

import java.util.List;
import java.util.Map;

public class BaseErrorResponse<T> extends BaseResponse<T> {

    private static final long serialVersionUID = 1L;

    /** The service which failed. */
    private String serviceWhichFailed;

    /** The service which failed identifier. */
    private String serviceWhichFailedIdentifier;

    /** The correlation id. */
    private String correlationId;

    /** The error code */
    private String errorCode;

    public BaseErrorResponse() {

    }

    /**
     *
     * @param status
     * @param messages
     */
    public BaseErrorResponse(String status, List<ResponseMessage> messages) {
        super(status, messages);
    }

    /**
     *
     * @param status
     * @param data
     */
    public BaseErrorResponse(String status, T data) {
        super(status, data);
    }

    /**
     *
     * @param status
     * @param messages
     * @param serviceWhichFailed
     * @param serviceWhichFailedIdentifier
     * @param correlationId
     * @param paramMap
     * @param errorCode
     */
    public BaseErrorResponse(String status, List<ResponseMessage> messages, String serviceWhichFailed,
        String serviceWhichFailedIdentifier, String correlationId, Map<String, Object> paramMap, String errorCode) {
        super(status, messages);
        super.setParamMap(paramMap);
        this.serviceWhichFailed = serviceWhichFailed;
        this.serviceWhichFailedIdentifier = serviceWhichFailedIdentifier;
        this.correlationId = correlationId;
        this.errorCode = errorCode;
    }

    /**
     *
     * @return serviceWhichFailed
     */
    public String getServiceWhichFailed() {
        return serviceWhichFailed;
    }

    /**
     *
     * @return serviceWhichFailedIdentifier
     */
    public String getServiceWhichFailedIdentifier() {
        return serviceWhichFailedIdentifier;
    }

    /**
     *
     * @return correlationId
     */
    public String getCorrelationId() {
        return correlationId;
    }

    /**
     *
     * @return errorCode
     */
    public String getErrorCode() {
        return errorCode;
    }

}