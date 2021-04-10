/*
 *
 */
package com.nagarro.nagp.amcart;

import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Configuration;

/**
 * The gateway to AmCart application. Primary responsibility of this would be to
 * route incoming requests to the destined microservice.
 */
@Configuration
@EnableZuulProxy
public class GatewayConfiguration {

}
