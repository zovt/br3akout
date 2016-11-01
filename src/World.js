import * as three from 'three';

import Paddle from './Paddle.js';
import Ball from './Ball.js';
import Wall from './Wall.js';
import Brick from './Brick.js';

export default class World extends three.Object3D {
	constructor(x, y, width, height, events) {
		super();
		this.position.set(x, y, 0);
		this.width = width;
		this.height = height;

		this.initBall();
		this.initPaddle();
		this.initWalls();
		this.initBricks();

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

	initWalls() {
		const leftWall = new Wall(-25, this.height / 2, 50, this.height);
		const rightWall = new Wall(this.width + 25, this.height / 2, 50, this.height);
		const topWall = new Wall(this.width / 2, this.height + 25, this.width, 50);

		this.walls = [leftWall, rightWall, topWall];
		this.walls.forEach(wall => this.add(wall));
	}

	initBricks() {
		this.bricks = new Set();
		const brickWidth = this.width / 15;
		const brickHeight = 20;

		let row = 0;
		let col = 0;
		for (let i = 0; i < 150; i++) {
			const brick = new Brick(col * brickWidth + brickWidth / 2,
					this.height - (row * brickHeight + brickHeight / 2),
					brickWidth, brickHeight, Math.random() * Math.pow(255, 3) 
					+ Math.random() * Math.pow(255, 2) + Math.random() * 255,
					this.removeBrick.bind(this));

			console.log(brick);
			this.bricks.add(brick);
			this.add(brick);

			col += 1;
			if (col === 15) {
				col = col % 15;
				row += 1;
			}
		}
	}

	removeBrick(brick) {
		this.bricks.delete(brick);
		this.remove(brick);
	}

	registerEvents(events) {
		events.registerDOMEvent('mousemove', this.setMousePosition);
	}

	setMousePosition(ev) {
		this.paddle.setMousePosition(ev.clientX, this.height - ev.clientY);
	}

	checkCollisions() {
		this.ball.checkCollision(this.paddle);
		this.walls.forEach(wall => this.ball.checkCollision(wall));
		this.bricks.forEach(brick => this.ball.checkCollision(brick));
	}

	update() {
		this.checkCollisions();
		this.children.forEach(c => c.update());
	}
}
