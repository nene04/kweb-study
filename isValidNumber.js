const isValidNumber = (num) => {
	const parsenum = parseInt(num);
	if (!isFinite(parsenum) || isNaN(parsenum)) return false;
	if (parsenum != num) {
		return false;
	}
	return parsenum >= 1 && parsenum <= 9;
};
