import * as three from 'three';

import GameObject from './GameObject.js';
import Ball from './Ball.js';

export default class Paddle extends GameObject {
	constructor(x, yOffset) {
		const geometry = new three.PlaneGeometry(75, 10);
		const material = new three.MeshBasicMaterial({ color: 0xFF00FF });
		super(new three.Mesh(geometry, material));

		this.position.set(x, yOffset, 0);
		this.mousePosition = new three.Vector3();
		this.mousePosition.copy(this.position);
		this.displacementVector = new three.Vector3(0, 0, 0);
		
		this.setMousePosition = this.setMousePosition.bind(this);
	}

	setMousePosition(x, y) {
		this.mousePosition = new three.Vector3(x, y, 0);
	}

	update() {
		this.displacementVector = new three.Vector3();
		this.displacementVector.copy(this.mousePosition);
		this.displacementVector.setY(this.position.y);
		this.displacementVector.sub(this.position);
		this.displacementVector.clamp(new three.Vector3(-10, 0, 0), 
				new three.Vector3(10, 0, 0));

		const oldX = this.position.x;
		this.position.add(this.displacementVector);
		this.position.floor();

		this.velocity = this.position.x - oldX;
	}

	onCollision(obj) {
		if (obj instanceof Ball) {
			obj.displacementVector.setY(-obj.displacementVector.y);
			obj.displacementVector.setX(obj.displacementVector.x 
					+ this.velocity * 5);
			obj.displacementVector.setX(obj.displacementVector.x / 8);
		}
	}
}
