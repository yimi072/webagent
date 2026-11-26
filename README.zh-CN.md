# WebAgent 2.0

<p align="center">
  <img src="assets/webagent-logo.png" alt="WebAgent 2.0" width="160" />
</p>

<p align="center">
  <b>新一代自动化 Web AI MCP 调度器与本地系统桥接内核</b><br>
  <i>赋能 DeepSeek、ChatGPT、Gemini、Kimi、通义千问等主流网页端大模型，赋予其全自动本地研发与执行能力</i>
</p>

<p align="center">
  <a href="README.md"><b>English</b></a> | <b>简体中文</b>
</p>

<p align="center">
  <a href="https://github.com/ysunyang4/webagent"><img src="https://img.shields.io/badge/版本-2.0.1-blue.svg?style=flat-square" alt="Version 2.0.1"></a>
  <a href="https://developer.chrome.com/docs/extensions/mv3/"><img src="https://img.shields.io/badge/Manifest-V3-success.svg?style=flat-square" alt="Manifest V3"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/开源协议-GPL--3.0-blue.svg?style=flat-square" alt="GPL-3.0 License"></a>
  <a href="https://blog.ycu.de5.net/"><img src="https://img.shields.io/badge/官方教程-博客精讲-10B981.svg?style=flat-square" alt="教程"></a>
  <a href="https://t.me/ysun_webai"><img src="https://img.shields.io/badge/Telegram-@ysun__webai-0088cc.svg?style=flat-square" alt="Telegram"></a>
  <a href="https://github.com/ysunyang4/webagent"><img src="https://img.shields.io/badge/QQ交流群-1131916140-1296DB.svg?style=flat-square" alt="QQ群"></a>
</p>

---

## 1. 项目概述

**WebAgent 2.0** 是一款专为企业级开发者打造的高性能、隐私优先 Chromium 浏览器扩展。它致力于将网页端大语言模型（LLM）一键升级为具备完全自主执行能力的本地软件工程智能体。

通过在网页端 AI 聊天窗口与本地操作系统之间建立低延迟、高安全的通信链路（基于标准模型上下文协议 MCP 与 Nexus 本地执行核心），WebAgent 允许网页 AI 在严格沙箱管控下自主读取代码、执行终端命令、编辑工程文件、调用本地工具链并编排复杂研发流程——**无需充值昂贵 API Key，绝无云端中转泄密风险**。

---

## 2. WebAgent 2.0 核心升级特性 (相对 v1.3.4)

WebAgent 2.0 经历了全面的底层架构重构，带来极高稳定性与全新现代化操作体验：

- **全新 3D 品牌视觉与界面升级**：
  - 定制立体质感品牌图标、极简轻量主面板与丝滑微交互。
- **零报错高容错解析引擎 (Zero-Error Parser)**：
  - 自动剔除各网页端注入的代码块干扰按钮（如 DeepSeek/ChatGPT 注入的 `nexusCopyDownload`）。
  - 四级容错自愈解析算法，彻底解决 Windows 反斜杠转义、双引号嵌套与 PowerShell 哈希表（`$b=@{...}`）解析异常。
  - 彻底杜绝 Chrome 扩展管理界面（`chrome://extensions/`）出现红色错误提示。
- **双独立控制面板 (Nexus 专属 MCP 与技能中心)**：
  - 主面板划分为独立的专属 MCP 工具区与技能扩展区。
  - 支持本地路径一键填入与回收站图标（`🗑️`）单行快捷清理。
  - 独立限高滚动容器（`max-height: 140px; overflow-y: auto`），管理大批量工具井井有条。
- **全折叠式手风琴设置中心**：
  - 将冗长的单页设置划分为 5 张独立折叠卡片：
    1. *卡片 0：官方指南与博客图文教程*（集成作者头像与博客直达）。
    2. *卡片 1：界面语言与本地路径配置*（四国语言一键切换、默认工作区、专属 MCP 与技能路径）。
    3. *卡片 2：安全执行与调用频率管控*（隐私数据智能脱敏、自动执行、人工审核模式、延迟与步数配额滑块）。
    4. *卡片 3：扩展功能与高级选项*（动态 MCP 注册、自定义系统提示词、通信端口设置）。
    5. *卡片 4：开发者社群与联系矩阵*（GitHub 仓库、官方 Telegram 频道、QQ 交流群、反馈邮箱）。
- **100% 纯净多语言国际化支持 (Zero-Leakage i18n)**：
  - 完整覆盖英文（`en-US`）、简体中文（`zh-CN`）、日语（`ja-JP`）与德语（`de-DE`）。
  - 所有界面文本、提示气泡、占位符及注入的协议模版动态切换，绝无语言串扰。
- **跨会话自动续接与记忆状态持久化**：
  - 实时监控网页端对话长度限制。触发上限时自动打包项目路径、当前任务目标与执行检查点，自动新开会话并无缝续接任务。

---

## 3. 官方教程与社区链接

> **快速入门**：如需图文并茂的分步配置说明，请查阅我们的官方博客指南。

- 📖 **官方博客图文教程**：[https://blog.ycu.de5.net/](https://blog.ycu.de5.net/)
- ✈️ **Telegram 官方社区频道**：[https://t.me/ysun_webai](https://t.me/ysun_webai)
- 🐧 **QQ 官方开发者交流群**：**1131916140**
- 🐙 **GitHub 开源仓库**：[https://github.com/ysunyang4/webagent](https://github.com/ysunyang4/webagent)
- ✉️ **作者联系与商业咨询**：`ysunyang4@gmail.com`

---

## 4. 支持的网页 AI 平台

WebAgent 为下列主流网页端大模型助手提供深度适配的执行钩子：

| 平台名称 | 网页域名 | 核心适配特性 |
| :--- | :--- | :--- |
| **DeepSeek (V3 / R1)** | `chat.deepseek.com` | 思维链完整捕获、长文本截断智能续接 |
| **OpenAI ChatGPT** | `chatgpt.com` / `chat.openai.com` | ProseMirror 富文本输入适配、多轮工具自动提交 |
| **Google Gemini** | `gemini.google.com` | Quill 编辑器输入绑定、多行指令自愈、自主循环执行 |
| **Google AI Studio** | `aistudio.google.com` | Chat Prompt / 自由模式执行器、流式输出中断自愈 |
| **Kimi (月之暗面)** | `kimi.ai` / `kimi.moonshot.cn` | 会话超长自动跨会话交接、长提示词高容错支持 |
| **通义千问 (Qwen)** | `chat.qwen.ai` / `tongyi.aliyun.com` | 页面自适应暗黑/浅色主题、多轮循环结果回填 |
| **豆包 (字节跳动)**| `doubao.com` | 实时生成状态监听、原生输入框焦点与回车绑定 |
| **Duck.ai** | `duck.ai` | 极简无痕隐私对话模式深度兼容 |
| **智谱清言 (Z.ai)** | `zchat.z.ai` / `chat.z.ai` | 全局门户自适应、结构化代码块精准解析 |
| **Perplexity** | `perplexity.ai` | 联网检索增强型工具编排与执行 |
| **微软 Copilot** | `copilot.microsoft.com` | 企业版与个人版网页端本地控制桥接 |
| **当贝 AI** | `ai.dangbei.com` | 原生主题深度契合与指令注入 |
| **Dola** | `dola.com` | 网页快照抓取与持续工具调度 |

---

## 5. 快速上手安装 (仅需 5 分钟)

### 第一步：克隆或下载源码
将本项目克隆到您的本地计算机：
```bash
git clone https://github.com/ysunyang4/webagent.git
```

### 第二步：加载到 Chromium 内核浏览器
1. 打开任何基于 Chromium 的现代浏览器（Google Chrome、Microsoft Edge、Brave 等）：
   - Chrome 浏览器在地址栏输入：`chrome://extensions/`
   - Edge 浏览器在地址栏输入：`edge://extensions/`
2. 打开右上角的 **开发者模式** 开关。
3. 点击左上角的 **加载已解压的扩展程序** 按钮，选择克隆下来的 `webagent` 目录（确保该目录下直接包含 `manifest.json`、`content.js` 等核心文件）。

### 第三步：配置与开始使用
1. 访问任意支持的网页 AI 站点（例如 [DeepSeek](https://chat.deepseek.com/) 或 [ChatGPT](https://chatgpt.com/)）。
2. **WebAgent 2.0 网页悬浮药丸面板** 将自动展示在聊天页面顶部。
3. 点击齿轮图标打开 **设置中心**，按照 [官方博客教程](https://blog.ycu.de5.net/) 指定您的默认工作区目录。
4. 点击 **注入协议**，即可让网页 AI 开始与您的本地操作系统协同研发！

---

## 6. 隐私与安全架构

- **严格本地环回保护**：所有进程间通信严格锁定在 `127.0.0.1`（本地主机）。绝无任何代码文件或命令历史上传至外部云服务器。
- **敏感数据自动脱敏**：内置实时正则脱敏过滤引擎，在工具输出返回给网页前，自动抹除 API 密钥、私有 Token、密码及绝对用户系统路径。
- **执行步数与速率配额**：内置延迟缓冲（0.5 秒 – 10 秒）与单次循环上限（1 – 50 步），防止失控的死循环。

---

## 7. ☕ 赞助与支持 (Support)

如果 **WebAgent** 对您的日常工作流或开发效率有所帮助，欢迎自愿赞助支持本项目的持续开源维护 ☕！所有赞助均为自愿行为，不附带任何额外功能、专属服务或优先支持特权。

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/ryansun)

> 💼 **企业赞助与商业授权 (Enterprise & Licensing)**  
> 如需企业级赞助、定制智能体集成，或商业闭源授权（豁免 GPL-3.0 开源传染义务的商业双重许可），欢迎通过 [GitHub Issues](https://github.com/ysunyang4/webagent/issues) 或邮件联系：`ysunyang4@gmail.com`。

<div align="center">
  <table>
    <tr>
      <td align="center" width="220">
        <img src="assets/wechat-pay.jpg" width="180" alt="微信赞赏码" style="border-radius: 12px;" /><br />
        <br />
        <b>微信赞赏码</b><br />
        <span style="font-size: 11px; color: #888;">微信扫码赞赏支持作者</span>
      </td>
      <td align="center" width="220">
        <img src="assets/alipay.jpg" width="180" alt="支付宝赞赏码" style="border-radius: 12px;" /><br />
        <br />
        <b>支付宝赞赏码</b><br />
        <span style="font-size: 11px; color: #888;">支付宝扫码赞赏支持作者</span>
      </td>
      <td align="center" width="240">
        <img src="assets/binance-pay.jpg" width="180" alt="加密货币 (USDT / USDC)" style="border-radius: 12px;" /><br />
        <br />
        <b>加密货币 (USDT / USDC)</b><br />
        <code>UID: 1292741809</code><br />
        <span style="font-size: 11px; color: #888;">币安支付 (Binance Pay) · Ryan Sunv</span>
      </td>
      <td align="center" width="220">
        <img src="assets/ko-fi-qr.png" width="180" alt="Ko-fi" style="border-radius: 12px;" /><br />
        <br />
        <b>Ko-fi</b><br />
        <span style="font-size: 11px; color: #888;">Ko-fi 扫码请作者喝咖啡</span>
      </td>
    </tr>
  </table>
</div>

### 官方收款渠道

| 收款渠道 | 详细信息 | 验证与使用方式 |
| :--- | :--- | :--- |
| **加密货币 (USDT / USDC)** | **UID: `1292741809`** · 账户名: **Ryan Sunv** | 币安 App 扫码或通过 Binance Pay 站内直接转账（免选手续费网络） |
| **加密货币 (USDT 链上直转)** | **地址: `TPRrDW8DGsrDmcnWvanTbFz7XEJuywu21i`** · 网络: **TRON (TRC-20)** | 用任何钱包或交易所转出时，选 **TRON (TRC-20)** 网络即可 |
| **微信赞赏** | 微信创作者官方赞赏码 | 仅通过上方官方展示的图片扫码 |
| **支付宝赞赏** | 支付宝官方赞赏码 | 仅通过上方官方展示的图片扫码 |
| **Ko-fi** | [https://ko-fi.com/ryansun](https://ko-fi.com/ryansun) | 通过 Ko-fi 请作者喝杯咖啡 (PayPal) |

> ☕ **每一份打赏，无论多少，对我都是莫大的鼓励。** 您的支持会帮助我把这个项目做得更加完善、更加强大。感谢您陪它一起成长。

### 官方声明

- **唯一官方渠道**：上表列出的 UID、二维码和链上地址是本项目**唯一**合法的官方赞助通道。
- **绝无私信索要**：项目作者与维护团队**绝不会**通过私信、邮件、即时通讯工具等任何方式主动向您索要转账、汇款或账户信息。
- **防伪与举报**：如在任何第三方网站、Fork 仓库或镜像中发现声称属于本项目但与上述 UID 或二维码不一致的情况，请立即通过 [GitHub Issues](https://github.com/ysunyang4/webagent/issues) 提交举报。

### 免责声明

- **网络与地域限制**：加密资产赞助须遵循相关服务平台规则。在进行赞助前，请确认币安支付（Binance Pay）在您所在国家或地区完全合法合规且可用。
- **法律与税务合规**：赞助者须自行承担并遵守所在司法管辖区关于赠予、赞助的一切税务与法律合规责任。

---

## 8. 开源许可证

本项目基于 **GNU 通用公共许可证 v3.0 (GPL-3.0)** 开源。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ysunyang4">ysunyang4</a> 与开源社区贡献者
</p>
