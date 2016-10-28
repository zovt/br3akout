import Paddle from './Paddle.js';
import GraphicsSystem from './GraphicsSystem.js';
import Ball from './Ball.js';

function main() {
	const graphics = new GraphicsSystem(document.getElementById('main'));
	graphics.mount();
	const ball = new Ball(0, 0, 100, 0xFF00FF);
	graphics.addToScene(ball);
	graphics.render();
}

main()
