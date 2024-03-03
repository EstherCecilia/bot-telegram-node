const containsWord = (text, phrase) => {
	const pattern = new RegExp(phrase.join('|'), 'i'); 

    
	return pattern.test(text);
};

module.exports = containsWord;