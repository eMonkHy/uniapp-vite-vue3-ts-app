export enum EnumFormFieldType {
  字符串 = "字符串",
  数字 = "数字",
  时间 = "时间",
}

/**
 * 审批模式
 */
export enum EnumApprovalType {
  根据角色选择 = "0",
  直接选择人员 = "1",
  部门 = "2",
  发起人 = "3",
  发起人的部门负责人 = "4",

  部门负责人 = "5",
  表单变量 = "6",

  连续多级部门主管 = "multiLevelLeadership",
  发起人上级部门负责人 = "createBySuperiorDepartmentHead",
}

export enum EnumBpmProcessType {
  "设备告警"="设备告警",
  "事件告警"="事件告警",
  "安防告警"="安防告警",
  "核销管理"="核销管理",
}


export enum EnumActivitiCmd {
  "修改节点"="修改节点",
  "事件告警"="事件告警",
  "安防告警"="安防告警",
  "核销管理"="核销管理",
}

