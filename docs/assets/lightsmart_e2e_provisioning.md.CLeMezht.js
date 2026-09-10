import{bQ as e,aL as i,u as a,G as n}from"./chunks/framework.CNL6o8_w.js";const m=JSON.parse('{"title":"设备配网全流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/provisioning.md","filePath":"lightsmart/e2e/provisioning.md"}'),o={name:"lightsmart/e2e/provisioning.md"};function l(r,t,s,d,g,c){return i(),a("div",null,[...t[0]||(t[0]=[n(`<h1 id="设备配网全流程" tabindex="-1">设备配网全流程 <a class="header-anchor" href="#设备配网全流程" aria-label="Permalink to &quot;设备配网全流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant MP as 小程序
    participant ztUtil as ztUtil SDK
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
    MP-&gt;&gt;ztUtil: 7. setMode(MODE_BLE)
    MP-&gt;&gt;ztUtil: 8. connectBle() + configWifi()
    ztUtil-&gt;&gt;GW: 8a. BLE AT+CWJAP=&quot;ssid&quot;,&quot;psk&quot;
    GW-&gt;&gt;hapi: 9. module/login (获取MQTT地址)
    hapi--&gt;&gt;GW: { mqtt_host, mqtt_port }
    GW-&gt;&gt;GW: 10. 连接MQTT + BLE Mesh组网
    MP-&gt;&gt;ztUtil: 11. setMode(MODE_MQTT) + connectMqtt()
    ztUtil-&gt;&gt;GW: 11a. MQTT ble_in (拉取节点列表)
    GW--&gt;&gt;ztUtil: 11b. MQTT ble_out (node, meshKey)
    MP-&gt;&gt;ztmp: 12. 记录配网状态</pre><div class="mermaid"></div></div><h2 id="ztutil-在配网中的角色" tabindex="-1">ztUtil 在配网中的角色 <a class="header-anchor" href="#ztutil-在配网中的角色" aria-label="Permalink to &quot;ztUtil 在配网中的角色&quot;">​</a></h2><p>配网流程中 ztUtil 承担两个阶段的通信：</p><h3 id="阶段一-ble-配网-步骤-7-8" tabindex="-1">阶段一：BLE 配网（步骤 7-8） <a class="header-anchor" href="#阶段一-ble-配网-步骤-7-8" aria-label="Permalink to &quot;阶段一：BLE 配网（步骤 7-8）&quot;">​</a></h3><ul><li><code>setMode(MODE_BLE)</code> → 切换到蓝牙直连模式</li><li><code>connectBle({ gatewayMacList })</code> → BLE 连接网关（Service <code>FFE0</code>）</li><li><code>configWifi({ ssid, psk, gatewayMac })</code> → 通过 AT 命令下发 WiFi 凭据</li><li>网关连上 WiFi 后，固件自行调用 hapi <code>module/login</code> 获取 MQTT 地址</li></ul><h3 id="阶段二-mqtt-远程-步骤-11" tabindex="-1">阶段二：MQTT 远程（步骤 11） <a class="header-anchor" href="#阶段二-mqtt-远程-步骤-11" aria-label="Permalink to &quot;阶段二：MQTT 远程（步骤 11）&quot;">​</a></h3><ul><li><code>setMode(MODE_MQTT)</code> → 切换到 MQTT 远程模式</li><li><code>connectMqtt({ serverUrl, username, password, ... })</code> → 通过 WSS 连接网关</li><li>后续设备控制/状态查询/场景执行均通过 MQTT 通道</li></ul>`,8)])])}const M=e(o,[["render",l]]);export{m as __pageData,M as default};
