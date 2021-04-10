package com.nagarro.nagp.yara.platform.logging;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.MDC;

import ch.qos.logback.classic.ClassicConstants;

/**
 * The Class RequestLoggingInterceptor.
 */
public class RequestLoggingInterceptor implements Filter {

    @Override
    public void destroy() {
        // do nothing
    }

    @Override
    public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain chain)
        throws IOException, ServletException {

        this.insertIntoMDC(request);
        try {
            chain.doFilter(request, response);
        } finally {
            this.clearMDC();
        }
    }

    /**
     * Insert into MDC.
     *
     * @param request
     *            the request
     */
    void insertIntoMDC(final ServletRequest request) {
        if (request instanceof HttpServletRequest) {
            HttpServletRequest httpServletRequest = (HttpServletRequest) request;
            MDC.put(LoggerConstant.REQUEST_REQUEST_URI, httpServletRequest.getRequestURI());
        }
    }

    /**
     * Clear MDC.
     */
    void clearMDC() {
        MDC.remove(ClassicConstants.REQUEST_REQUEST_URI);
    }

    @Override
    public void init(final FilterConfig arg0) throws ServletException {
        // do nothing
    }
}
