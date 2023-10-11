const EventEmitter = require('events');

const customEmitter = new EventEmitter();

setTimeout(() => {
    customEmitter.emit('timer', 'requesting data from user')
}, 1000)

customEmitter.on('timer', (msg) => {console.log(msg)} )