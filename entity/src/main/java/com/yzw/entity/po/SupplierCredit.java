package com.yzw.entity.po;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * @author 
 */
public class SupplierCredit implements Serializable {
    /**
     * 系统编号
     */
    private Integer sysno;

    /**
     * 分供方编号
     */
    private Integer suppliersysno;

    /**
     * 总分数
     */
    private BigDecimal score;

    /**
     * 分数详情
     */
    private String scoredetail;

    /**
     * 可用于判定是否为历史数据
     */
    private Date date;

    /**
     * 信用级别
     */
    private Integer level;

    /**
     * 分数相对与上次统计的变化趋势
     */
    private Integer trend;

    /**
     * 创建人SysNo
     */
    private Integer inusersysno;

    /**
     * 创建者显示名
     */
    private String inusername;

    /**
     * 创建时间
     */
    private Date indate;

    /**
     * 编辑人SysNo
     */
    private Integer editusersysno;

    /**
     * 编辑者显示名
     */
    private String editusername;

    /**
     * 编辑时间
     */
    private Date editdate;

    private Integer businesstype;

    private Date scoredate;

    private static final long serialVersionUID = 1L;

    public Integer getSysno() {
        return sysno;
    }

    public void setSysno(Integer sysno) {
        this.sysno = sysno;
    }

    public Integer getSuppliersysno() {
        return suppliersysno;
    }

    public void setSuppliersysno(Integer suppliersysno) {
        this.suppliersysno = suppliersysno;
    }

    public BigDecimal getScore() {
        return score;
    }

    public void setScore(BigDecimal score) {
        this.score = score;
    }

    public String getScoredetail() {
        return scoredetail;
    }

    public void setScoredetail(String scoredetail) {
        this.scoredetail = scoredetail;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getTrend() {
        return trend;
    }

    public void setTrend(Integer trend) {
        this.trend = trend;
    }

    public Integer getInusersysno() {
        return inusersysno;
    }

    public void setInusersysno(Integer inusersysno) {
        this.inusersysno = inusersysno;
    }

    public String getInusername() {
        return inusername;
    }

    public void setInusername(String inusername) {
        this.inusername = inusername;
    }

    public Date getIndate() {
        return indate;
    }

    public void setIndate(Date indate) {
        this.indate = indate;
    }

    public Integer getEditusersysno() {
        return editusersysno;
    }

    public void setEditusersysno(Integer editusersysno) {
        this.editusersysno = editusersysno;
    }

    public String getEditusername() {
        return editusername;
    }

    public void setEditusername(String editusername) {
        this.editusername = editusername;
    }

    public Date getEditdate() {
        return editdate;
    }

    public void setEditdate(Date editdate) {
        this.editdate = editdate;
    }

    public Integer getBusinesstype() {
        return businesstype;
    }

    public void setBusinesstype(Integer businesstype) {
        this.businesstype = businesstype;
    }

    public Date getScoredate() {
        return scoredate;
    }

    public void setScoredate(Date scoredate) {
        this.scoredate = scoredate;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        SupplierCredit other = (SupplierCredit) that;
        return (this.getSysno() == null ? other.getSysno() == null : this.getSysno().equals(other.getSysno()))
            && (this.getSuppliersysno() == null ? other.getSuppliersysno() == null : this.getSuppliersysno().equals(other.getSuppliersysno()))
            && (this.getScore() == null ? other.getScore() == null : this.getScore().equals(other.getScore()))
            && (this.getScoredetail() == null ? other.getScoredetail() == null : this.getScoredetail().equals(other.getScoredetail()))
            && (this.getDate() == null ? other.getDate() == null : this.getDate().equals(other.getDate()))
            && (this.getLevel() == null ? other.getLevel() == null : this.getLevel().equals(other.getLevel()))
            && (this.getTrend() == null ? other.getTrend() == null : this.getTrend().equals(other.getTrend()))
            && (this.getInusersysno() == null ? other.getInusersysno() == null : this.getInusersysno().equals(other.getInusersysno()))
            && (this.getInusername() == null ? other.getInusername() == null : this.getInusername().equals(other.getInusername()))
            && (this.getIndate() == null ? other.getIndate() == null : this.getIndate().equals(other.getIndate()))
            && (this.getEditusersysno() == null ? other.getEditusersysno() == null : this.getEditusersysno().equals(other.getEditusersysno()))
            && (this.getEditusername() == null ? other.getEditusername() == null : this.getEditusername().equals(other.getEditusername()))
            && (this.getEditdate() == null ? other.getEditdate() == null : this.getEditdate().equals(other.getEditdate()))
            && (this.getBusinesstype() == null ? other.getBusinesstype() == null : this.getBusinesstype().equals(other.getBusinesstype()))
            && (this.getScoredate() == null ? other.getScoredate() == null : this.getScoredate().equals(other.getScoredate()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getSysno() == null) ? 0 : getSysno().hashCode());
        result = prime * result + ((getSuppliersysno() == null) ? 0 : getSuppliersysno().hashCode());
        result = prime * result + ((getScore() == null) ? 0 : getScore().hashCode());
        result = prime * result + ((getScoredetail() == null) ? 0 : getScoredetail().hashCode());
        result = prime * result + ((getDate() == null) ? 0 : getDate().hashCode());
        result = prime * result + ((getLevel() == null) ? 0 : getLevel().hashCode());
        result = prime * result + ((getTrend() == null) ? 0 : getTrend().hashCode());
        result = prime * result + ((getInusersysno() == null) ? 0 : getInusersysno().hashCode());
        result = prime * result + ((getInusername() == null) ? 0 : getInusername().hashCode());
        result = prime * result + ((getIndate() == null) ? 0 : getIndate().hashCode());
        result = prime * result + ((getEditusersysno() == null) ? 0 : getEditusersysno().hashCode());
        result = prime * result + ((getEditusername() == null) ? 0 : getEditusername().hashCode());
        result = prime * result + ((getEditdate() == null) ? 0 : getEditdate().hashCode());
        result = prime * result + ((getBusinesstype() == null) ? 0 : getBusinesstype().hashCode());
        result = prime * result + ((getScoredate() == null) ? 0 : getScoredate().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", sysno=").append(sysno);
        sb.append(", suppliersysno=").append(suppliersysno);
        sb.append(", score=").append(score);
        sb.append(", scoredetail=").append(scoredetail);
        sb.append(", date=").append(date);
        sb.append(", level=").append(level);
        sb.append(", trend=").append(trend);
        sb.append(", inusersysno=").append(inusersysno);
        sb.append(", inusername=").append(inusername);
        sb.append(", indate=").append(indate);
        sb.append(", editusersysno=").append(editusersysno);
        sb.append(", editusername=").append(editusername);
        sb.append(", editdate=").append(editdate);
        sb.append(", businesstype=").append(businesstype);
        sb.append(", scoredate=").append(scoredate);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}