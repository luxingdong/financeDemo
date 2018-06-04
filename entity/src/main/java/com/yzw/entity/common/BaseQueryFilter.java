package com.yzw.entity.common;

import java.io.Serializable;

/**
 * Created by admin on 2018/4/8.
 */
public class BaseQueryFilter implements Serializable {
    private String orderBy;

    private Integer pageNum = 1;

    private Integer pageSize = 10;

    public Integer getOffset() {
        Integer offset =0;
        if(pageNum > 1){
            offset = (pageNum - 1) * pageSize;
        }

        return offset;
    }

    public String getOrderBy() {
        return orderBy;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
