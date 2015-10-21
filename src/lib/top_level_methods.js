export var puts = console.log; // eslint-disable-line no-console

export function w (words, options={}) {
  let delimiter = options.delimiter || ' ';
  let wordsArray = words.split(delimiter);

  return wordsArray;
}

export var percent_w = w;
