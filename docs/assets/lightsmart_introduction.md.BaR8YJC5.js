import{bQ as a,aL as o,u as e,G as r}from"./chunks/framework.CNL6o8_w.js";const c=JSON.parse('{"title":"系统架构总览","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/introduction.md","filePath":"lightsmart/introduction.md"}'),d={name:"lightsmart/introduction.md"};function i(n,t,s,l,h,u){return o(),e("div",null,[...t[0]||(t[0]=[r(`<h1 id="系统架构总览" tabindex="-1">系统架构总览 <a class="header-anchor" href="#系统架构总览" aria-label="Permalink to &quot;系统架构总览&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">graph TD
    EMQX[&quot;EMQX MQTT&quot;]
    hapi[&quot;hapi 业务API&quot;]
    mapi[&quot;mapi 认证&quot;]
    MP[&quot;微信小程序&quot;]
    ztmp[&quot;ztmp 后端&quot;]

    EMQX --&gt;|&quot;MQTT&quot;| hapi
    EMQX --&gt;|&quot;$SYS&quot;| mapi
    hapi --&gt;|&quot;REST&quot;| MP
    MP --&gt;|&quot;RPC&quot;| ztmp</pre><div class="mermaid"></div></div><h2 id="三服务职责划分" tabindex="-1">三服务职责划分 <a class="header-anchor" href="#三服务职责划分" aria-label="Permalink to &quot;三服务职责划分&quot;">​</a></h2><table tabindex="0"><thead><tr><th>服务</th><th>端口</th><th>职责</th></tr></thead><tbody><tr><td><strong>hapi</strong></td><td>3008</td><td>设备控制中枢：MQTT 指令收发、设备状态解析、场景执行、Webhook 推送、网关配网信息查询</td></tr><tr><td><strong>mapi</strong></td><td>3009</td><td>EMQX 辅助：MQTT 连接认证（<code>POST /mqtt/auth</code>）、设备上下线事件监听、在线状态维护</td></tr><tr><td><strong>ztmp</strong></td><td>30090</td><td>微信小程序后端：会员认证、家庭/房间/设备/场景 CRUD、网关节点列表、语音平台设备发现</td></tr></tbody></table><h2 id="数据库隔离" tabindex="-1">数据库隔离 <a class="header-anchor" href="#数据库隔离" aria-label="Permalink to &quot;数据库隔离&quot;">​</a></h2><ul><li>hapi/mapi 共享 <code>smart_hotel_db</code>（52 张表：设备、房间、酒店、许可证等）</li><li>ztmp 使用独立数据库 <code>ztmp</code>（7 张表：会员、项目、对象、配网记录等）</li><li>两者共享同一 MySQL 实例和 Redis 实例</li></ul>`,6)])])}const p=a(d,[["render",i]]);export{c as __pageData,p as default};
