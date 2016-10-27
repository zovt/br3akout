import Paddle from './Paddle.js';
import GraphicsSystem from './GraphicsSystem.js';

function main() {
	const graphics = new GraphicsSystem(document.getElementById('main'));
	graphics.mount();
	graphics.render();
}

main()
