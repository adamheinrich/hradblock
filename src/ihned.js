var numRemoved = 0;

numRemoved += wtdFilter(document.getElementsByClassName("ga-edl"));
numRemoved += wtdFilter(document.getElementsByClassName("article-big"));
numRemoved += wtdFilter(document.getElementsByClassName("ga-edl-newsroom"));
numRemoved += wtdFilter(document.getElementsByClassName("article-comment"));

if (isDebugMode) {
	alert('IHNED.cz: Removed ' + numRemoved + ' articles.');
}
