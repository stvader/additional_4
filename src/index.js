module.exports = function multiply(first, second) {
	let numFirst = Number(first);
	let numSecond = Number(second);
	let strMultiply = String(numFirst*numSecond);
	return strMultiply;
}
