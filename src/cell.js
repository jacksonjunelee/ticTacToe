function Cell() {
	this.value = 0;
}
Cell.prototype.setState = function(value) {
	if (value * value === 1) {
		this.value = value;
	}
};
Cell.prototype.playable = function() {
	return (this.value) ? false : true;
};

Cell.prototype.render = function() {
	return this.value;
};