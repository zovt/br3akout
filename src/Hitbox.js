import * as three from 'three';

export default class Hitbox extends three.Box3 {
	constructor(obj) {
		super();

		this.setFromObject(obj);

		this.boundingBox = new three.BoxHelper(this);
	}
}
