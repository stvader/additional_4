module.exports = function multiply(first, second) {
	let numFirst = Number(first);
	let numSecond = Number(second);
	let resultNum = numFirst*numSecond;	
	let resultStr = String(resultNum);
	if (resultStr.indexOf('+') === -1) return resultStr;

	let eArg = resultStr.split('e+')[1];
	let partFirst = resultNum/Math.pow(10, eArg);
	let 

	//return strMultiply;
}
