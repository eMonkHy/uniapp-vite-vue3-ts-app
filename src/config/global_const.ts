/**
 * 全局常量
 */
export const ande_const = {
  /**activiti请求前缀 */
  ACTIVITI_URL_PRE: "/activiti/activitiService/",
  CONFIG: {
    useTimeAgoOption: {
      messages: {
        justNow: "现在",
        past: "{0}之前",
        future: "将来 {0}",
        invalid: "失效 {0}",
        second: "{0}秒",
        minute: "{0}分钟",
        hour: "{0}小时",
        day: "{0}天",
        week: "{0}周",
        month: "{0}月",
        year: "{0}年",
      },
    },
  },
  ACCESS_TOKEN: "Access-Token",
  SIDEBAR_TYPE: "SIDEBAR_TYPE",
  DEFAULT_THEME: "DEFAULT_THEME",
  DEFAULT_LAYOUT_MODE: "DEFAULT_LAYOUT_MODE",
  DEFAULT_COLOR: "DEFAULT_COLOR",
  DEFAULT_COLOR_WEAK: "DEFAULT_COLOR_WEAK",
  DEFAULT_FIXED_HEADER: "DEFAULT_FIXED_HEADER",
  DEFAULT_FIXED_SIDEMENU: "DEFAULT_FIXED_SIDEMENU",
  DEFAULT_FIXED_HEADER_HIDDEN: "DEFAULT_FIXED_HEADER_HIDDEN",
  DEFAULT_CONTENT_WIDTH_TYPE: "DEFAULT_CONTENT_WIDTH_TYPE",
  DEFAULT_MULTI_PAGE: "DEFAULT_MULTI_PAGE",
  USER_NAME: "Login_Username",
  USER_INFO: "Login_Userinfo",
  USER_AUTH: "LOGIN_USER_BUTTON_AUTH",
  SYS_BUTTON_AUTH: "SYS_BUTTON_AUTH",
  ENCRYPTED_STRING: "ENCRYPTED_STRING",
  ENHANCE_PRE: "enhance_",
  UI_CACHE_DB_DICT_DATA: "UI_CACHE_DB_DICT_DATA",
  INDEX_MAIN_PAGE_PATH: "/dashboard/analysis",
  INDEX_MAIN_PAGE_TAB: {
    icon: "GithubOutlined",
    path: "/dashboard/analysis",
    title: "首页",
  },
  OAUTH2_LOGIN_PAGE_PATH: "/oauth2-app/login",
  TENANT_ID: "TENANT_ID",
  ONL_AUTH_FIELDS: "ONL_AUTH_FIELDS",
  XY_SPARE_DICT: "XY_SPARE_DICT",
  //路由缓存问题，关闭了tab页时再打开就不刷新 #842
  CACHE_INCLUDED_ROUTES: "CACHE_INCLUDED_ROUTES",
  /**andetable表格 */
  ande_table: {
    /**行内新增前缀标识 */
    addRowPrefix: "add-",
  },
  router: {
    LOGIN: {
      name: "login",
    },
  },
  /**
   * 全局图标定义
   */
  iconify: {
    查询: "ant-design:search-outlined",
    重置: "ant-design:reload-outlined",
    删除: "ant-design:delete-outlined",
    新增: "mdi:add-bold",
    编辑: "ant-design:edit-outlined",
    帮助: "ant-design:question-circle-outlined",
    启动: "ant-design:right-circle-outlined",
    暂停: "ant-design:pause-circle-outlined",
    历史: "ant-design:history-outlined",
    时间: "ant-design:clock-circle-filled",
    上传: "ant-design:cloud-upload-outlined",
    用户: "ant-design:user-outlined",
    预览: "ant-design:file-search-outlined",
    下载: "ant-design:download-outlined",
    流程: "carbon:flow-data",
  },
  dayJs: {
    标准时间戳: "YYYY-MM-DD HH:mm:ss",
    标准时间: "YYYY-MM-DD",
  },
  /**
   * 图标和天气现象的映射关系
   * key: 某一类天气现象，这个key会和icon文件名一一对应
   * value: 某一类下天气现象，可以按照自己的需求划分分类
   * @see https://lbs.amap.com/api/webservice/guide/tools/weather-code
   */
  iconWeatherMap: {
    风: ["有风", "平静", "微风", "和风", "清风", "强风/劲风", "疾风", "大风", "烈风", "风暴", "狂爆风", "飓风", "热带风暴", "龙卷风"],
    多云: ["少云", "晴间多云", "多云"],
    雪: ["雪", "阵雪", "小雪", "中雪", "大雪", "暴雪", "小雪-中雪", "中雪-大雪", "大雪-暴雪", "冷"],
    雾: ["浮尘", "扬沙", "沙尘暴", "强沙尘暴", "雾", "浓雾", "强浓雾", "轻雾", "大雾", "特强浓雾"],
    晴: ["晴", "热"],
    雨夹雪: ["雨雪天气", "雨夹雪", "阵雨夹雪"],
    雨: ["阵雨", "雷阵雨", "雷阵雨并伴有冰雹", "小雨", "中雨", "大雨", "暴雨", "大暴雨", "特大暴雨", "强阵雨", "强雷阵雨", "极端降雨", "毛毛雨/细雨", "雨", "小雨-中雨", "中雨-大雨", "大雨-暴雨", "暴雨-大暴雨", "大暴雨-特大暴雨", "冻雨"],
    阴: ["阴", "霾", "中度霾", "重度霾", "严重霾", "未知"],
  },
  iconifyWeather: {
    风: "solar:wind-bold-duotone",
    夜晚多云: "solar:cloudy-moon-bold-duotone",
    白天多云: "solar:cloud-sun-2-bold-duotone",
    雪: "noto:snowflake",
    雾: "solar:fog-bold-duotone",
    晴: "line-md:sunny-outline-twotone-loop",
    雨夹雪: "carbon:sleet",
    雨: "solar:cloud-rain-bold-duotone",
    阴: "solar:clouds-bold-duotone",
  },
  activiti: {
    模型前缀: "model:",
    业务名称: "流程",
    分类字典: "process_center_code",
    其余发起流程: "process_category_codes",
    工作事项分类字典Id: "1799775662328860674",
  },
}
