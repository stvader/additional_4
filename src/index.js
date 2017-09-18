function multiplyOneNum(arr, number) {
	let resArr = [];
	let multyNum;
	let decadeNum = 0;
	number = parseInt(number);
	for (let i=arr.length-1; i>=0; i--) {
		multyNum = parseInt(arr[i])*number;
		resNum = multyNum + decadeNum;
		resArr.push(resNum%10);
		decadeNum = Math.trunc(resNum/10);		
	}

	if (decadeNum) resArr.push(decadeNum);
	return resArr.reverse();
}

function sumArrNum(arr1, arr2) {	
	let resArr = [];
	let sunNum;
	let decadeNum = 0;
	let iterCount = Math.max(arr1.length-1, arr2.length-1);

	arr1.reverse();
	arr2.reverse();

	for (let i=0; i<=iterCount; i++) {
		if (!arr1[i]) arr1[i] = 0;
		if (!arr2[i]) arr2[i] = 0;
		sunNum = arr1[i] + arr2[i] + decadeNum;
		resArr.push(sunNum%10);
		decadeNum = Math.trunc(sunNum/10);
	}

	if (decadeNum) resArr.push(decadeNum);
	return resArr.reverse();
}

function addZeros(arr, countZero) {
	for (let i=1; i<=countZero; i++) {
		arr.push(0);
	}

	return arr;
}

function multiplyColumn(first, second) {
	let firstArr = first.split('');
	let secondArr = second.split('');

	let currentResult;
	let newResult;
	let singleMult; 

	for (let i=0; i<secondArr.length; i++) {		
		singleMult = multiplyOneNum(firstArr, secondArr[secondArr.length-1-i]);
		if (!currentResult) {
			currentResult = singleMult;
			continue;
		}

		newResult = addZeros(singleMult, i);
		currentResult = sumArrNum(currentResult, newResult);
	}

	return currentResult.join('');
}

module.exports = function multiply(first, second) {
	let numFirst = Number(first);
	let numSecond = Number(second);
	let resultNum = numFirst*numSecond;	
	let resultStr = String(resultNum);

	if (resultStr.indexOf('e+') === -1) return resultStr;

	return multiplyColumn(first, second);
}