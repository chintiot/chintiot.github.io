import{aZ as i,aL as s,u as r,v as e,H as p,I as o,bk as c}from"./chunks/framework.7BQS5fsx.js";const d=`openapi: "3.0.3"
info:
  title: 设备服务 (Device Service)
  description: 提供设备绑定、查询、更新、状态查询等功能
  version: "1.0.0"
servers:
  - url: https://api.chintsmart.com
    description: 生产环境
tags:
  - name: 设备服务
    description: 设备相关接口
paths:
  /device/bind:
    post:
      tags:
        - 设备服务
      summary: 绑定设备到用户
      description: 将设备绑定到当前用户
      operationId: deviceBind
      requestBody:
        required: true
        content:
          application/json:
            schema:
              allOf:
                - $ref: "#/components/schemas/CommonRequest"
                - type: object
                  properties:
                    params:
                      type: object
                      required:
                        - access_token
                        - device_id
                        - mac_addr
                        - sdk_version
                        - version
                        - status
                        - product_id
                        - category_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        device_id:
                          type: string
                          description: 设备 ID
                        mac_addr:
                          type: string
                          description: 设备 MAC 地址
                        device_secret:
                          type: string
                          description: 设备密钥
                        sdk_version:
                          type: string
                          description: SDK 版本
                        version:
                          type: string
                          description: 设备固件版本
                        net_addr:
                          type: string
                          description: 设备网络地址
                        status:
                          type: integer
                          description: |
                            设备状态:
                            0 - 未激活
                            1 - 在线
                            2 - 离线
                            3 - 禁用
                            4 - 已激活
                          enum: [0, 1, 2, 3, 4]
                        group_id:
                          type: integer
                          description: 空间编号（家 ID、房间 ID）
                        is_sub_device:
                          type: boolean
                          description: 是否为子设备
                        owned:
                          type: integer
                          description: |
                            获取方式:
                            0 - 被分享
                            1 - 拥有
                          enum: [0, 1]
                        product_id:
                          type: string
                          description: 产品 ID
                        category_id:
                          type: string
                          description: 品类 ID
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /device/query_by_user:
    post:
      tags:
        - 设备服务
      summary: 查询用户绑定的设备列表
      description: 分页查询当前用户绑定的设备列表
      operationId: deviceQueryByUser
      requestBody:
        required: true
        content:
          application/json:
            schema:
              allOf:
                - $ref: "#/components/schemas/CommonRequest"
                - type: object
                  properties:
                    params:
                      type: object
                      required:
                        - access_token
                        - user_id
                        - page_no
                        - page_size
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        user_id:
                          type: string
                          description: 用户 ID
                        page_no:
                          type: integer
                          description: 页码
                        page_size:
                          type: integer
                          description: 每页条数（1-100）
                          minimum: 1
                          maximum: 100
                        owned:
                          type: integer
                          description: |
                            获取方式:
                            0 - 被分享
                            1 - 拥有
                          enum: [0, 1]
                        group_id:
                          type: integer
                          description: 空间编号
                        is_sub_device:
                          type: boolean
                          description: 是否为子设备
      responses:
        "200":
          description: 查询成功
          content:
            application/json:
              schema:
                allOf:
                  - $ref: "#/components/schemas/CommonResponse"
                  - type: object
                    properties:
                      data:
                        type: object
                        properties:
                          total:
                            type: integer
                            description: 总条数
                          page_no:
                            type: integer
                            description: 页码
                          page_size:
                            type: integer
                            description: 每页条数
                          identity_id:
                            type: string
                            description: 飞燕身份 ID
                          device_list:
                            type: array
                            description: 设备列表
                            items:
                              $ref: "#/components/schemas/DeviceDetail"
  /device/update_info:
    post:
      tags:
        - 设备服务
      summary: 更新设备基本信息
      description: 更新设备的归属、空间、子设备标识等信息
      operationId: deviceUpdateInfo
      requestBody:
        required: true
        content:
          application/json:
            schema:
              allOf:
                - $ref: "#/components/schemas/CommonRequest"
                - type: object
                  properties:
                    params:
                      type: object
                      required:
                        - access_token
                        - device_id
                        - user_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        device_id:
                          type: string
                          description: 设备 ID
                        user_id:
                          type: string
                          description: 用户 ID
                        owned:
                          type: integer
                          description: |
                            获取方式:
                            0 - 被分享
                            1 - 拥有
                          enum: [0, 1]
                        group_id:
                          type: integer
                          description: 空间编号
                        is_sub_device:
                          type: boolean
                          description: 是否为子设备
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /device/query:
    post:
      tags:
        - 设备服务
      summary: 查询单个设备详情
      description: 查询指定设备的详细信息
      operationId: deviceQuery
      requestBody:
        required: true
        content:
          application/json:
            schema:
              allOf:
                - $ref: "#/components/schemas/CommonRequest"
                - type: object
                  properties:
                    params:
                      type: object
                      required:
                        - access_token
                        - user_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        user_id:
                          type: string
                          description: 用户 ID
                        device_id:
                          type: string
                          description: 设备 ID，query_model=0 时必填
      responses:
        "200":
          description: 查询成功
          content:
            application/json:
              schema:
                allOf:
                  - $ref: "#/components/schemas/CommonResponse"
                  - type: object
                    properties:
                      data:
                        $ref: "#/components/schemas/DeviceDetail"
  /device/query_status:
    post:
      tags:
        - 设备服务
      summary: 查询设备在线状态
      description: 查询指定设备的在线状态
      operationId: deviceQueryStatus
      requestBody:
        required: true
        content:
          application/json:
            schema:
              allOf:
                - $ref: "#/components/schemas/CommonRequest"
                - type: object
                  properties:
                    params:
                      type: object
                      required:
                        - access_token
                        - user_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        user_id:
                          type: string
                          description: 用户 ID
                        device_id:
                          type: string
                          description: 设备 ID
      responses:
        "200":
          description: 查询成功
          content:
            application/json:
              schema:
                allOf:
                  - $ref: "#/components/schemas/CommonResponse"
                  - type: object
                    properties:
                      data:
                        type: object
                        properties:
                          status:
                            type: integer
                            description: |
                              设备状态:
                              0 - 未激活
                              1 - 在线
                              2 - 离线
                              3 - 禁用
                              4 - 已激活
                            enum: [0, 1, 2, 3, 4]
  /device/query_record:
    post:
      tags:
        - 设备服务
      summary: 查询设备事件记录
      description: 分页查询设备的事件记录
      operationId: deviceQueryRecord
      requestBody:
        required: true
        content:
          application/json:
            schema:
              allOf:
                - $ref: "#/components/schemas/CommonRequest"
                - type: object
                  properties:
                    params:
                      type: object
                      required:
                        - access_token
                        - user_id
                        - query_model
                        - page_no
                        - page_size
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        user_id:
                          type: string
                          description: 用户 ID
                        query_model:
                          type: integer
                          description: |
                            查询方式:
                            0 - 按设备 ID 查询
                            1 - 按用户 ID 查询
                          enum: [0, 1]
                        page_no:
                          type: integer
                          description: 页码
                        page_size:
                          type: integer
                          description: 每页条数（1-100）
                          minimum: 1
                          maximum: 100
                        start:
                          type: integer
                          format: int64
                          description: 开始时间戳
                        end:
                          type: integer
                          format: int64
                          description: 结束时间戳
                        device_id:
                          type: string
                          description: 设备 ID，query_model=0 时必填
                        user_id_param:
                          type: string
                          description: 用户 ID，query_model=1 时必填
                        event_type:
                          type: integer
                          description: |
                            事件类型:
                            0 - 属性上报
                            1 - 故障及系统上报
                          enum: [0, 1]
      responses:
        "200":
          description: 查询成功
          content:
            application/json:
              schema:
                allOf:
                  - $ref: "#/components/schemas/CommonResponse"
                  - type: object
                    properties:
                      data:
                        type: object
                        properties:
                          total:
                            type: integer
                            description: 总条数
                          page_no:
                            type: integer
                            description: 页码
                          page_size:
                            type: integer
                            description: 每页条数
                          events_list:
                            type: array
                            description: 事件列表
                            items:
                              $ref: "#/components/schemas/DeviceEvent"
  /device/aliyun_living/realtime_data:
    post:
      tags:
        - 设备服务
      summary: 飞燕平台设备实时数据
      description: 参考飞燕平台文档
      operationId: deviceAliyunLivingRealtimeData
      responses:
        "200":
          description: 参考飞燕平台文档
components:
  schemas:
    CommonRequest:
      type: object
      description: 通用请求体
      properties:
        message_id:
          type: string
          description: 消息唯一标识
          example: "1bd5d003-31b9-476f-ad03-71d471922820"
        user_id:
          type: string
          description: 用户 ID
          example: "53102fb4bf1044ed8b0ba36c"
        params:
          type: object
          description: 接口特定参数
          properties:
            access_token:
              type: string
              description: 访问令牌
    CommonResponse:
      type: object
      description: 通用响应体
      properties:
        error_code:
          type: integer
          description: 错误码，200 表示成功
          example: 200
        message_id:
          type: string
          description: 消息唯一标识
          example: "1bd5d003-31b9-476f-ad03-71d471922820"
        data:
          type: object
          description: 响应数据
          nullable: true
    DeviceDetail:
      type: object
      description: 设备详细信息
      properties:
        device_id:
          type: string
          description: 设备 ID
        device_secret:
          type: string
          description: 设备密钥
        mac_addr:
          type: string
          description: MAC 地址
        sdk_version:
          type: string
          description: SDK 版本
        version:
          type: string
          description: 固件版本
        net_addr:
          type: string
          description: 网络地址
        status:
          type: integer
          description: 设备状态
        owned:
          type: integer
          description: 获取方式
        group_id:
          type: integer
          description: 空间编号
        is_sub_device:
          type: boolean
          description: 是否为子设备
        product_id:
          type: string
          description: 产品 ID
        category_id:
          type: string
          description: 品类 ID
        properties:
          type: object
          description: 设备属性
        nick_name:
          type: string
          description: 设备昵称
        gmt_bind:
          type: string
          description: 绑定时间
    DeviceEvent:
      type: object
      description: 设备事件
      properties:
        device_id:
          type: string
          description: 设备 ID
        user_id:
          type: string
          description: 用户 ID
        event_id:
          type: string
          description: 事件 ID
        event_type:
          type: integer
          description: 事件类型
        properties:
          type: object
          description: 事件属性
        code:
          type: string
          description: 事件代码
        gmt_create:
          type: string
          description: 创建时间
`,u=JSON.parse('{"title":"设备服务","description":"","frontmatter":{"title":"设备服务","aside":false},"headers":[],"relativePath":"api/device-service.md","filePath":"api/device-service.md"}'),a={name:"api/device-service.md"},g=Object.assign(a,{setup(m){return(y,n)=>{const t=i("OASpec");return s(),r("div",null,[n[0]||(n[0]=e("h1",{id:"设备服务",tabindex:"-1"},[p("设备服务 "),e("a",{class:"header-anchor",href:"#设备服务","aria-label":'Permalink to "设备服务"'},"​")],-1)),o(t,{spec:c(d),"hide-branding":""},null,8,["spec"])])}}});export{u as __pageData,g as default};
