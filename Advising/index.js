const message = document.getElementById('message');

message.value = 'line one' + '\r\n' + 'line two' + '\r\n' + 'line three';

/**
 * line one
 * line two
 * line three
 */
console.log(message.value);