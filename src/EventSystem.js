export default class EventSystem {
	constructor(el) {
		this.el = el;
		this.events = new Map();
	}

	addListener(eventName, callback) {
		if (!this.events.has(eventName)) {
			this.events.set(eventName, []);
		}

		this.events.get(eventName).push(callback);
	}

	emitEvent(eventName, data) {
		this.events.get(eventName).forEach(cb => cb(data));
	}

	registerDOMEvent(eventName, callback) {
		this.el.addEventListener(eventName, callback);
	}
}



