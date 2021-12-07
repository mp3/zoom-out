const waitingTime = 10000

setTimeout(() => {
  chrome.runtime.sendMessage({}, () => {})
}, waitingTime)
