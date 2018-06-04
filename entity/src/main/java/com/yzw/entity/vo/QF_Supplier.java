package com.yzw.entity.vo;

import com.yzw.entity.common.BaseQueryFilter;
import com.yzw.entity.common.GPSPoint;

import java.io.Serializable;

/**
 * Created by admin on 2018/4/4.
 */
public class QF_Supplier extends BaseQueryFilter implements Serializable{
    /**
     * 地图可视区左下角经纬度
     */
    private GPSPoint mapLeftPoint;

    /**
     * 地图可视区右上角经纬度
     */
    private GPSPoint mapRightPoint;

    /**
     *
     */
    private int businessType ;

    /**
     *
     */
    private String supplierName;
    /**
     * 搜索经纬值为空
     */
    private boolean isSearchNullGPSPostion;

    public GPSPoint getMapLeftPoint() {
        return mapLeftPoint;
    }

    public void setMapLeftPoint(GPSPoint mapLeftPoint) {
        this.mapLeftPoint = mapLeftPoint;
    }

    public GPSPoint getMapRightPoint() {
        return mapRightPoint;
    }

    public void setMapRightPoint(GPSPoint mapRightPoint) {
        this.mapRightPoint = mapRightPoint;
    }

    public int getBusinessType() {
        return businessType;
    }

    public void setBusinessType(int businessType) {
        this.businessType = businessType;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public boolean isSearchNullGPSPostion() {
        return isSearchNullGPSPostion;
    }

    public void setSearchNullGPSPostion(boolean searchNullGPSPostion) {
        isSearchNullGPSPostion = searchNullGPSPostion;
    }
}
