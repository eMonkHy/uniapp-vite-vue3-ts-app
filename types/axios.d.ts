declare interface IRequestOptions {
  headers?: any
  
}
declare interface IRequestPromise<T = any>
  extends Promise<IRequestResponse<T>> {}

declare interface IRequestResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: any
  request?: any
}

declare interface IRequestInstance {
  (config: any): IRequestPromise
  (url: string, config?: any): IRequestPromise
  request<T = any>(config: any): IRequestPromise<T>
}

declare interface IRequestConfig {
  method?: any
  headers?: any
  url?: any
  data?: any
  params?: any
}

// Add options interface
declare interface ServiceOptions {
  axios?: IRequestInstance
}

//文件上传参数
declare interface UploadFileParams {
  // 其他参数
  data?: Recordable
  // 文件参数接口字段名
  name?: string
  // 文件
  file: File | Blob
  // 文件名
  filename?: string
  [key: string]: any
}
//文件返回参数
declare interface UploadFileCallBack {
  // 成功回调方法
  success?: any
  // 是否返回响应头,需要获取响应头时使用此属性
  isReturnResponse?: boolean
}
declare interface UploadApiResult {
  message: string
  code: number
  url: string
}

declare namespace NSAPI {
  /** 全局通过表格查询返回结果 */
  type IPageResult<T = any> = { records: T[] } & PaginationResult

  /** 全局通用表格分页返回数据结构 */
  type PaginationResult = {
    /**  */
    current?: number

    /**  */
    pages?: number

    /**  */
    size?: number

    /**  */
    total?: number
  }

  /** 全局通用表格分页请求参数 */
  type PageParams<T = any> = {
    pageSize?: number
    pageNo?: number
  } & {
    [P in keyof T]?: T[P]
  }

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string
    /** 业务上的错误信息 */
    errorMessage?: string
    /** 业务上的请求是否成功 */
    success?: boolean
  }

  /**
   * Ipage转化 将普通后盾接口转化
   */
  type IPageCovert<T> = NSAPI.IPageResult<T>
}
