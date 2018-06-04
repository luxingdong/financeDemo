package com.yzw.entity.common;

import java.io.Serializable;
import java.util.List;

/**
 * Created by admin on 2018/4/8.
 */
public class BasePageResult<T> implements Serializable {
    private Long total; //总记录数

    private List<T> list; //结果集

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
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

    public Integer getPages() {
        return pages;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    private Integer pageNum; //第几页

    private Integer pageSize; //每页记录数

    private Integer pages; // 总页数

}
