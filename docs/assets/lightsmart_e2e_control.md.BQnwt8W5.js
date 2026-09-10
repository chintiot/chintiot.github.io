import{bQ as a,aL as e,u as i,G as d}from"./chunks/framework.CNL6o8_w.js";const g=JSON.parse('{"title":"设备控制全流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/control.md","filePath":"lightsmart/e2e/control.md"}'),r={name:"lightsmart/e2e/control.md"};function o(n,t,l,s,c,p){return e(),i("div",null,[...t[0]||(t[0]=[d(`<h1 id="设备控制全流程" tabindex="-1">设备控制全流程 <a class="header-anchor" href="#设备控制全流程" aria-label="Permalink to &quot;设备控制全流程&quot;">​</a></h1><h2 id="路径-a-通过-hapi-rest-api-第三方-语音平台" tabindex="-1">路径 A：通过 hapi REST API（第三方/语音平台） <a class="header-anchor" href="#路径-a-通过-hapi-rest-api-第三方-语音平台" aria-label="Permalink to &quot;路径 A：通过 hapi REST API（第三方/语音平台）&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant MP as 小程序
    participant hapi
    participant EMQX
    participant GW as 网关

    MP-&gt;&gt;hapi: 1. POST /room/control
    Note over hapi: 查房间/设备, 生成BLE hex
    hapi-&gt;&gt;EMQX: 5. 发布 ble_in
    EMQX-&gt;&gt;GW: 转发指令
    GW-&gt;&gt;GW: 6. 执行BLE Mesh
    GW-&gt;&gt;EMQX: 7. 上报 ble_out
    EMQX-&gt;&gt;hapi: 8. 状态上报
    Note over hapi: 解析状态, 更新Redis
    hapi--&gt;&gt;MP: { code: 0 }
    MP-&gt;&gt;hapi: 12. POST /room/status
    hapi--&gt;&gt;MP: [{ on_off: &quot;on&quot; }]
    hapi-&gt;&gt;EMQX: Webhook</pre><div class="mermaid"></div></div><h2 id="路径-b-通过-ztutil-sdk-直连网关-小程序本地控制" tabindex="-1">路径 B：通过 ztUtil SDK 直连网关（小程序本地控制） <a class="header-anchor" href="#路径-b-通过-ztutil-sdk-直连网关-小程序本地控制" aria-label="Permalink to &quot;路径 B：通过 ztUtil SDK 直连网关（小程序本地控制）&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant MP as 小程序
    participant ztUtil as ztUtil SDK
    participant EMQX
    participant GW as 网关

    Note over MP,ztUtil: 已通过 connectMqtt 建立连接
    MP-&gt;&gt;ztUtil: 1. controlDevice({ action, device, payload })
    Note over ztUtil: protocol.buildCommand() 生成 BLE hex
    ztUtil-&gt;&gt;EMQX: 2. 发布 ble_in (MQTT)
    EMQX-&gt;&gt;GW: 转发指令
    GW-&gt;&gt;GW: 3. 执行BLE Mesh
    GW-&gt;&gt;EMQX: 4. 上报 ble_out
    EMQX-&gt;&gt;ztUtil: 5. 接收状态推送
    ztUtil-&gt;&gt;MP: 6. register callback { code: 2000, data: { naddr, status } }
    Note over MP: 更新 buttons_state</pre><div class="mermaid"></div></div><h2 id="两条路径的区别" tabindex="-1">两条路径的区别 <a class="header-anchor" href="#两条路径的区别" aria-label="Permalink to &quot;两条路径的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>对比项</th><th>路径 A（hapi REST）</th><th>路径 B（ztUtil SDK）</th></tr></thead><tbody><tr><td>调用方</td><td>任意 HTTP 客户端</td><td>小程序内 ztUtil SDK</td></tr><tr><td>认证</td><td>JWT Bearer token</td><td>MQTT mq_id + mq_pass</td></tr><tr><td>指令生成</td><td>hapi <code>genCommand()</code></td><td>ztUtil <code>protocol.buildCommand()</code></td></tr><tr><td>状态推送</td><td>需轮询 <code>POST /room/status</code></td><td>实时回调 <code>register({ code: 2000 })</code></td></tr><tr><td>适用场景</td><td>第三方应用/语音平台</td><td>小程序直接控制</td></tr><tr><td>通信模式</td><td>仅 MQTT</td><td>MQTT 或 BLE 直连</td></tr></tbody></table>`,7)])])}const m=a(r,[["render",o]]);export{g as __pageData,m as default};
