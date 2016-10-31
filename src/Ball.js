import * as three from 'three';

import GameObject from './GameObject.js';

export default class Ball extends GameObject {
	constructor(x, y, radius, color) {
		const geometry = new three.CircleGeometry(radius, 50);
		const material = new three.MeshBasicMaterial({ color });
		super(new three.Mesh(geometry, material));

		this.position.set(x, y, 0);

		this.initDisplacemetVector();
	}

	initDisplacemetVector() {
		this.displacementVector = new three.Vector3(0, -1, 0);
		this.displacementVector.multiplyScalar(3);
	}

	update() {
		this.position.add(this.displacementVector);
	}
}
