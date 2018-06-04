package com.yzw.springMvcHibernate.domain;

import javax.persistence.*;

/**
 * Created by admin on 2018/3/13.
 */
@Entity
@Table(name="city")
public class city {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="provinceId")
    private long provinceId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getProvinceId() {
        return provinceId;
    }

    public void setProvinceId(long provinceId) {
        this.provinceId = provinceId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    @Column(name="cityName")
    private  String cityName;
    @Column(name="description")
    private  String description;
}
