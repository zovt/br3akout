import * as three from 'three';

import GameObject from './GameObject.js';
import Ball from './Ball.js';

export default class Brick extends GameObject {
	constructor(x, y, width, height, color, callback) {
		const geometry = new three.PlaneGeometry(width, height);
		const material = new three.MeshBasicMaterial({ color });
		super(new three.Mesh(geometry, material));

		this.position.set(x, y, 0);
		this.width = width;
		this.height = height;
		this.collisionCallback = callback;
	}

	onCollision(obj) {
		if (obj instanceof Ball) {
			if (obj.lastPosition.x < this.position.x - this.width / 2 + 3
					|| obj.lastPosition.x > this.position.x + this.width / 2 - 3) {
				obj.displacementVector.setX(-obj.displacementVector.x);
			} else {
				obj.displacementVector.setY(-obj.displacementVector.y);
			}
			this.collisionCallback(this);
		}
	}
}

