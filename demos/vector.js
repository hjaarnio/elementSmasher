var v = function(x, y){
	this.x = x;
	this.y = y;
	this.add = add;
	this.sub = sub;
	this.multiply = multiply;
	this.lengthSquare = lengthSquare;
	this.length = vLength;
	this.distSquare = distSquare;
	this.copy = copy;
	this.dot = dot;
}
function add(v1) {
	this.x += v1.x;
	this.y += v1.y;
	return this;
}
function sub(v1) {
	this.x -= v1.x;
	this.y -= v1.y;
	return this;
}
function multiply(l) {
	this.x *= l;
	this.y *= l;
	return this;
}
function lengthSquare(){
	return this.x * this.x + this.y*this.y;
}
function vLength() {
	return Math.sqrt(this.lengthSquare());
}
function dot(v1){
	return this.x * v1.x + this.y*v1.y;
}
function copy(){
	return new v(this.x, this.y);
}
function distSquare(v1){
	var dX = v1.x - this.x;
	var dY = v1.y - this.y
	return dX * dX + dY * dY;
}

