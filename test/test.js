import emit from '../dom-emit.js';


document.addEventListener('DOMContentLoaded', ()=>{

	var hud = document.querySelector('.hud'),
		windowEmitter = document.querySelector('.window-emitter'),
		elementEmitter = document.querySelector('.element-emitter');


	windowEmitter.nextElementSibling.addEventListener('click', ()=> {
		emit.from(windowEmitter, 'my-custom-event', `from window: ${windowEmitter.value}`);
	});

	elementEmitter.nextElementSibling.addEventListener('click', ()=> {
		emit.from(elementEmitter, 'my-custom-event', `from element: ${elementEmitter.value}`);
	});

	window.addEventListener('my-custom-event', e=>hud.innerHTML = `${hud.innerHTML}\n${e.detail}`);


});
