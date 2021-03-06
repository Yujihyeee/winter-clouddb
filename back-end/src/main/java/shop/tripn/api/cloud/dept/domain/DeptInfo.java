package shop.tripn.api.cloud.dept.domain;

import lombok.Data;

public interface DeptInfo {
    String getDeptName();
    Integer getDeptNo();
    Integer getEmpCountPerDept();
    Integer getSalSum();
}
