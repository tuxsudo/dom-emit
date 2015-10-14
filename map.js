import emitter from './lib/core.js';

export default function(evName, data) {
	return elm=>emitter(elm, evName, data);
};
