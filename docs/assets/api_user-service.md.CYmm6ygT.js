import{aZ as s,aL as o,u as i,v as e,H as r,I as p,bk as c}from"./chunks/framework.7BQS5fsx.js";const a=`openapi: "3.0.3"
info:
  title: 用户服务 (User Service)
  description: 提供用户注册、登录、信息管理等功能
  version: "1.0.0"
servers:
  - url: https://api.chintsmart.com
    description: 生产环境
tags:
  - name: 用户服务
    description: 用户相关接口
paths:
  /user/auth_code:
    post:
      tags:
        - 用户服务
      summary: 发送/验证短信验证码
      description: 发送短信验证码或校验验证码
      operationId: userAuthCode
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
                        - client_id
                        - auth_model
                        - code_model
                        - area_code
                        - phone
                      properties:
                        client_id:
                          type: string
                          description: 注册应用的唯一 id
                        auth_model:
                          type: integer
                          description: |
                            验证类型:
                            0 - 身份验证
                            1 - 登录确认
                            2 - 登录异常
                            3 - 用户注册
                            4 - 修改密码
                            5 - 信息变更
                            6 - 校验验证码
                          enum: [0, 1, 2, 3, 4, 5, 6]
                        code_model:
                          type: integer
                          description: 码类型，0=短信
                          enum: [0]
                        area_code:
                          type: string
                          description: 国际区号
                        phone:
                          type: string
                          description: 手机号码
                        auth_code:
                          type: string
                          description: 验证码，auth_model=6 时必填
      responses:
        "200":
          description: 操作成功
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
                          public_key:
                            type: string
                            description: 加密用的公钥
  /user/register:
    post:
      tags:
        - 用户服务
      summary: 注册新用户
      description: 使用手机号和验证码注册新用户
      operationId: userRegister
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
                        - client_id
                        - auth_code
                        - area_code
                        - phone
                        - password
                      properties:
                        client_id:
                          type: string
                          description: 注册应用的唯一 id
                        auth_code:
                          type: string
                          description: 验证码
                        area_code:
                          type: string
                          description: 国际区号
                        phone:
                          type: string
                          description: 手机号码
                        password:
                          type: string
                          description: 用户密码
      responses:
        "200":
          description: 注册成功
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
                          user_id:
                            type: string
                            description: 用户 ID
                          code:
                            type: string
                            description: 授权码
  /user/login:
    post:
      tags:
        - 用户服务
      summary: 用户登录
      description: 使用手机号+密码或手机号+验证码登录
      operationId: userLogin
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
                        - client_id
                        - login_model
                        - area_code
                        - phone
                      properties:
                        client_id:
                          type: string
                          description: 注册应用的唯一 id
                        login_model:
                          type: integer
                          description: |
                            登录方式:
                            0 - 手机号+密码
                            1 - 手机号+验证码
                          enum: [0, 1]
                        area_code:
                          type: string
                          description: 国际区号
                        phone:
                          type: string
                          description: 手机号码
                        password:
                          type: string
                          description: 用户密码，login_model=0 时必选
                        auth_code:
                          type: string
                          description: 验证码，login_model=1 时必选
      responses:
        "200":
          description: 登录成功
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
                          user_id:
                            type: string
                            description: 用户 ID
                          code:
                            type: string
                            description: 授权码
                          gmt_last_login:
                            type: string
                            description: 上次登录时间
                          nick_name:
                            type: string
                            description: 用户昵称
                          network:
                            type: object
                            properties:
                              ssid:
                                type: string
                              pw:
                                type: string
  /user/cancel:
    post:
      tags:
        - 用户服务
      summary: 注销或删除用户
      description: 注销当前用户或永久删除用户
      operationId: userCancel
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
                        - cancel_model
                      properties:
                        access_token:
                          type: string
                          description: 访问 token
                        cancel_model:
                          type: integer
                          description: |
                            注销类型:
                            0 - 注销
                            1 - 删除
                          enum: [0, 1]
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /user/update_pwd:
    post:
      tags:
        - 用户服务
      summary: 修改或重置密码
      description: 修改密码或忘记密码后重置
      operationId: userUpdatePwd
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
                        - area_code
                        - phone
                        - new_password
                        - update_model
                      properties:
                        area_code:
                          type: string
                          description: 国际区号
                        phone:
                          type: string
                          description: 手机号码
                        new_password:
                          type: string
                          description: 新密码
                        update_model:
                          type: integer
                          description: |
                            更新方式:
                            0 - 修改密码
                            1 - 忘记密码
                          enum: [0, 1]
                        access_token:
                          type: string
                          description: 访问 token，update_model=0 时必选
                        old_password:
                          type: string
                          description: 旧密码，update_model=0 时必选
                        auth_code:
                          type: string
                          description: 验证码，update_model=1 时必选
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /user/update_user_info:
    post:
      tags:
        - 用户服务
      summary: 更新用户信息
      description: 更新用户昵称、头像等信息
      operationId: userUpdateUserInfo
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
                      properties:
                        access_token:
                          type: string
                          description: 访问 token
                        nick_name:
                          type: string
                          description: 用户昵称
                        avatar:
                          type: string
                          description: 用户头像 HTTP 地址
                        identity_id:
                          type: string
                          description: 飞燕用户的身份 ID
                        network:
                          type: object
                          description: 用户网络信息
                          properties:
                            ssid:
                              type: string
                            pw:
                              type: string
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /user/query:
    post:
      tags:
        - 用户服务
      summary: 查询用户信息
      description: 按不同方式查询用户信息
      operationId: userQuery
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
                      properties:
                        access_token:
                          type: string
                          description: 访问 token
                        query_model:
                          type: integer
                          description: |
                            查询方式:
                            0 - 按用户 ID 查询
                            1 - 按手机号查询
                            2 - 按身份 ID 查询
                          enum: [0, 1, 2]
                        user_id:
                          type: string
                          description: 用户 ID，query_model=0 时必选
                        area_code:
                          type: string
                          description: 国际区号，query_model=1 时必选
                        phone:
                          type: string
                          description: 手机号，query_model=1 时必选
                        identity_id:
                          type: string
                          description: 身份 ID，query_model=2 时必选
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
                          user_id:
                            type: string
                            description: 用户 ID
                          identity_id:
                            type: string
                            description: 飞燕身份 ID
                          area_code:
                            type: string
                            description: 国际区号
                          phone:
                            type: string
                            description: 手机号
                          nick_name:
                            type: string
                            description: 用户昵称
                          avatar:
                            type: string
                            description: 用户头像
                          status:
                            type: integer
                            description: 用户状态
                          network:
                            type: object
                            description: 用户网络信息
                          gmt_register:
                            type: string
                            description: 注册时间
                          gmt_modified:
                            type: string
                            description: 修改时间
                          gmt_last_login:
                            type: string
                            description: 上次登录时间
                          gmt_logout:
                            type: string
                            description: 注销时间
  /user/update_sys_setting:
    post:
      tags:
        - 用户服务
      summary: 更新系统消息配置
      description: 更新系统消息推送设置
      operationId: userUpdateSysSetting
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
                      properties:
                        access_token:
                          type: string
                          description: 访问 token
                        message_config:
                          type: object
                          description: 消息配置
                          properties:
                            recv_sys_notice:
                              type: boolean
                              description: 是否接收系统通知
                            recv_device_notice:
                              type: boolean
                              description: 是否接收设备通知
                            no_disturbing:
                              type: boolean
                              description: 是否开启免打扰
                            start:
                              type: integer
                              format: int64
                              description: 免打扰开始时间
                            end:
                              type: integer
                              format: int64
                              description: 免打扰结束时间
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /user/query_sys_setting:
    post:
      tags:
        - 用户服务
      summary: 查询系统设置
      description: 查询系统设置信息
      operationId: userQuerySysSetting
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
                        - query_model
                      properties:
                        access_token:
                          type: string
                          description: 访问 token
                        query_model:
                          type: integer
                          description: |
                            查询方式:
                            0 - 全部
                            1 - 开发设置
                            2 - 消息设置
                          enum: [0, 1, 2]
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
                          dev_config:
                            type: object
                            properties:
                              page_size:
                                type: integer
                                description: 分页大小
                          message_config:
                            type: object
                            properties:
                              recv_sys_notice:
                                type: boolean
                                description: 是否接收系统通知
                              recv_device_notice:
                                type: boolean
                                description: 是否接收设备通知
                              no_disturbing:
                                type: boolean
                                description: 是否开启免打扰
                              start:
                                type: integer
                                format: int64
                                description: 免打扰开始时间
                              end:
                                type: integer
                                format: int64
                                description: 免打扰结束时间
                              unread_notice_num:
                                type: integer
                                description: 未读通知数
                          gmt_modified:
                            type: string
                            description: 修改时间
  /user/query_sys_notice:
    post:
      tags:
        - 用户服务
      summary: 查询系统通知（已废弃）
      description: 查询系统通知，该接口已暂时废弃
      operationId: userQuerySysNotice
      deprecated: true
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
                        - query_model
                        - page_no
                        - page_size
                      properties:
                        access_token:
                          type: string
                          description: 访问 token
                        query_model:
                          type: integer
                          description: |
                            查询方式:
                            0 - 全部
                            1 - 可用
                            2 - 归档
                            3 - 未读
                            4 - 已读
                          enum: [0, 1, 2, 3, 4]
                        page_no:
                          type: integer
                          description: 页码
                        page_size:
                          type: integer
                          description: 每页条数
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
                          message_list:
                            type: array
                            description: 消息列表
                            items:
                              type: object
                              properties:
                                message_id:
                                  type: string
                                  description: 消息 ID
                                title:
                                  type: string
                                  description: 标题
                                body:
                                  type: string
                                  description: 内容
                                status:
                                  type: integer
                                  description: 状态
                                gmt_create:
                                  type: string
                                  description: 创建时间
  /user/aliyun_living/query_user:
    post:
      tags:
        - 用户服务
      summary: 飞燕平台查询用户
      description: 参考飞燕平台文档
      operationId: userAliyunLivingQueryUser
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
`,g=JSON.parse('{"title":"用户服务","description":"","frontmatter":{"title":"用户服务","aside":false},"headers":[],"relativePath":"api/user-service.md","filePath":"api/user-service.md"}'),d={name:"api/user-service.md"},l=Object.assign(d,{setup(m){return(y,n)=>{const t=s("OASpec");return o(),i("div",null,[n[0]||(n[0]=e("h1",{id:"用户服务",tabindex:"-1"},[r("用户服务 "),e("a",{class:"header-anchor",href:"#用户服务","aria-label":'Permalink to "用户服务"'},"​")],-1)),p(t,{spec:c(a),"hide-branding":""},null,8,["spec"])])}}});export{g as __pageData,l as default};
