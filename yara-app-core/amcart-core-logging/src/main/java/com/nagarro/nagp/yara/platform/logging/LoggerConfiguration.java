package com.nagarro.nagp.yara.platform.logging;

import java.util.Iterator;

import org.slf4j.event.Level;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.interceptor.AbstractTraceInterceptor;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * This is a logger configuration class which logs the entry/exit end points of class within root package
 * <b>com.nagarro.nagp</b>. </br>
 * </br>
 * By default this logging is enabled at trace level. </br>
 * </br>
 * Property can be overridden by providing below property in service.
 *
 * <pre>
 *  trace-logging:
 *   enabled: true
 *   pointcut:
 * gtm.className: execution(public * com.nagarro.nagp.className.method1(..))
 * </pre>
 *
 * </br>
 * To Disable the logging please provide below property
 *
 * <pre>
 *  trace-logging:
 *  enabled: false
 * </pre>
 *
 */
@Configuration
@ComponentScan
@EnableConfigurationProperties
@EnableAspectJAutoProxy
@ConditionalOnProperty(prefix = LoggerConstant.SETTINGS_PREFIX, value = LoggerConstant.ENABLED_SETTING,
    matchIfMissing = true)
public class LoggerConfiguration {

    /** The config. */
    @Autowired
    private LoggerProperties prop;

    /**
     * method entry exit logging trace interceptor.
     *
     * @return the abstract trace interceptor
     */
    public AbstractTraceInterceptor entryExitTraceInterceptor() {
        final LoggerInterceptor logInterceptor = new LoggerInterceptor();
        logInterceptor.setUseDynamicLogger(true);
        logInterceptor.setLogLevel(Level.TRACE);
        logInterceptor.setEnterMessage(LoggerConstant.ENTER_MESSAGE);
        logInterceptor.setExitMessage(LoggerConstant.EXIT_MESSAGE);
        return logInterceptor;
    }

    /**
     * business context entry exit logging info interceptor.
     *
     * @return the abstract trace interceptor
     */
    public AbstractTraceInterceptor businessContextInfoInterceptor() {
        final LoggerInterceptor logInterceptor = new LoggerInterceptor();
        logInterceptor.setUseDynamicLogger(true);
        logInterceptor.setLogLevel(Level.INFO);
        logInterceptor.setEnterMessage(LoggerConstant.CONTROLLER_BUSINESS_CONTEXT_ENTER_MESSAGE);
        logInterceptor.setExitMessage(LoggerConstant.CONTROLLER_BUSINESS_CONTEXT_EXIT_MESSAGE);
        return logInterceptor;
    }

    /**
     * annotation advisor.
     *
     * @return the advisor
     */
    @Bean
    public Advisor traceAnnotationAdvisor() {
        final AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        final StringBuilder pointcutExpression = new StringBuilder();
        final Iterator<String> iter = this.prop.getPointcut().values().iterator();
        pointcutExpression.append("( ");
        if (iter.hasNext()) {
            while (iter.hasNext()) {
                pointcutExpression.append(iter.next());
                if (iter.hasNext()) {
                    pointcutExpression.append(LoggerConstant.JOIN_POINT_OR_SEPRATOR);
                }
            }
        } else {
            // Default advice if point cut not specify in property.
            pointcutExpression.append(LoggerConstant.NGM_DEFAULT_ADVICE);
        }
        pointcut.setExpression(pointcutExpression.toString());
        return new DefaultPointcutAdvisor(pointcut, this.entryExitTraceInterceptor());
    }

    /**
     * annotation advisor.
     *
     * @return the advisor
     */
    @Bean
    public Advisor restInfoAnnotationAdvisor() {
        final AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        final StringBuilder pointcutExpression = new StringBuilder(100);
        pointcutExpression.append("( ");
        // Default advice if point cut not specify in property.
        pointcutExpression.append(LoggerConstant.NGM_REST_ADVICE);
        pointcutExpression.append(") ");
        pointcut.setExpression(pointcutExpression.toString());
        return new DefaultPointcutAdvisor(pointcut, this.businessContextInfoInterceptor());
    }

    /**
     * Request logging interceptor.
     *
     * @return the request logging interceptor
     */
    @Bean
    public RequestLoggingInterceptor requestLoggingInterceptor() {
        return new RequestLoggingInterceptor();
    }
}