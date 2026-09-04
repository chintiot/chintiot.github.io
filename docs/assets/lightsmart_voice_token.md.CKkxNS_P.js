import{bQ as e,aL as a,u as n,G as o}from"./chunks/framework.CNL6o8_w.js";const l=JSON.parse('{"title":"语音平台 Token 对接流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/voice/token.md","filePath":"lightsmart/voice/token.md"}'),i={name:"lightsmart/voice/token.md"};function r(s,t,c,m,d,p){return a(),n("div",null,[...t[0]||(t[0]=[o(`<h1 id="语音平台-token-对接流程" tabindex="-1">语音平台 Token 对接流程 <a class="header-anchor" href="#语音平台-token-对接流程" aria-label="Permalink to &quot;语音平台 Token 对接流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant MP as 小程序
    participant ztmp
    participant VP as 语音平台

    MP-&gt;&gt;ztmp: 1. 生成voice_token
    ztmp--&gt;&gt;MP: { token, home_uuid }
    MP-&gt;&gt;VP: 2. 传递home_uuid
    VP-&gt;&gt;ztmp: 3. POST /discovery
    ztmp--&gt;&gt;VP: 设备发现结果</pre><div class="mermaid"></div></div>`,2)])])}const g=e(i,[["render",r]]);export{l as __pageData,g as default};
