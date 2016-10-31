import * as three from 'three';

export default class Hitbox extends three.Box3 {
	constructor(obj) {
		super();
		this.parent = obj;

		this.setFromObject(this.parent);

		this.boundingBox = new three.BoxHelper(this);
	}

	update() {
		this.setFromObject(this.parent);
	}

	checkCollision(other) {
		this.update();
		other.update();

		return this.intersectsBox(other);
	}
}
