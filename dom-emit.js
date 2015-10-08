import pollyfill from 'polyfill-custom-event';


let emitter = (element, evName, data) => element.dispatchEvent(new CustomEvent(evName, { bubbles: true, detail: data })),
	emit = (evName, data) => emitter(window, evName, data);


emit.from = emitter;


export default emit;
