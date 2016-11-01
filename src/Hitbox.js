import * as three from 'three';

export default class Hitbox extends three.Box3 {
	constructor(obj) {
		super();
		this.parent = obj;

		this.setFromObject(this.parent);

		this.boundingBox = new three.BoxHelper(this);
		this.isIntersecting = false;
		this.intersectTimeout = 0;
	}

	update() {

		this.intersectTimeout = Math.max(0, this.intersectTimeout - 1);
		if (this.intersectTimeout === 0) {
			this.isIntersecting = false;
		}
	}

	updatePos() {
		this.setFromObject(this.parent);
	}

	setColliding() {
		this.isIntersecting = true;
		this.intersectTimeout = 3;
	}

	checkCollision(other) {
		this.updatePos();
		other.updatePos();

		if (!this.isIntersecting) {
			return this.intersectsBox(other) && !other.isIntersecting;
		}

		return false;
	}
}
