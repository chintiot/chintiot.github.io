import{bQ as e,aL as a,u as o,G as n}from"./chunks/framework.CNL6o8_w.js";const q=JSON.parse('{"title":"场景执行流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/scene.md","filePath":"lightsmart/e2e/scene.md"}'),r={name:"lightsmart/e2e/scene.md"};function s(i,t,u,c,l,d){return a(),o("div",null,[...t[0]||(t[0]=[n(`<h1 id="场景执行流程" tabindex="-1">场景执行流程 <a class="header-anchor" href="#场景执行流程" aria-label="Permalink to &quot;场景执行流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">flowchart TD
    A[&quot;小程序请求场景&quot;] --&gt; B[&quot;hapi生成BLE hex&quot;]
    B --&gt; C[&quot;MQTT发布ble_in&quot;]
    C --&gt; D[&quot;网关执行动作&quot;]
    D --&gt; E[&quot;设备状态变化&quot;]
    E --&gt; F{&quot;场景联动&quot;}
    F --&gt; F1[&quot;插卡→欢迎语&quot;]
    F --&gt; F2[&quot;门磁→开门播报&quot;]
    F --&gt; F3[&quot;红外设备控制&quot;]</pre><div class="mermaid"></div></div>`,2)])])}const m=e(r,[["render",s]]);export{q as __pageData,m as default};
