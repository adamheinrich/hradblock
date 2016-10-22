function makeRegexp(str) {
	if (str.toLowerCase() != str) {
		return new RegExp(str);
	} else {
		return new RegExp(str, "i");
	}
}

function testContent(content) {
	var i;
	for (i = 0; i < expressions.length; i++) {
		if (Array.isArray(expressions[i])) {
			var found = true;
			var j;
			for (j = 0; j < expressions[i].length; j++) {
				var re = makeRegexp(expressions[i][j]);
				if (!re.test(content)) {
					found = false;
					break;
				}
			}
			if (found) {
				return true;
			}
		} else {
			var re = new makeRegexp(expressions[i]);
			if (re.test(content)) {
				return true;
			}
		}
	}
	return false;
}

function wtdFilter(elements) {
	var numRemoved = 0;

	if (elements.length > 0) {
		var i;
		for (i = 0; i < elements.length; i++) {
			if (testContent(elements[i].innerText)) {
				if (isDebugMode) {
					elements[i].style.border = '1px solid red';
				} else {
					elements[i].style.visibility = 'hidden';
				}
				numRemoved++;
			}
		}
	}

	return numRemoved;
}
