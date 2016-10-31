import * as three from 'three';

import Paddle from './Paddle.js';
import Ball from './Ball.js';

export default class World extends three.Object3D {
	constructor(x, y, width, height, events) {
		super();
		this.position.set(x, y, 0);
		this.width = width;
		this.height = height;
		this.initBall();
		this.initPaddle();
		// this.initBlocks();

		this.setMousePosition = this.setMousePosition.bind(this);
		this.registerEvents(events);
	}

	initBall() {
		this.ball = new Ball(this.width / 2, this.height / 2, 5, 0x00FF00);
		this.add(this.ball);
	}

	initPaddle() {
		this.paddle = new Paddle(this.width / 2, 40);
		this.add(this.paddle);
	}

	registerEvents(events) {
		events.registerDOMEvent('mousemove', this.setMousePosition);
	}

	setMousePosition(ev) {
		this.paddle.setMousePosition(ev.clientX, this.height - ev.clientY);
	}

	update() {
		this.ball.update();
		this.paddle.update();
	}
}
