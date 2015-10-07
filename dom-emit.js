let emitter = (element, evName, data) => element.dispatchEvent(new CustomEvent(evName, { bubbles: true, detail: data })),
	doEmit = (evName, data) => emitter(window, evName, data);


doEmit.from = emitter;


(function () {

	// only pollyfill when CustomEvent isn't a constructor, Ahem IE
	if(typeof window.CustomEvent === "function") { return; }

	function CustomEvent ( event, params = { bubbles: false, cancelable: false, detail: undefined } ) {
    	var evt = document.createEvent( 'CustomEvent' );
    	evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    	return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;

})();



export default doEmit;
