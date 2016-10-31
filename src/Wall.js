import * as three from 'three';
import GameObject from './GameObject.js';

import Ball from './Ball.js';

export default class Wall extends GameObject {
	constructor(x, y, width, height) {
		const geometry = new three.PlaneGeometry(width, height);
		const material = new three.MeshBasicMaterial({ color: 0xFF00FF });
		super(new three.Mesh(geometry, material));

		this.width = width;
		this.height = height;

		this.position.set(x, y, 0);
	}

	onCollision(obj) {
		if (obj instanceof Ball) {
			const normal = new three.Vector3();
			if (this.width > this.height) {
				normal.setY(1);
			} else {
				normal.setX(1);
			}

			obj.displacementVector.reflect(normal);
		}
	}
}
