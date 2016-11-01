var numRemoved = 0;

/* Nejdrive konkretni, pak obecne -- abychom napr. zabranili odstraneni celeho
   #mainart, je-li hledany vyraz v ul.shp-style li */

numRemoved += wtdFilter($("ul.shp-style li"));
numRemoved += wtdFilter($(".arts-1 li"));
numRemoved += wtdFilter($("#rubrika-nejctenejsi .art a"));
numRemoved += wtdFilter($(".row .art"));
numRemoved += wtdFilter($(".list-art .art"));
numRemoved += wtdFilter(document.getElementsByClassName("mainart"));

if (isDebugMode) {
	alert('Lidovky.cz: Removed ' + numRemoved + ' articles.');
}

chrome.runtime.sendMessage({ type: "setBadgeCount", count: numRemoved });
