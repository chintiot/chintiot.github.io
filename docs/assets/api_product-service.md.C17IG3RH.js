import{aZ as r,aL as o,u as p,v as e,H as s,I as i,bk as c}from"./chunks/framework.7BQS5fsx.js";const d=`openapi: "3.0.3"
info:
  title: 产品服务 (Product Service)
  description: 提供产品品类查询、产品增删改查功能
  version: "1.0.0"
servers:
  - url: https://api.chintsmart.com
    description: 生产环境
tags:
  - name: 产品服务
    description: 产品相关接口
paths:
  /product/query_category:
    post:
      tags:
        - 产品服务
      summary: 查询品类列表
      description: 查询产品品类列表
      operationId: productQueryCategory
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
                        - client_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        client_id:
                          type: string
                          description: 注册应用的唯一 id
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
                          client_id:
                            type: string
                            description: 注册应用的唯一 id
                          category_list:
                            type: array
                            description: 品类列表
                            items:
                              type: object
                              properties:
                                category_id:
                                  type: integer
                                  description: 品类 ID
                                category_name:
                                  type: string
                                  description: 品类名称
                                category_icon:
                                  type: string
                                  description: 品类图标
  /product/query_list_by_category:
    post:
      tags:
        - 产品服务
      summary: 查询品类产品列表
      description: 查询指定品类下的产品列表
      operationId: productQueryListByCategory
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
                        - client_id
                        - category_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        client_id:
                          type: string
                          description: 注册应用的唯一 id
                        category_id:
                          type: integer
                          description: 品类 ID
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
                          category_id:
                            type: integer
                            description: 品类 ID
                          category_name:
                            type: string
                            description: 品类名称
                          category_icon:
                            type: string
                            description: 品类图标
                          product_list:
                            type: array
                            description: 产品列表
                            items:
                              $ref: "#/components/schemas/Product"
  /product/add:
    post:
      tags:
        - 产品服务
      summary: 创建新产品
      description: 添加一个新的产品
      operationId: productAdd
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
                        - product_id
                        - product_secret
                        - product_name
                        - category_id
                        - vendor_type
                        - encrypt_type
                        - node_type
                        - status
                        - popular
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        product_id:
                          type: string
                          description: 产品 ID
                        product_secret:
                          type: string
                          description: 产品密钥
                        product_name:
                          type: string
                          description: 产品名称
                        product_icon:
                          type: string
                          description: 产品图标地址
                        category_id:
                          type: integer
                          description: 品类 ID
                        vendor_type:
                          type: integer
                          description: |
                            厂商类型:
                            0 - 正泰自研
                            1 - 飞燕生态
                          enum: [0, 1]
                        net_type:
                          type: integer
                          description: |
                            入网类型:
                            0 - WiFi
                            1 - LoRa
                            2 - GPRS
                            3 - Zigbee
                            4 - 蓝牙
                            5 - 以太网
                            6 - PLC
                            7 - 其他
                          enum: [0, 1, 2, 3, 4, 5, 6, 7]
                        encrypt_type:
                          type: integer
                          description: |
                            加密类型:
                            0 - 一品一密
                            1 - 一机一密
                          enum: [0, 1]
                        node_type:
                          type: integer
                          description: |
                            节点类型:
                            0 - 设备
                            1 - 网关
                          enum: [0, 1]
                        status:
                          type: integer
                          description: |
                            产品状态:
                            0 - 开发中
                            1 - 已发布
                          enum: [0, 1]
                        popular:
                          type: integer
                          description: |
                            流行度:
                            0 - 一般
                            1 - 热门
                            2 - 推荐
                          enum: [0, 1, 2]
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /product/delete:
    post:
      tags:
        - 产品服务
      summary: 删除产品
      description: 删除指定产品
      operationId: productDelete
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
                        - product_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        product_id:
                          type: string
                          description: 产品 ID
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /product/update:
    post:
      tags:
        - 产品服务
      summary: 更新产品信息
      description: 更新指定产品的信息
      operationId: productUpdate
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
                        - product_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        product_id:
                          type: string
                          description: 产品 ID
                        product_secret:
                          type: string
                          description: 产品密钥
                        product_name:
                          type: string
                          description: 产品名称
                        product_icon:
                          type: string
                          description: 产品图标地址
                        encrypt_type:
                          type: integer
                          description: |
                            加密类型:
                            0 - 一品一密
                            1 - 一机一密
                          enum: [0, 1]
                        status:
                          type: integer
                          description: |
                            产品状态:
                            0 - 开发中
                            1 - 已发布
                          enum: [0, 1]
                        popular:
                          type: integer
                          description: |
                            流行度:
                            0 - 一般
                            1 - 热门
                            2 - 推荐
                          enum: [0, 1, 2]
      responses:
        "200":
          description: 操作成功
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/CommonResponse"
  /product/query:
    post:
      tags:
        - 产品服务
      summary: 查询产品详情
      description: 查询单个产品的详细信息
      operationId: productQuery
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
                        - product_id
                      properties:
                        access_token:
                          type: string
                          description: 访问令牌
                        product_id:
                          type: string
                          description: 产品 ID
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
                        $ref: "#/components/schemas/Product"
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
    Product:
      type: object
      description: 产品信息
      properties:
        product_id:
          type: string
          description: 产品 ID
        product_secret:
          type: string
          description: 产品密钥
        product_name:
          type: string
          description: 产品名称
        product_icon:
          type: string
          description: 产品图标
        category_id:
          type: integer
          description: 品类 ID
        vendor_type:
          type: integer
          description: 厂商类型
        net_type:
          type: integer
          description: 入网类型
        encrypt_type:
          type: integer
          description: 加密类型
        node_type:
          type: integer
          description: 节点类型
        status:
          type: integer
          description: 产品状态
        popular:
          type: integer
          description: 流行度
        creator:
          type: string
          description: 创建者
        modifier:
          type: string
          description: 修改者
        gmt_create:
          type: string
          description: 创建时间
        gmt_modified:
          type: string
          description: 修改时间
`,g=JSON.parse('{"title":"产品服务","description":"","frontmatter":{"title":"产品服务","aside":false},"headers":[],"relativePath":"api/product-service.md","filePath":"api/product-service.md"}'),a={name:"api/product-service.md"},_=Object.assign(a,{setup(y){return(m,n)=>{const t=r("OASpec");return o(),p("div",null,[n[0]||(n[0]=e("h1",{id:"产品服务",tabindex:"-1"},[s("产品服务 "),e("a",{class:"header-anchor",href:"#产品服务","aria-label":'Permalink to "产品服务"'},"​")],-1)),i(t,{spec:c(d),"hide-branding":""},null,8,["spec"])])}}});export{g as __pageData,_ as default};
