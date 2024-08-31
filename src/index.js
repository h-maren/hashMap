import './style.css';
import { HashMap } from './hashMap.js';

const test = new HashMap() // or HashMap() if using a factory
test.set('apple', 'red');
console.log(test);

console.log(test.get('apple'))
console.log(test.get('blueberry'));

console.log(test.has('apple'));
console.log(test.has('blueberry'))

test.set('banana', 'yellow');
console.log(test);
console.log(test.has('apple'));
console.log(test.has('cat'));



console.log(test.length());
//test.clear();
console.log(test);
//test.set('apple','red');