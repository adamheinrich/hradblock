var counts = {};

chrome.browserAction.setBadgeBackgroundColor({ color: [100, 100, 100, 255] });
chrome.browserAction.setBadgeText({ text: '' });

function setBadgeCount(count) {
	if (count == 0) {
		chrome.browserAction.setBadgeText({ text: '' });
	} else {
		chrome.browserAction.setBadgeText({ text: ''+count });
	}
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
	if (message.type == "setBadgeCount") {
		counts[sender.tab.id] = message.count;
		setBadgeCount(message.count);
	}
});

chrome.tabs.onActivated.addListener(function(tabInfo) {
	chrome.tabs.get(tabInfo.tabId, function(tab) {
		if (counts[tab.id] != null) {
			setBadgeCount(counts[tab.id]);
		} else {
			setBadgeCount(0);
		}
	});
});
