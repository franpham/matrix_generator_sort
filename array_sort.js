
function array_sort(rows, cols) {
	var map = new Array(rows);
	var total = rows * cols;
	var temp = new Array(total);
	
	for (var m = 0; m < total; m++) {
		temp[m] = Math.round(Math.random() * 100);
	}
	temp.sort(compare);

	for (var i = 0; i < rows; i++) {
		map[i] = new Array(cols);
		for (var j = 0; j < cols; j++) {
			map[i][j] = temp[(i * cols) + j];
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
console.log(array_sort(3, 3));
