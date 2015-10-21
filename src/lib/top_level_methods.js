export function w (words, options={}) {
  let delimeter = options.delimeter || ' ';
  let wordsArray = words.split(delimeter);

  return wordsArray;
}
