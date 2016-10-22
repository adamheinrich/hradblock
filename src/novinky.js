var numRemoved = 0;

numRemoved += wtdFilter(document.getElementsByClassName("topArticle"));
numRemoved += wtdFilter(document.getElementsByClassName("mainArticle"));
numRemoved += wtdFilter($(".nextStory .taItem"));
numRemoved += wtdFilter($(".subItem li"));
numRemoved += wtdFilter($("#sectionContainer .item"));
numRemoved += wtdFilter($("#hintBox p"));

if (isDebugMode) {
	alert('Novinky.cz: Removed ' + numRemoved + ' articles.');
}
