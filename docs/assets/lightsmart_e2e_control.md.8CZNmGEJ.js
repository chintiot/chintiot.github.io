import{bQ as a,aL as e,u as n,G as o}from"./chunks/framework.CNL6o8_w.js";const h=JSON.parse('{"title":"设备控制全流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/control.md","filePath":"lightsmart/e2e/control.md"}'),i={name:"lightsmart/e2e/control.md"};function r(s,t,p,c,l,g){return e(),n("div",null,[...t[0]||(t[0]=[o(`<h1 id="设备控制全流程" tabindex="-1">设备控制全流程 <a class="header-anchor" href="#设备控制全流程" aria-label="Permalink to &quot;设备控制全流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
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
    hapi-&gt;&gt;EMQX: Webhook</pre><div class="mermaid"></div></div>`,2)])])}const _=a(i,[["render",r]]);export{h as __pageData,_ as default};
