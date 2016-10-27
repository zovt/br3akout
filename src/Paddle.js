import three from 'three';

export default class Paddle {
	constructor(yOffset) {
		this.position = new THREE.Vector2(0, yOffset);
	}
}
