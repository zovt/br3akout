import * as three from 'three';
import Hitbox from './Hitbox.js';

export default class GameObject extends three.Object3D {
	constructor(mesh) {
		super();
		
		this.mesh = mesh;
		this.add(mesh);

		this.hitbox = new Hitbox(this);
		this.add(this.hitbox.boundingBox);
	}
}
