var numRemoved = 0;

numRemoved += wtdFilter(document.getElementsByClassName("otvirak"));
numRemoved += wtdFilter(document.getElementsByClassName("zprava"));
numRemoved += wtdFilter(document.getElementsByClassName("zprava-obrazek"));
numRemoved += wtdFilter(document.getElementsByClassName("zprava-video"));
numRemoved += wtdFilter(document.getElementsByClassName("zprava-galerie"));
numRemoved += wtdFilter(document.getElementsByClassName("zprava-infografika"));
numRemoved += wtdFilter(document.getElementsByClassName("zprava-obrazem"));
numRemoved += wtdFilter(document.getElementsByClassName("hlavni-zprava-obrazem"));
numRemoved += wtdFilter(document.getElementsByClassName("boxik"));
numRemoved += wtdFilter(document.getElementsByClassName("plonkovy-boxik"));
numRemoved += wtdFilter(document.getElementsByClassName("plonkovy-autor-box"));
numRemoved += wtdFilter(document.getElementsByClassName("blog"));

numRemoved += wtdFilter(document.getElementsByClassName("prvni-polozka"));
numRemoved += wtdFilter(document.getElementsByClassName("polozka"));
numRemoved += wtdFilter($(".nejctenejsi li"));

if (isDebugMode) {
	alert('Aktualne.cz: Removed ' + numRemoved + ' articles.');
}

chrome.runtime.sendMessage({ type: "setBadgeCount", count: numRemoved });
