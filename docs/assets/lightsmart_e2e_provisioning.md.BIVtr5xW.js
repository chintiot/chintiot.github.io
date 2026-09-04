import{bQ as n,aL as a,u as e,G as i}from"./chunks/framework.CNL6o8_w.js";const _=JSON.parse('{"title":"设备配网全流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/provisioning.md","filePath":"lightsmart/e2e/provisioning.md"}'),g={name:"lightsmart/e2e/provisioning.md"};function p(r,t,s,m,o,d){return a(),e("div",null,[...t[0]||(t[0]=[i(`<h1 id="设备配网全流程" tabindex="-1">设备配网全流程 <a class="header-anchor" href="#设备配网全流程" aria-label="Permalink to &quot;设备配网全流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant MP as 小程序
    participant ztmp
    participant hapi
    participant GW as 网关

    MP-&gt;&gt;ztmp: 1. 登录
    ztmp--&gt;&gt;MP: { token }
    MP-&gt;&gt;ztmp: 2. 创建家庭
    ztmp--&gt;&gt;MP: { id, private_key }
    MP-&gt;&gt;ztmp: 3. 绑定网关
    ztmp--&gt;&gt;MP: { id }
    MP-&gt;&gt;ztmp: 4. 添加子设备
    ztmp--&gt;&gt;MP: { id }
    MP-&gt;&gt;ztmp: 5. 生成配网Token
    ztmp--&gt;&gt;MP: { token, sn }
    MP-&gt;&gt;hapi: 6. 获取MQTT信息
    hapi--&gt;&gt;MP: { mq_id, mq_pass }
    MP-&gt;&gt;GW: 7. 直连MQTT
    MP-&gt;&gt;GW: 8. 发送BLE配网
    GW-&gt;&gt;ztmp: 9. 拉取节点列表
    ztmp--&gt;&gt;GW: { node, meshKey }
    GW-&gt;&gt;GW: 10. BLE Mesh组网
    MP-&gt;&gt;ztmp: 11. 记录配网状态</pre><div class="mermaid"></div></div>`,2)])])}const l=n(g,[["render",p]]);export{_ as __pageData,l as default};
