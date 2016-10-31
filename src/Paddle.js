import * as three from 'three';

import GameObject from './GameObject.js';

export default class Paddle extends GameObject {
	constructor(x, yOffset) {
		const geometry = new three.PlaneGeometry(75, 10);
		const material = new three.MeshBasicMaterial({ color: 0xFF00FF });
		super(new three.Mesh(geometry, material));

		this.position.set(x, yOffset, 0);
		this.mousePosition = new three.Vector3();
		this.mousePosition.copy(this.position);
		
		this.setMousePosition = this.setMousePosition.bind(this);
	}

	setMousePosition(x, y) {
		this.mousePosition = new three.Vector3(x, y, 0);
	}

	update() {
		if (Math.abs(this.mousePosition.x - this.position.x) < 10) {
			return;
		}
		const displacementVector = new three.Vector3();
		console.log(this.mousePosition);
		displacementVector.copy(this.mousePosition);
		displacementVector.setY(this.position.y);
		displacementVector.sub(this.position);
		displacementVector.divideScalar(displacementVector.length());
		displacementVector.multiplyScalar(5);
		this.position.add(displacementVector);
		this.position.floor();
	}
}
