
function addToAnswer(json, n, value) {
  if (!json.hasOwnProperty("answer_"+n)) {  // if key doesn't exist
    json["answer_"+n] = value;  // create key with new array containing value
  } else {
    json["answer_"+n].push(value);  // add value to existing array associated with key
  }
  return json;
}

function addToRetete(json, n, Nume,Ingrediente,Prepare, IMG) {
  console.log("addToRetete fcuntion");
  console.log(json);
  console.log(n);
  console.log(Ingrediente);
  console.log(Prepare);
  console.log(IMG);

  let recipe = {
    id_ : n,
    Nume_: Nume,
    Ingrediente_: Ingrediente,
    Prepare_: Prepare,
    IMG_: IMG
  };

  if (Array.isArray(json)) {
    json.push(recipe);
  } else {
    json = [recipe];
  }

  console.log(json);
  return json;
}

export {addToAnswer, addToRetete}
