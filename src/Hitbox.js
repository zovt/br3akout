export default class Hitbox {
	constructor(x, y, width, height) {
		this.position = { x, y };
		this.dimensions = { width, height };
	}

	checkIntersect(other) {
		const [leftMost, rightMost] = 
			this.position.x < other.position.x ? [this, other] : [other, this];
		const [topMost, bottomMost] = 
			this.position.y < other.position.y ? [this, other] : [other, this];

		if (leftMost.position.x + leftMost.dimensions.width <= rightMost.position.x
				|| topMost.position.y + topMost.dimensions.height <= bottomMost.position.y) {
			return false;
		}

		return true;
	}
}
