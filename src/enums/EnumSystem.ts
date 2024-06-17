/*
 * @Author: zhangwei
 * @Date: 2023-04-18 22:00:27
 * @Description:
 */

/**
 * 系统字典
 */
export enum EnumWebsocket {
  /**更新系统字典 */
  UPDATE_DATA_DICT = "UPDATE_DATA_DICT",

  群发消息 = "群发消息",
  创建群聊 = "创建群聊",
  创建单聊 = "创建单聊",
  单点发送消息 = "单点发送消息",
  修改群信息 = "修改群信息",
  退出群聊 = "退出群聊",
  解散群聊 = "解散群聊",
  邀请新人 = "邀请新人",
  修改參數配置 = "修改參數配置",
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8",
}

/**
 * 字典枚举
 */
export enum EnumSysDict {
  '题目类型'='questions_type',
'灵活性状态'='flexibility_state',
'男女性别'='sys_sex',
'系统参数类型'='sysconfig_type',
'授权策略'='global_perms_type',
'字典类型'='dict_type',
'评价类型'='sppraise_type',
'是否'='sys_num_flag',
'身份'='people_type',
'申请豁免类型'='exempt_type',
'优化类型'='optimization_type',
'业务办理状态'='business_status',
'业务类型'='business_type',
'安全生产任务频次'='task_frequency',
'安全生产任务行为'='task_behavior',
'安全生产任务类型'='task_type',
'督办类型'='supervise_type',
'会议类型'='meeting_type',
'企业类型'='comp_type',
'是否字典'='flag',
'系统配置'='sys_config',
'国际化类型'='i18n_type',
'订单日志标识'='order_log_mark',
'是否可用'='dict_status',
'流程类型'='bpm_process_type',
'开关'='is_open',
'菜单类型'='menu_type',
'有效无效状态'='valid_status',
'字典状态'='dict_item_status',
'定时任务状态'='quartz_status',
'机构类型'='org_category',
'职务职级'='position_rank',
'操作类型'='operate_type',
'1是0否'='yn',
'通告类型'='msg_category',
'发布状态'='send_status',
'消息发送状态'='msgSendStatus',
'发送消息类型'='msgType',
'条件规则'='rule_conditions',
'部门状态'='depart_status',
'用户状态'='user_status',
'状态'='status',
'推送类别'='msg_type',
'优先级'='priority',
'删除状态'='del_flag',
'员工类型'='user_type',
'性别'='sex',
}
/**
 * 系统参数配置枚举
 */
export enum EnumSysConfig {
  /**网站标题 */
  "web_title" = "web_title",
  /**登录页面标题 */
  "login_text" = "login_text",
}

/**
 * 查询条件
 */
export enum EnumQueryCondition {
  /**
   * 不为空
   */
  不为空 = "NOT_NULL",
  /**
   * 为空
   */
  为空 = "IS_NULL",
  不等于 = "!",
  小于 = "lt ",
  小于等于 = "le ",
  大于 = "gt ",
  大于等于 = "ge ",
  /**
   * NOT_IN条件1,条件2,条件3
   */
  不在范围内取值 = "NOT_IN",
}

/**
 * 高级查询的多条件匹配规则
 */
export enum EnumMatchType {
  并且 = "and",
  或者 = "or",
}
/**
 * 图标枚举
 */
export enum EnumIcon {
  查询 = "ant-design:search-outlined",
  重置 = "ant-design:reload-outlined",
  新增 = "ant-design:plus-square-outlined",
  编辑 = "ant-design:edit-outlined",
  查看 = "ant-design:zoom-in-outlined",
}
