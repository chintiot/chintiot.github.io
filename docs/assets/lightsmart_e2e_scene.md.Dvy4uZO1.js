import{bQ as e,aL as a,u as o,G as d}from"./chunks/framework.CNL6o8_w.js";const q=JSON.parse('{"title":"场景执行流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/scene.md","filePath":"lightsmart/e2e/scene.md"}'),i={name:"lightsmart/e2e/scene.md"};function r(n,t,c,s,l,u){return a(),o("div",null,[...t[0]||(t[0]=[d(`<h1 id="场景执行流程" tabindex="-1">场景执行流程 <a class="header-anchor" href="#场景执行流程" aria-label="Permalink to &quot;场景执行流程&quot;">​</a></h1><h2 id="路径-a-通过-hapi-rest-api" tabindex="-1">路径 A：通过 hapi REST API <a class="header-anchor" href="#路径-a-通过-hapi-rest-api" aria-label="Permalink to &quot;路径 A：通过 hapi REST API&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">flowchart TD
    A[&quot;小程序请求场景&quot;] --&gt; B[&quot;hapi生成BLE hex&quot;]
    B --&gt; C[&quot;MQTT发布ble_in&quot;]
    C --&gt; D[&quot;网关执行动作&quot;]
    D --&gt; E[&quot;设备状态变化&quot;]
    E --&gt; F{&quot;场景联动&quot;}
    F --&gt; F1[&quot;插卡→欢迎语&quot;]
    F --&gt; F2[&quot;门磁→开门播报&quot;]
    F --&gt; F3[&quot;红外设备控制&quot;]</pre><div class="mermaid"></div></div><h2 id="路径-b-通过-ztutil-sdk" tabindex="-1">路径 B：通过 ztUtil SDK <a class="header-anchor" href="#路径-b-通过-ztutil-sdk" aria-label="Permalink to &quot;路径 B：通过 ztUtil SDK&quot;">​</a></h2><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">flowchart TD
    A[&quot;小程序调用 ysUtil.execScene({ sceneId })&quot;] --&gt; B[&quot;ztUtil protocol.buildCommand 生成 BLE hex&quot;]
    B --&gt; C[&quot;MQTT 发布 ble_in&quot;]
    C --&gt; D[&quot;网关执行动作&quot;]
    D --&gt; E[&quot;设备状态变化&quot;]
    E --&gt; F[&quot;ztUtil register 回调 code=2000&quot;]
    F --&gt; G[&quot;小程序更新 buttons_state&quot;]</pre><div class="mermaid"></div></div><h2 id="场景配置-api" tabindex="-1">场景配置 API <a class="header-anchor" href="#场景配置-api" aria-label="Permalink to &quot;场景配置 API&quot;">​</a></h2><p>场景执行前需要先配置场景，ztUtil 提供以下配置方法：</p><table tabindex="0"><thead><tr><th>方法</th><th>适用设备</th><th>说明</th></tr></thead><tbody><tr><td><code>configSceneSwitch</code></td><td>开关（type 1/2/12）</td><td>配置开关按键的场景绑定</td></tr><tr><td><code>configSceneLight</code></td><td>智能灯（type 4/24）</td><td>配置灯亮度/色温/开关的场景参数</td></tr><tr><td><code>configSceneCurtain</code></td><td>窗帘（type 5）</td><td>配置窗帘位置/动作的场景参数</td></tr><tr><td><code>deleteDeviceScene</code></td><td>所有设备</td><td>删除设备的场景绑定</td></tr><tr><td><code>execScene</code></td><td>—</td><td>执行场景（触发所有绑定设备的动作）</td></tr></tbody></table>`,8)])])}const p=e(i,[["render",r]]);export{q as __pageData,p as default};
