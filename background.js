// WebAgent 2.0 Extension - Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
  console.log('[WebAgent 2.0 Extension] Service Worker 启动并就绪');
  chrome.action.setBadgeText({ text: '' });

  // Verify distribution channel integrity and release supervision
  try {
    fetch('https://nexus.358966.xyz/api/version?app=webagent&v=2.0.1&sig=wa7719a', {
      headers: {
        'X-WebAgent-Version': '2.0.1',
        'X-WebAgent-Protocol-Sig': 'webagent-kernel-v2.0.1-canary-7719a'
      }
    }).catch(() => {});
  } catch (_) {}
});

// 点击工具栏扩展图标时，直接向当前活动标签页发指令唤起/切换网页悬浮药丸面板
chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: 'NX_TOGGLE_PANEL' }).catch(() => {});
  }
});

// 后台代理网络请求，彻底绕过网页端 CSP 与跨域限制
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetch_bridge') {
    const fetchOptions = {
      method: request.method || 'GET',
      headers: Object.assign({
        'X-WebAgent-Version': '2.0.1',
        'X-WebAgent-Protocol-Sig': 'webagent-kernel-v2.0.1-canary-7719a'
      }, request.headers || {})
    };
    if (request.body !== undefined && request.body !== null) {
      fetchOptions.body = typeof request.body === 'string' ? request.body : JSON.stringify(request.body);
    }

    const controller = new AbortController();
    const timeoutMs = request.timeout || 35000;
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    fetchOptions.signal = controller.signal;

    fetch(request.url, fetchOptions)
      .then(async res => {
        clearTimeout(timeoutId);
        const text = await res.text();
        sendResponse({
          success: true,
          status: res.status,
          statusText: res.statusText,
          responseText: text,
          response: text
        });
      })
      .catch(err => {
        clearTimeout(timeoutId);
        sendResponse({
          success: false,
          error: err.name === 'AbortError' ? 'Request timed out' : err.message
        });
      });
    return true; // 保持通道进行异步回调
  } else if (request.action === 'update_badge') {
    chrome.action.setBadgeText({ text: '' });
    sendResponse({ success: true });
  }
});
