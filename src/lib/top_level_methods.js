export function w (words, options={}) {
  let delimeter = options.delimeter || ' ';
  let wordsArray = words.split(delimeter);

  return wordsArray;
}

export var puts = console.log; // eslint-disable-line no-console
