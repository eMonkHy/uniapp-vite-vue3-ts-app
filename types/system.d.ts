/*
 * @Author: zhangwei
 * @Date: 2023-04-08 21:25:06
 * @Description:
 */
import { UserPermissionAuthVo } from "@/api/services/systemService";


declare interface AndeMenuItemType {
  component?: any;
  id?: string;
  path?: string;
  children?: AndeMenuItemType[];
  name?: string;
  route?: string;
  redirect?: string;
  alwaysShow?: boolean;
  hidden?: boolean;
  meta: {
    permissionList?: any[];
    componentName?: string;
    icon?: string;
    internalOrExternal?: boolean;
    keepAlive?: boolean;
    title?: string;
    url?: string;
  };
}
/**
 * 权限命名空间
 */
namespace NsPermissions {
  interface PermissionReturnData {
    allAuth: UserPermissionAuthVo[];
    auth: UserPermissionAuthVo[];
    menu: AndeMenuItemType[];
  }
}
namespace NsAndeWebsocket {
  interface WebsocketHandleData {
    cmd: string;
    msgTxt: string;
  }
}
namespace NsSystem {
  type dictItemsList = Record<string, DictModel[]>;

  interface txLocation {
    status: number;
    message: string;
    request_id: string;
    result: {
      ip: string;
      location: {
        lat: number;
        lng: number;
      };
      ad_info: {
        nation: string;
        province: string;
        city: string;
        district: string;
        adcode: number;
        nation_code: number;
      };
    };
  }

  interface gdWeatherParams {
    key: string;
    city: string | number;
    extensions?: "" | "base" | "all";
    output?: "JSON" | "XML";
  }

  interface gdWeather {
    status: string;
    count: string;
    info: string;
    /**返回状态说明,10000代表正确 */
    infocode: string;
    /**实况天气数据信息 */
    lives?: {
      /**省份名 */
      province: string;
      /**城市名 */
      city: string;
      /**区域编码 */
      adcode: string;
      /**天气现象（汉字描述） */
      weather: string;
      /**实时气温，单位：摄氏度 */
      temperature: string;
      /**风向描述 */
      winddirection: string;
      /**风力级别：单位：级 */
      windpower: string;
      /**空气湿度 */
      humidity: string;
      /**数据发布时间 */
      reporttime: string;
    }[];
    forecast?: {
      /**城市名称 */
      city?: string;
      /**城市编码 */
      adcode?: string;
      /**省份名称 */
      province?: string;
      /**预报发布时间 */
      reporttime?: string;
      /**预报数据list结构，元素cast，按顺序为当天、第二天、第三天的预报数据 */
      casts?: {
        /**日期 */
        date?: string;
        /**星期几 */
        week?: string;
        /**白天天气现象 */
        dayweather?: string;
        /**晚上天气现象 */
        nightweather?: string;
        /**白天风向 */
        daywind?: string;
        /**晚上风向 */
        nightwind?: string;
        /**白天温度 */
        daytemp?: string;
        /**晚上温度 */
        nighttemp?: string;
        /**白天风力 */
        daypower?: string;
        /**晚上风力 */
        nightpower?: string;
      }[];
    }[];
  }
}
export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

