import * as three from 'three';

import GameObject from './GameObject.js';

export default class Ball extends GameObject {
	constructor(x, y, radius, color) {
		const geometry = new three.CircleGeometry(radius, 50);
		const material = new three.MeshBasicMaterial({ color });
		super(new three.Mesh(geometry, material));

		this.lastPosition = new three.Vector3();
		this.position.set(x, y, 0);
		this.lastPosition.copy(this.position);

		this.initDisplacemetVector();
	}

	initDisplacemetVector() {
		this.displacementVector = new three.Vector3(0, -1, 0);
		this.displacementVector.multiplyScalar(4);
	}

	update() {
		super.update();
		this.lastPosition.copy(this.position);
		this.position.add(this.displacementVector);
	}

	setDisplacementVector(x, y) {
		this.displacementVector.set(x, y, 0);
	}

	setBounced() {
		this.bounced = true;
		this.bounceTimeout = 3;
	}

	onCollision(obj) {
		super.onCollision(obj);
		console.log('Boink!');
	}
}
