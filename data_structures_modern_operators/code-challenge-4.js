'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
const textArea = document.querySelector('textarea');

const transformText = function () {
  const lines = textArea.value.split('\n');
  const len = Math.max(...lines.map(el => el.length)) + 3;
  for (const [key, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');
    const transformedLine =
      first + second.replace(second[0], second[0].toUpperCase());

    console.log(transformedLine.padEnd(len) + '✅'.repeat(key + 1));
  }
};

btn.addEventListener('click', transformText);
