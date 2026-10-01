import{bQ as e,aL as a,u as i,G as d}from"./chunks/framework.CNL6o8_w.js";const h=JSON.parse('{"title":"设备配网全流程","description":"","frontmatter":{},"headers":[],"relativePath":"lightsmart/e2e/provisioning.md","filePath":"lightsmart/e2e/provisioning.md"}'),n={name:"lightsmart/e2e/provisioning.md"};function o(r,t,l,s,c,g){return a(),i("div",null,[...t[0]||(t[0]=[d(`<h1 id="设备配网全流程" tabindex="-1">设备配网全流程 <a class="header-anchor" href="#设备配网全流程" aria-label="Permalink to &quot;设备配网全流程&quot;">​</a></h1><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
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
    MP-&gt;&gt;ztmp: 12. 记录配网状态</pre><div class="mermaid"></div></div><h2 id="ztutil-在配网中的角色" tabindex="-1">ztUtil 在配网中的角色 <a class="header-anchor" href="#ztutil-在配网中的角色" aria-label="Permalink to &quot;ztUtil 在配网中的角色&quot;">​</a></h2><p>配网流程中 ztUtil 承担两个阶段的通信：</p><h3 id="阶段一-ble-配网-步骤-7-8" tabindex="-1">阶段一：BLE 配网（步骤 7-8） <a class="header-anchor" href="#阶段一-ble-配网-步骤-7-8" aria-label="Permalink to &quot;阶段一：BLE 配网（步骤 7-8）&quot;">​</a></h3><ul><li><code>setMode(MODE_BLE)</code> → 切换到蓝牙直连模式</li><li><code>connectBle({ gatewayMacList })</code> → BLE 连接网关（Service <code>FFE0</code>）</li><li><code>configWifi({ ssid, psk, gatewayMac })</code> → 通过 AT 命令下发 WiFi 凭据</li><li>网关连上 WiFi 后，固件自行调用 hapi <code>module/login</code> 获取 MQTT 地址</li></ul><h3 id="阶段二-mqtt-远程-步骤-11" tabindex="-1">阶段二：MQTT 远程（步骤 11） <a class="header-anchor" href="#阶段二-mqtt-远程-步骤-11" aria-label="Permalink to &quot;阶段二：MQTT 远程（步骤 11）&quot;">​</a></h3><ul><li><code>setMode(MODE_MQTT)</code> → 切换到 MQTT 远程模式</li><li><code>connectMqtt({ serverUrl, username, password, ... })</code> → 通过 WSS 连接网关</li><li>后续设备控制/状态查询/场景执行均通过 MQTT 通道</li></ul><h2 id="子设备入网流程-mesh-子设备" tabindex="-1">子设备入网流程（Mesh 子设备） <a class="header-anchor" href="#子设备入网流程-mesh-子设备" aria-label="Permalink to &quot;子设备入网流程（Mesh 子设备）&quot;">​</a></h2><p>上述流程覆盖的是「网关本身的 WiFi/MQTT 配网」。Mesh 子设备（开关、灯、窗帘等）的入网在网关已上线后进行，使用网关↔子设备之间的 <strong>26B 私有加密帧</strong>（帧格式属内部实现，不对外发布）。</p><div class="mermaid-container"><pre class="mermaid-source" style="display:none;">sequenceDiagram
    participant MP as 小程序
    participant GW as 网关
    participant SD as 子设备

    MP-&gt;&gt;GW: 0x10 startBlePair（置配对态，重启广播 bound=0）
    GW--&gt;&gt;MP: 指示灯切 PAIR(50/450)，广播版本位切换为&quot;可发现&quot;
    SD-&gt;&gt;GW: 26B 未配网广播帧（type=0，默认 key 加密）
    GW-&gt;&gt;GW: 滑窗定位 + CRC 校验 → 写节点表（MAC + naddr）
    GW-&gt;&gt;SD: 建连（central） → 发现 FFE0/FFE1/FFE2 → 订阅 FFE2 notify
    MP-&gt;&gt;GW: 0x11 stopBlePair（清配对态，回落连接态）
    Note over GW,SD: 子设备登记完成，进入在线轮询
    MP-&gt;&gt;GW: 控制指令 ble_in（53 帧，含 naddr）
    GW-&gt;&gt;SD: 26B 加密帧转发（fwd_cmd=2）
    SD--&gt;&gt;GW: 26B 加密帧上行应答
    GW--&gt;&gt;MP: ble_out 回执（53 B0 00 00）</pre><div class="mermaid"></div></div><h3 id="关键步骤说明" tabindex="-1">关键步骤说明 <a class="header-anchor" href="#关键步骤说明" aria-label="Permalink to &quot;关键步骤说明&quot;">​</a></h3><table tabindex="0"><thead><tr><th>步骤</th><th>说明</th></tr></thead><tbody><tr><td>进入配对态</td><td>小程序发 <code>0x10</code>，网关置 <code>g_ble_pair_state=1</code>，广播版本位切到&quot;未绑定/可发现&quot;，指示灯切 PAIR（50/450）。指示灯六态定义属内部实现，不对外发布</td></tr><tr><td>子设备发现</td><td>网关常驻主动扫描，在 ADV 原始数据上滑窗定位 26B 帧（不依赖标准 AD TLV），通过 R 互补预检 + CRC16/MODBUS 校验确认合法帧</td></tr><tr><td>写节点表</td><td>未配网帧（type=0）限流留痕；已配网帧取 body 内源 naddr，登记 MAC + naddr 到节点表（105 项，stride 0x12）</td></tr><tr><td>GATT 建连</td><td>网关作为 central 与子设备建连 → MTU 交换 → 发现 FFE0 服务 → 取 FFE1（写句柄）/ FFE2（订阅 notify）</td></tr><tr><td>退出配对态</td><td>小程序发 <code>0x11</code>，清配对态，指示灯回落连接子状态，并触发一次节点列表上报</td></tr><tr><td>在线维护</td><td>网关周期轮询 + 收到子设备上行即刷新在线 tick；超时（约 1860s）判离线</td></tr><tr><td>控制转发</td><td>上层 <code>0x30/0x32/0x34</code> 命令经网关组装为 26B 加密帧发往子设备，回执格式属内部实现，不对外发布</td></tr></tbody></table><h3 id="节点列表查询" tabindex="-1">节点列表查询 <a class="header-anchor" href="#节点列表查询" aria-label="Permalink to &quot;节点列表查询&quot;">​</a></h3><p>网关已登记的子设备可通过 <code>0x12</code>（GET_NODE）查询，回包格式 <code>53 92 00 10 &lt;total&gt; &lt;idx&gt; &lt;16B 记录&gt; &lt;xor&gt;</code>，记录含 MAC / naddr / type / status（在线位）。云端侧的节点列表由 hapi <code>module/module/nodelist</code> 接口下发（节点列表下发协议属内部实现，不对外发布）。</p>`,15)])])}const m=e(n,[["render",o]]);export{h as __pageData,m as default};
