package com.nagarro.nagp.amcart.datasource.mysql.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;

import com.zaxxer.hikari.HikariDataSource;

/**
 * Configuration for mysql data source.
 */
@Configuration
public class MysqlDataSourceConfig {

    /** Constant for MySql Driver */
    private static final String MYSQL_DRIVER_CLASS = "com.mysql.jdbc.Driver";

    /** URL for MySql database */
    @Value("${mysql.datasource.url}")
    private String url;

    /** MySql user name */
    @Value("${mysql.datasource.username}")
    private String username;

    /** MySql password */
    @Value("${mysql.datasource.password}")
    private String password;

    /** Datasource minimum pool size */
    @Value("${mysql.datasource.pool.minsize:5}")
    private Integer minSize;

    /** Datasource maximum pool size */
    @Value("${mysql.datasource.pool.maxsize:20}")
    private Integer maxSize;

    /**
     * MySql datasource instance
     */
    private HikariDataSource mysqlDataSource;

    /**
     * Creates a bean of MySql datasource.
     *
     * @return datasource instance for MySql
     */
    @Primary
    @Bean
    public DataSource dataSource() {
        this.mysqlDataSource = new HikariDataSource();
        this.mysqlDataSource.setDriverClassName(MYSQL_DRIVER_CLASS);
        this.mysqlDataSource.setJdbcUrl(this.url);
        this.mysqlDataSource.setUsername(this.username);
        this.mysqlDataSource.setPassword(this.password);
        this.mysqlDataSource.setMinimumIdle(this.minSize);
        this.mysqlDataSource.setMaximumPoolSize(this.maxSize);
        this.mysqlDataSource.setConnectionInitSql("SELECT 1 FROM DUAL");
        this.mysqlDataSource.setAutoCommit(false);
        return this.mysqlDataSource;
    }

    /**
     * Jdbc template for mysql.
     *
     * @return the jdbc template
     */
    @Bean
    @DependsOn("dataSource")
    public JdbcTemplate jdbcTemplate() {
        return new JdbcTemplate(this.mysqlDataSource);
    }

}
