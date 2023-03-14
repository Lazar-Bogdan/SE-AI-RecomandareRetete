
function addToAnswer(json, n, value) {
  if (!json.hasOwnProperty("answer_"+n)) {  // if key doesn't exist
    json["answer_"+n] = [value];  // create key with new array containing value
  } else {
    json["answer_"+n].push(value);  // add value to existing array associated with key
  }
  return json;
}

export {addToAnswer}
