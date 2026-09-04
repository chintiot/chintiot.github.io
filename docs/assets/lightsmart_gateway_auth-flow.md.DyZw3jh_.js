import{bQ as a,aL as e,u as i,G as n}from"./chunks/framework.CNL6o8_w.js";const d=JSON.parse('{"title":"网关接入认证流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/gateway/auth-flow.md","filePath":"lightsmart/gateway/auth-flow.md"}'),r={name:"lightsmart/gateway/auth-flow.md"};function s(o,t,l,p,m,c){return e(),i("div",null,[...t[0]||(t[0]=[n(`<h1 id="网关接入认证流程" tabindex="-1">网关接入认证流程 <a class="header-anchor" href="#网关接入认证流程" aria-label="Permalink to &quot;网关接入认证流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant GW as 网关
    participant hapi
    participant EMQX
    participant mapi

    GW-&gt;&gt;hapi: 1. 获取MQTT连接信息
    GW-&gt;&gt;EMQX: 2. MQTT Connect
    Note right of GW: username=mq_id
    EMQX-&gt;&gt;mapi: 3. 认证 POST /mqtt/auth
    Note over mapi: 校验license_tb
    EMQX-&gt;&gt;mapi: 5. $SYS上线事件
    GW-&gt;&gt;EMQX: 6. 订阅 ble_in
    GW-&gt;&gt;EMQX: 7. 发布 ble_out</pre><div class="mermaid"></div></div>`,2)])])}const g=a(r,[["render",s]]);export{d as __pageData,g as default};
