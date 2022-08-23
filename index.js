function formatAmount(amount) {
	//Split amount with decimal
    var result = amount.toString().split('.');
    //Get last three digits of before decimal string
    var lastThree = result[0].substring(result[0].length - 3);
    //Get other digits of before decimal string
    var otherNumbers = result[0].substring(0, result[0].length - 3);
    //If there are other numbers then add a comma before lastThree
    if (otherNumbers != '' && otherNumbers != '-')
        lastThree = ',' + lastThree;
    var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    if (result.length > 1) {
        output += "." + result[1].slice(0,2);
	if (result[1].length <= 1) {
      	    output += '0'.repeat(2 - result[1].length);
    	}
    }
    else {
    	output += '.00';
      }
	
    return output;
}

module.exports = formatAmount;
