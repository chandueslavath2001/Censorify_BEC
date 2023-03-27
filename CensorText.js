var customcensorewords = ["bad","sad","mad"];
function censor (text){
	for(index in censorwords){
		text = text.replace(censorewords[index],"****");
	}
	for(index in customcensorewords){
		text = text.replace(customcensorewords[index],"****");
	}
	return text;
}
function get censoreword(){
	return censorewords.concat(custom censore words);
}
function get censoreword(word){
	return censorewords.push(words);
}
exports.censor = Censor;
exports.getcensorewords = getCensoredWords;
exports.addcensoreword = getcensorewords;
