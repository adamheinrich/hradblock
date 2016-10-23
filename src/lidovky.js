var numRemoved = 0;

numRemoved += wtdFilter(document.getElementsByClassName("mainart"));
numRemoved += wtdFilter($(".row .art"));
numRemoved += wtdFilter($(".list-art .art"));
numRemoved += wtdFilter($("#rubrika-nejctenejsi .art a"));
numRemoved += wtdFilter($(".arts-1 li"));

if (isDebugMode) {
	alert('Lidovky.cz: Removed ' + numRemoved + ' articles.');
}

chrome.runtime.sendMessage({ type: "setBadgeCount", count: numRemoved });
