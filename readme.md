# DOM Emit

A micro-lib (es6 module) for emitting custom events in the DOM. For modern browsers and IE9+

	import emit from './dom-emit.js';

	emit('my-event-name');



## Usage

### `emit('my-event-name')`

Emits a custom event named `my-event-name` from the `window` object.


### `emit('my-event-name', detail)`

Emits a custom event named `my-event-name` from the `window` passing along data in the `detail` variable.

	emit('my-event', {food: 'pizza'});



### `emit.from(elm, 'my-event-name')`

Emits a bubbling custom event named `my-event-name` from element `elm`.

	emit.from(document.querySelector('.my-element'), 'my-event-name');


### `emit.from(elm, 'my-event-name', detail)`

Emits a bubbling custom event named `my-event-name` from element `elm` passing along data in the `detail` variable.

	emit.from(document.querySelector('.my-element'), 'my-event', {food: 'pizza'});



## Listening

Listening for events happens via standard event-listeners.

	window.addEventListener('my-event', function(e) {

		//true if emitted from window.
		e.target===window;

		// true if emmited via `emit.from()`
		e.target===document.querySelector('.my-element');

		// contains any data that passed along
		console.log(e.detail);
	}
