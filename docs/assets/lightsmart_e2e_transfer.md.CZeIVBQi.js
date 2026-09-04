import{bQ as e,aL as a,u as r,G as n}from"./chunks/framework.CNL6o8_w.js";const d=JSON.parse('{"title":"家庭移交流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/transfer.md","filePath":"lightsmart/e2e/transfer.md"}'),s={name:"lightsmart/e2e/transfer.md"};function i(m,t,p,o,c,l){return a(),r("div",null,[...t[0]||(t[0]=[n(`<h1 id="家庭移交流程" tabindex="-1">家庭移交流程 <a class="header-anchor" href="#家庭移交流程" aria-label="Permalink to &quot;家庭移交流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant 邀请人
    participant ztmp
    participant 被邀请人

    邀请人-&gt;&gt;ztmp: 1. transfer_create
    ztmp--&gt;&gt;邀请人: { url_link, token }
    邀请人-&gt;&gt;被邀请人: 2. 分享链接(2h有效)
    被邀请人-&gt;&gt;ztmp: 3. transfer_lookup
    ztmp--&gt;&gt;被邀请人: { familyName, rooms }
    alt 接受
        被邀请人-&gt;&gt;ztmp: 4a. transfer_accept
        Note over ztmp: 事务转移member_id
        ztmp--&gt;&gt;被邀请人: 转移完成
    else 拒绝
        被邀请人-&gt;&gt;ztmp: 4b. transfer_cancel
        ztmp--&gt;&gt;被邀请人: 已取消
    end</pre><div class="mermaid"></div></div>`,2)])])}const g=e(s,[["render",i]]);export{d as __pageData,g as default};
