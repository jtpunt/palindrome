var myStr = "A Man, A Plan, A Canal-Panama";
var myStr1 = "Too hot to hoot.";
console.log(isPalindrome(myStr));
function isPalindrome(str){
	// check base cases
	if(typeof str !== 'string' || str.length === 0){
		return false;
	}else{ // valid string so far
		// Convert str to lowercase and then remove all non alphanumeric characters
		str = str.toLowerCase().replace(/[^0-9a-z]/g, '');
		console.log(str);
		for(var i = 0; i <= str.length / 2; i++){
			if(str[i] !== str[str.length - 1 - i]){
				return false;
			}
			console.log(i, ' ', str.length - 1 - i, str[i], ' ', str[str.length - 1 - i]);
		}
		return true;
	}
}