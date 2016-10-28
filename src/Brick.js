import * as three from 'three';
import Hitbox from './Hitbox.js';

export default class Brick {
	constructor(x, y, width, height, color) {
		this.position = { x, y };
		this.dimensions = { width, height };
		this.color = color;
		this.createMesh();
		this.createHitbox();
	}

	createMesh() {
		const geometry = 
			new three.PlaneGeometry(this.dimensions.width, this.dimensions.height, 1, 1);
		const material = new three.MeshBasicMaterial({ color: this.color });
		this.mesh = new three.Mesh(geometry, material);
	}

	createHitbox() {
		this.hitbox = new Hitbox(this.position.x, this.position.y,
				this.dimensions.width, this.dimensions.height);
	}
}
