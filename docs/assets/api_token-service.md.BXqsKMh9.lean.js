import{aZ as i,aL as r,u as s,v as e,H as o,I as a,bk as p}from"./chunks/framework.7BQS5fsx.js";const c=`openapi: "3.0.3"
info:
  title: 授权服务 (Auth Service)
  description: 提供 OAuth2 授权登录、访问令牌获取和刷新功能
  version: "1.0.0"
servers:
  - url: https://api.chintsmart.com
    description: 生产环境
tags:
  - name: 授权服务
    description: OAuth2 授权相关接口
paths:
  /token/login:
    get:
      tags:
        - 授权服务
      summary: OAuth2 授权登录
      description: 发起 OAuth2 授权登录请求，获取访问令牌和刷新令牌
      operationId: tokenLogin
      parameters:
        - name: redirect_uri
          in: query
          required: true
          description: 回调地址，如果没有可填写 none
          schema:
            type: string
        - name: client_id
          in: query
          required: true
          description: 注册应用的唯一 id
          schema:
            type: string
        - name: response_type
          in: query
          required: true
          description: 返回类型，固定值 code
          schema:
            type: string
            enum:
              - code
        - name: state
          in: query
          required: true
          description: 自定义状态值
          schema:
            type: string
      responses:
        "200":
          description: 登录成功，返回令牌信息
          content:
            application/json:
              schema:
                type: object
                properties:
                  error_code:
                    type: integer
                    description: 错误码
                    example: 200
                  access_token:
                    type: string
                    description: 访问 token
                    example: xxxxx
                  refresh_token:
                    type: string
                    description: 用于刷新 access_token 的刷新 token
                    example: xxxxxx
                  expires_in:
                    type: integer
                    description: 访问 token 和刷新 token 的过期时长（秒）
                    example: 172800
                  openid:
                    type: string
                    description: 用户或设备的唯一标识
                    example: "53102fb4bf1044ed8b0ba36c"
  /token/access:
    post:
      tags:
        - 授权服务
      summary: 获取或刷新访问令牌
      description: 通过授权码获取访问令牌，或通过刷新令牌更新访问令牌
      operationId: tokenAccess
      parameters:
        - name: grant_type
          in: query
          required: true
          description: 授权类型
          schema:
            type: string
            enum:
              - authorization_code
              - refresh_token
        - name: client_id
          in: query
          required: true
          description: 注册应用的唯一 id
          schema:
            type: string
        - name: client_secret
          in: query
          required: true
          description: 注册应用的 secret
          schema:
            type: string
        - name: code
          in: query
          required: false
          description: 授权码，grant_type=authorization_code 时必填
          schema:
            type: string
        - name: redirect_uri
          in: query
          required: false
          description: 回调地址，grant_type=authorization_code 时必填，若无则填 none
          schema:
            type: string
        - name: refresh_token
          in: query
          required: false
          description: 刷新 token，grant_type=refresh_token 时必填
          schema:
            type: string
      responses:
        "200":
          description: 令牌获取成功
          content:
            application/json:
              schema:
                type: object
                properties:
                  error_code:
                    type: integer
                    description: 错误码
                    example: 200
                  access_token:
                    type: string
                    description: 访问 token
                    example: xxxxx
                  refresh_token:
                    type: string
                    description: 用于刷新 access_token 的刷新 token
                    example: xxxxxx
                  expires_in:
                    type: integer
                    description: 访问 token 和刷新 token 的过期时长（秒）
                    example: 172800
                  openid:
                    type: string
                    description: 用户或设备的唯一标识
                    example: "53102fb4bf1044ed8b0ba36c"
  /token/aliyun_living/access:
    post:
      tags:
        - 授权服务
      summary: 飞燕平台 OAuth2 访问令牌接口
      description: 参考飞燕平台文档 https://living.aliyun.com/doc
      operationId: tokenAliyunLivingAccess
      responses:
        "200":
          description: 参考飞燕平台文档
  /token/aliyun_tmall/access:
    post:
      tags:
        - 授权服务
      summary: 天猫精灵 OAuth2 访问令牌接口
      description: 参考天猫精灵文档 http://doc-bot.tmall.com/docs/doc.htm
      operationId: tokenAliyunTmallAccess
      responses:
        "200":
          description: 参考天猫精灵文档
`,y=JSON.parse('{"title":"授权服务","description":"","frontmatter":{"title":"授权服务","aside":false},"headers":[],"relativePath":"api/token-service.md","filePath":"api/token-service.md"}'),d={name:"api/token-service.md"},h=Object.assign(d,{setup(m){return(u,n)=>{const t=i("OASpec");return r(),s("div",null,[n[0]||(n[0]=e("h1",{id:"授权服务",tabindex:"-1"},[o("授权服务 "),e("a",{class:"header-anchor",href:"#授权服务","aria-label":'Permalink to "授权服务"'},"​")],-1)),a(t,{spec:p(c),"hide-branding":""},null,8,["spec"])])}}});export{y as __pageData,h as default};
