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
}
