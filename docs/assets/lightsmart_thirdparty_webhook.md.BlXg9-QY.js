import{bQ as a,aL as n,u as s,G as o}from"./chunks/framework.CNL6o8_w.js";const q=JSON.parse('{"title":"设备状态变更 Webhook","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/thirdparty/webhook.md","filePath":"lightsmart/thirdparty/webhook.md"}'),e={name:"lightsmart/thirdparty/webhook.md"};function p(d,t,i,u,r,l){return n(),s("div",null,[...t[0]||(t[0]=[o(`<h1 id="设备状态变更-webhook" tabindex="-1">设备状态变更 Webhook <a class="header-anchor" href="#设备状态变更-webhook" aria-label="Permalink to &quot;设备状态变更 Webhook&quot;">​</a></h1><p>当设备状态变化时，hapi 主动 POST 到第三方应用的 <code>notify_url</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST {app.notify_url}</span></span>
<span class="line"><span>X-Beancomm-Timestamp: 1693700000</span></span>
<span class="line"><span>X-Beancomm-AppId: {app_id}</span></span>
<span class="line"><span>X-Beancomm-Signature: {md5(JSON.stringify(notifyData) + ts + app_secret)}</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;room_uuid&quot;: &quot;xxx&quot;,</span></span>
<span class="line"><span>  &quot;device_name&quot;: &quot;床头灯&quot;,</span></span>
<span class="line"><span>  &quot;nick_name&quot;: &quot;床头灯&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;smart_light&quot;,</span></span>
<span class="line"><span>  &quot;mac&quot;: &quot;aabbccddeeff&quot;,</span></span>
<span class="line"><span>  &quot;change&quot;: {</span></span>
<span class="line"><span>    &quot;on_off&quot;: { &quot;previous&quot;: &quot;off&quot;, &quot;current&quot;: &quot;on&quot; },</span></span>
<span class="line"><span>    &quot;brightness&quot;: { &quot;previous&quot;: &quot;50&quot;, &quot;current&quot;: &quot;80&quot; }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>特殊语义事件</strong>:</p><table tabindex="0"><thead><tr><th>事件</th><th>change 字段</th><th>说明</th></tr></thead><tbody><tr><td>勿扰</td><td><code>do_not_disturb</code></td><td>勿扰模式开关</td></tr><tr><td>打扫房间</td><td><code>make_up_room</code></td><td>打扫请求</td></tr><tr><td>紧急呼叫</td><td><code>sos</code></td><td>SOS 按键触发</td></tr><tr><td>开门</td><td><code>open_door</code></td><td>门磁打开</td></tr></tbody></table>`,5)])])}const h=a(e,[["render",p]]);export{q as __pageData,h as default};
