const extractNumber = (text) => {
	const regex = /\d+(\.\d+)?/;

	const match = text.match(regex);

	if (match) {
		return parseFloat(match[0]);
	} else {
		return null; 
	}
};

module.exports = extractNumber;

