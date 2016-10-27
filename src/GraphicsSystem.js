import * as three from 'three';

export default class GraphicsSystem {
	constructor(el) {
		this.container = el;

		this.scene = new three.Scene();
		this.scene.add(new three.AxisHelper(500));

		this.updateRenderer();
		this.updateCamera();
	}

	updateRenderer() {
		if (this.renderer === undefined) {
			this.renderer = new three.WebGLRenderer({ antialias: true });
		}

		this.renderer.setSize(this.container.clientWidth,
				this.container.clientHeight);
		console.log(this.container);
	}

	updateCamera() {
		this.camera = 
			new three.OrthographicCamera(this.container.clientWidth / -2,
					this.container.clientWidth / 2, this.container.clientHeight / 2,
					this.container.clientHeight / -2, 1, 1000);

		this.camera.position.set(0, 0, 500);
	}

	mount() {
		this.container.appendChild(this.renderer.domElement);
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	addToScene(renderable) {
		this.scene.add(renderable);
	}
}

