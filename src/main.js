import GraphicsSystem from './GraphicsSystem.js';
import EventSystem from './EventSystem.js';
import World from './World.js';

function main() {
	const el = document.getElementById('main');
	const graphics = new GraphicsSystem(el);
	graphics.mount();

	const events = new EventSystem(el);

	const world = new World(0, 0, el.clientWidth, el.clientHeight, events);

	graphics.addToScene(world);

	function loop() {
		requestAnimationFrame(loop);
		graphics.render();
		world.update();
	}

	loop();
}

main()
