package com.nagarro.nagp.amcart.platform.logging;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * The Class is used for Logger properties.
 */
@Component
@ConfigurationProperties(prefix = LoggerConstant.SETTINGS_PREFIX)
public final class LoggerProperties {

    /** The pointcut. */
    private Map<String, String> pointcut = new HashMap<String, String>();

    /** The enabled. */
    private boolean enabled = true;

    /**
     * Sets the pointcut.
     *
     * @param pointcut
     *            the pointcut
     */
    public void setPointcut(final Map<String, String> pointcut) {
        this.pointcut = pointcut;
    }

    /**
     * Gets the pointcut.
     *
     * @return the pointcut
     */
    public Map<String, String> getPointcut() {
        return pointcut;
    }

    /**
     * Sets the enabled.
     *
     * @param enabled
     *            the new enabled
     */
    public void setEnabled(final boolean enabled) {
        this.enabled = enabled;
    }

    /**
     * Gets the enabled.
     *
     * @return the enabled
     */
    public boolean getEnabled() {
        return enabled;
    }
}
