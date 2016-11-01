import * as three from 'three';
import Hitbox from './Hitbox.js';
import transformationMatrix from './TransformationMatrix.js';

export default class GameObject extends three.Object3D {
	constructor(mesh) {
		super();
		
		this.mesh = mesh;
		this.add(mesh);

		this.hitbox = new Hitbox(this);
		this.add(this.hitbox.boundingBox);
	}

	update() {
		this.hitbox.update();
		return this;
	}

	checkCollision(obj) {
		if (this.hitbox.checkCollision(obj.hitbox)) {
			this.hitbox.setColliding();
			obj.hitbox.setColliding();
			this.onCollision(obj);
			obj.onCollision(this);
		}
	}

	onCollision(obj) {
		return this;
	}
}
