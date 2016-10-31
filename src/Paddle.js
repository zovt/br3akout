import * as three from 'three';

import GameObject from './GameObject.js';

export default class Paddle extends GameObject {
	constructor(x, yOffset) {
		const geometry = new three.PlaneGeometry(50, 10);
		const material = new three.MeshBasicMaterial({ color: 0xFF00FF });
		super(new three.Mesh(geometry, material));

		this.position.set(x, yOffset, 0);
	}
}
