import CookieService from "./CookieService";

function getCookie(n, type)
{
  return CookieService.get('answer_' + type + '_' + n)
}

function addToAnswer(json, n, value,type) {
  console.log("add to answer function");
  console.log(n);
  console.log(value);
  console.log(type);
  const options = {path :"/"};
  CookieService.set('answer_' + type + '_' + n, value,options);
  //window.sessionStorage.setItem('answer_' + type + '_' + n, value);
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
    console.log("if add to retete");
    json.push(recipe);
  } else {
    console.log('else add to retete');
    json = [recipe];
  }

  //console.log(json);
  return json;
}

export {addToAnswer, addToRetete, getCookie}
