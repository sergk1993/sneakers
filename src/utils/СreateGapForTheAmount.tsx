/* Функция берет число и делает пробелы например: 1000000 > 1 000 000 или 10000 > 10 000 */
function СreateGapForTheAmount(sumNumber: number | string) {
	let changeNum = sumNumber.toString()
	if (changeNum.length === 5) {
		changeNum = changeNum.substring(0, 2) +' ' + changeNum.substring(2);
	} 
	else if (changeNum.length === 6) {
		changeNum = changeNum.substring(0, 3) +' ' + changeNum.substring(3);
	}
	else if (changeNum.length === 7) {
		changeNum = changeNum.substring(0, 1) +' ' + changeNum.substring(1,4) + ' ' + changeNum.substring(4);
	}
		return changeNum
}

export default СreateGapForTheAmount