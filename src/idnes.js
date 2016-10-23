var numRemoved = 0;

numRemoved += wtdFilter(document.getElementsByClassName("art"));
numRemoved += wtdFilter(document.getElementsByClassName("alone"));
numRemoved += wtdFilter($(".arts-1 li"));
numRemoved += wtdFilter($("#nejnovejsi li"));
numRemoved += wtdFilter($(".video-box li"));

if (isDebugMode) {
	alert('iDNES.cz: Removed ' + numRemoved + ' articles.');
}

chrome.runtime.sendMessage({ type: "setBadgeCount", count: numRemoved });
