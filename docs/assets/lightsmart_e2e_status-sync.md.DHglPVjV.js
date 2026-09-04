import{bQ as a,aL as e,u as o,G as s}from"./chunks/framework.CNL6o8_w.js";const m=JSON.parse('{"title":"设备状态上报与同步","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/status-sync.md","filePath":"lightsmart/e2e/status-sync.md"}'),r={name:"lightsmart/e2e/status-sync.md"};function i(n,t,d,l,u,c){return e(),o("div",null,[...t[0]||(t[0]=[s(`<h1 id="设备状态上报与同步" tabindex="-1">设备状态上报与同步 <a class="header-anchor" href="#设备状态上报与同步" aria-label="Permalink to &quot;设备状态上报与同步&quot;">​</a></h1><p>设备状态有<strong>三条同步路径</strong>：</p><h2 id="路径-1-小程序主动轮询" tabindex="-1">路径 1：小程序主动轮询 <a class="header-anchor" href="#路径-1-小程序主动轮询" aria-label="Permalink to &quot;路径 1：小程序主动轮询&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">flowchart LR
    A[&quot;小程序&quot;] --&gt; B[&quot;hapi查询&quot;]
    B --&gt; C[&quot;Redis&quot;]
    C --&gt; A</pre><div class="mermaid"></div></div><h2 id="路径-2-hapi-webhook-推送" tabindex="-1">路径 2：hapi Webhook 推送 <a class="header-anchor" href="#路径-2-hapi-webhook-推送" aria-label="Permalink to &quot;路径 2：hapi Webhook 推送&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">flowchart LR
    A[&quot;网关&quot;] --&gt; B[&quot;MQTT ble_out&quot;]
    B --&gt; C[&quot;hapi&quot;]
    C --&gt; D[&quot;Webhook&quot;]
    D --&gt; E[&quot;第三方应用&quot;]</pre><div class="mermaid"></div></div><h2 id="路径-3-小程序直连-mqtt" tabindex="-1">路径 3：小程序直连 MQTT <a class="header-anchor" href="#路径-3-小程序直连-mqtt" aria-label="Permalink to &quot;路径 3：小程序直连 MQTT&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">flowchart LR
    A[&quot;小程序&quot;] --&gt; B[&quot;订阅ble_out&quot;]
    B --&gt; A</pre><div class="mermaid"></div></div>`,8)])])}const q=a(r,[["render",i]]);export{m as __pageData,q as default};
