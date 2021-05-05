export default class EventManager {
    events = new Map();

    on(event, handler) {
        if (this.events.has(event)) {
            this.events.get(event).add(handler);
        } else {
            this.events.set(event, new Set([handler]));
        }
    }

    off(event, handler) {
        this.events.get(event)?.delete(handler);
    }

    emit(event, arg) {
        this.events.get(event)?.forEach(handler => handler(arg));
    }
}