/**
 * 工艺看板全屏模式
 */
export enum EnumTaskFullScreenMode {
  "无" = "无",

  "我的申请" = "我的申请",
  "处理中" = "处理中",
  "已完成" = "已完成",
}

/**
 * 任务看板
 */
export enum EnumTaskMode {
  "会展商业订单分组" = "会展商业订单分组",
  "待处理" = "待处理",
  "处理中" = "处理中",
  "已完成" = "已完成",
}
/**
 * 任务状态
 *
 * @params 待处理:   未派单
 *                  未接单
 * @params 处理中:   已派单
 *                  已接单
 *                  待处理
 *                  已转单
 *                  已拒绝
 *                  已挂起
 *                  处理中
 *                  待校验审核
 *                  审核完成
 * @params 已处理:   结单
 *                  完成
 */
export enum EnumDispathStatus {
  "未派单" = "未派单",
  "未接单" = "待接单", //部门内人员
  "已派单" = "已派单", //部门负责人
  "已接单" = "已接单", //部门负责人
  "待处理" = "待处理", //部门内人员
  "转单已发起" = "转单已发起",
  "已转单" = "已转单",
  "已挂起" = "已挂起",
  "已拒绝" = "已拒绝",
  "处理中" = "处理中",
  "待校验审核" = "待校验审核",
  "待上级审批" = "待上级审批",
  "审核完成" = "审核完成",
  "结单" = "已结单",
  "完成" = "完成",
  "已归档" = "已归档",
}
export const taskDoingStatus = [
  EnumDispathStatus.已派单,
  EnumDispathStatus.已接单,
  EnumDispathStatus.待处理,
  EnumDispathStatus.转单已发起,
  EnumDispathStatus.已转单,
  EnumDispathStatus.已拒绝,
  EnumDispathStatus.已挂起,
  EnumDispathStatus.处理中,
  EnumDispathStatus.待校验审核,
];

export const taskDoneStatus = [
  EnumDispathStatus.审核完成,
  EnumDispathStatus.结单,
  EnumDispathStatus.完成,
];

export enum EnumTaskApprovalStatus {
  "审核成功" = "审核成功",
  "审核失败" = "审核失败",
  "复检" = "复检",
}

/**
 * 操作说明
 * todo 标准流程启用、派单、接单、处理、完成、归档
 * !! 如果是已完成，直接根据操作说明分组 派单到XX是派单的列表；
 */
export enum EnumTaskOperation {
  启动 = "启动",
  派单 = "派单",
  派单到部门 = "派单到部门",
  派单到指定人 = "派单到指定人",
  接单 = "接单",
  待接单 = "待接单",
  开始处理 = "开始处理",
  处理 = "处理",
  完成 = "完成",
  驳回 = "驳回",
  归档 = "归档",
  误报 = "误报",
  转单 = "转单",
  协同 = "协同",
  撤单 = "撤单",
  审批 = "审批",
  挂起 = "挂起",
  结单 = "已结单",
}

/**
 * 生命周期：
 * 启动、派单、接单（接单之后，处理之前可以转单）、
 * 处理（处理中，待校验审核，已挂起，已转单）、完成（接单，审核完成）、归档（已归档）
 */
export enum EnumTaskWorkOrderStatus {
  启动 = "启动",
  派单 = "派单",
  接单 = "接单",
  转单 = "转单",
  处理 = "处理",
  完成 = "完成",
  归档 = "归档",
}
