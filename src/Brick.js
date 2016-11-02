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
			if (obj.lastPosition.x < this.position.x - this.width / 2
					|| obj.lastPosition.x > this.position.x + this.width / 2) {
				obj.displacementVector.setX(-obj.displacementVector.x);
				obj.displacementVector.setX(Math.sign(obj.displacementVector.x)
						* Math.max(2, Math.abs(obj.displacementVector.x)));
			} else {
				obj.displacementVector.setY(-obj.displacementVector.y);
				obj.displacementVector.setY(Math.sign(obj.displacementVector.y)
						* Math.max(2, Math.abs(obj.displacementVector.y)));
			}
			this.collisionCallback(this);
		}
	}
}

