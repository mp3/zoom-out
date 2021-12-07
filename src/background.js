chrome.runtime.onMessage.addListener((_req, sender) => {
  chrome.tabs.remove(sender.tab.id)
})
