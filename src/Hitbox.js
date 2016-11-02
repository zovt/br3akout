import * as three from 'three';

export default class Hitbox extends three.Box3 {
	constructor(obj) {
		super();
		this.parent = obj;

		this.setFromObject(this.parent);

		this.boundingBox = new three.BoxHelper(this);

		this.colliding = new Set();
		this.previouslyColliding = new Set();
	}

	doCollisions() {

		this.colliding.forEach(collider => {
			this.previouslyColliding.add(collider);
			collider.onCollision(this.parent);
		});

		this.colliding.clear();
	}

	updatePos() {
		this.setFromObject(this.parent);
	}

	checkCollision(other) {
		this.updatePos();
		other.updatePos();

		if (!this.previouslyColliding.has(other.parent)) {
			if (this.intersectsBox(other)) {
				this.colliding.add(other.parent);
				other.colliding.add(this.parent);
				return true;
			}
		}
		if (!this.intersectsBox(other)) {
			this.previouslyColliding.delete(other.parent);
			other.previouslyColliding.delete(this.parent);
		}

		return false;
	}
}
