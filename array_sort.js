
function array_sort(rows, cols) {
	var map = new Array(rows);

	for (var i = 0; i < rows; i++) {
		map[i] = new Array(cols);
		for (var j = 0; j < cols; j++) {
			map[i][j] = Math.round(Math.random() * 100);
		}
	}

	var compare = function (a, b) {
		return a < b ? -1 : (a > b ? 1 : 0);
	}

	for (var k = 0; k < rows; k++) {
		map[k].sort(compare);
	}
	return map;
}

var example = array_sort(3, 3);
console.log(example);
