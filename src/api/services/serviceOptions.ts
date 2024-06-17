/*
 * @Author: 张伟
 * @Date: 2023-04-06 14:05:37
 * @Description: 
 */
// import { axios as axiosInstance } from '@/utils/request'
import service from '@/api/request'




/** 异步加载axios 否则会报错 */
import('@/api/request').then((res) => {
})


export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}
export interface IRequestOptions {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
  timeout?: number;
}
// Instance selector
export function axios(
  configs: IRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void
): Promise<any> {
  if (service) { 
    return service
      .request(configs)
      .then((res) => {
        resolve(res || null)
      })
      .catch((err) => {
        reject(err)
      })
    } else {
      throw new Error(
      configs.url + '：please inject yourself instance like axios  '
    )
  }
}

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: IRequestOptions
): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url }
  configs.headers = {
    'Content-Type': contentType,
    ...options.headers,
  }
  return configs
}
