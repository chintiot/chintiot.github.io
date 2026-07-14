const n=`openapi: "3.0.3"
info:
  title: 消息服务 (Message Service)
  description: 提供设备配网、解绑、属性更新请求及 MQTT 推送通知
  version: "1.0.0"
servers:
  - url: https://api.chintsmart.com
    description: 生产环境
  - url: http://192.168.0.1
    description: 设备 AP 配网地址
tags:
  - name: 请求
    description: 客户端发起的请求接口
  - name: 通知
    description: 服务端推送的 MQTT 通知
paths:
  /ap:
    post:
      tags:
        - 请求
      summary: 设备接入点配网
      description: 通过设备 AP 热点进行配网，将设备接入 Wi-Fi 网络
      operationId: apProvision
      servers:
        - url: http://192.168.0.1
          description: 设备 AP 配网地址
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
                        - secret
                        - network
                      properties:
                        secret:
                          type: string
                          description: 设备或产品密钥
                        network:
                          type: object
                          required:
                            - ssid
                            - pw
                          description: Wi-Fi 网络信息
                          properties:
                            ssid:
                              type: string
                              description: Wi-Fi SSID
                            pw:
                              type: string
                              description: Wi-Fi 密码
      responses:
        "200":
          description: 配网成功
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
                          device_id:
                            type: string
                            description: 设备 ID
                          mac_addr:
                            type: string
                            description: MAC 地址
                          sdk_version:
                            type: string
                            description: SDK 版本
                          version:
                            type: string
                            description: 固件版本
  /mqtt/unbind:
    post:
      tags:
        - 请求
      summary: 通过 MQTT 发送设备解绑请求
      description: |
        MQTT Topic: /sys/{product_id}/{device_id}/app/up/thing/unbind
        
        通过 MQTT 协议向设备发送解绑请求，解除设备与用户的绑定关系。
      operationId: mqttUnbind
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
                        - device_id
                      properties:
                        device_id:
                          type: string
                          description: 设备 ID
      responses:
        "200":
          description: MQTT 请求已发送（异步，无 JSON 响应体）
  /mqtt/properties:
    post:
      tags:
        - 请求
      summary: 通过 MQTT 下发设备属性更新
      description: |
        MQTT Topic: /sys/{product_id}/{device_id}/app/up/thing/properties
        
        通过 MQTT 协议向设备下发属性更新指令。
      operationId: mqttProperties
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
                        - device_id
                        - properties
                      properties:
                        device_id:
                          type: string
                          description: 设备 ID
                        properties:
                          type: object
                          description: 需要更新的设备属性键值对
      responses:
        "200":
          description: MQTT 指令已下发（异步）
  /mqtt/status:
    post:
      tags:
        - 通知
      summary: 设备上下线状态推送通知
      description: |
        MQTT Topic: /sys/{product_id}/{device_id}/app/down/thing/status
        
        当设备上线或下线时，服务端通过 MQTT 推送设备状态变更通知。
      operationId: mqttStatusNotification
      responses:
        "200":
          description: 设备状态推送
          content:
            application/json:
              schema:
                type: object
                properties:
                  error_code:
                    type: integer
                    description: 错误码
                    example: 200
                  message_id:
                    type: string
                    description: 消息唯一标识
                  device_id:
                    type: string
                    description: 设备 ID
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
  /mqtt/events:
    post:
      tags:
        - 通知
      summary: 设备事件上报推送
      description: |
        MQTT Topic: /sys/{product_id}/{device_id}/app/down/thing/events
        
        当设备上报事件时，服务端通过 MQTT 推送事件通知。
      operationId: mqttEventsNotification
      responses:
        "200":
          description: 设备事件推送
          content:
            application/json:
              schema:
                type: object
                properties:
                  error_code:
                    type: integer
                    description: 错误码
                    example: 200
                  message_id:
                    type: string
                    description: 消息唯一标识
                  device_id:
                    type: string
                    description: 设备 ID
                  data:
                    type: object
                    properties:
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
                        description: 事件时间
  /mqtt/ota:
    post:
      tags:
        - 通知
      summary: 固件 OTA 升级进度推送
      description: |
        MQTT Topic: /sys/{product_id}/{device_id}/app/down/ota/device/forward
        
        当设备进行固件 OTA 升级时，服务端通过 MQTT 推送升级进度通知。
      operationId: mqttOtaNotification
      responses:
        "200":
          description: OTA 升级进度推送
          content:
            application/json:
              schema:
                type: object
                properties:
                  error_code:
                    type: integer
                    description: 错误码
                    example: 200
                  message_id:
                    type: string
                    description: 消息唯一标识
                  device_id:
                    type: string
                    description: 设备 ID
                  data:
                    type: object
                    properties:
                      sdk_version:
                        type: string
                        description: SDK 版本
                      src_version:
                        type: string
                        description: 源固件版本
                      dest_version:
                        type: string
                        description: 目标固件版本
                      step:
                        type: integer
                        description: |
                          升级进度:
                          -1 - 失败
                          -2 - 下载失败
                          -3 - 校验失败
                          -4 - 烧写失败
                          1-100 - 进度百分比
                      upgrade_status:
                        type: integer
                        description: |
                          升级状态:
                          0 - 待升级
                          1 - 升级中
                          2 - 异常
                          3 - 失败
                          4 - 完成
                        enum: [0, 1, 2, 3, 4]
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
`;export{n as s};
