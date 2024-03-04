function requied(val: string) {
  return !(!val || typeof val === 'undefined' || (typeof val === 'string' && !val.trim().length));
}

function validLink(val: string) {
  const regex = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );
  return !!(requied(val) && regex.test(val));
}
function specialCharactor(val: string) {
  const regex = new RegExp(/^[^a-zA-Z0-9]+$/);
  return !!(requied(val) && regex.test(val));
}

function userName(val: string) {
  // const regex = new RegExp(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
  // const regex = new RegExp(
  //     /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
  // )
  const regex = new RegExp(/[a-zA-Z0-9!@#$%^&*()-_+={}[\]/,.?"':;|<>~`]$/);

  return !!(requied(val) && regex.test(val));
}
// function mobile(val: string) {
//   const regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
//   return !!(requied(val) && regex.test(val));
// }
function mobile(PhoneNumber: string, countryCode = '+91', regex = /^\d{10}$/): boolean {
  const test = PhoneNumber?.split(countryCode)[1];
  return regex.test(test);
}

function instagramUserName(val: string) {
  const regex = new RegExp(/^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/);
  return !!(requied(val) && regex.test(val));
}
function youtubeUserName(val: string) {
  const regex = new RegExp(/(www)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/);
  return !!(requied(val) && regex.test(val));
}
// /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

function domainName(val: string) {
  const regex = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );
  return !!(requied(val) && regex.test(val));
}

function email(val: string) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!(requied(val) && regex.test(val));
}

function nameAlpha(val: string) {
  const regex = /^[A-Za-z]+$/;
  return !!(requied(val) && regex.test(val));
}

function link(val: string) {
  const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return !!(requied(val) && regex.test(val));
}

function password(val: string) {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  return !!(requied(val) && regex.test(val));
}

function numberVlaue(val: string) {
  const regex = /^[0-9]/;
  return !!(requied(val) && regex.test(val));
}
const validation = {
  requied,
  userName,
  email,
  link,
  instagramUserName,
  youtubeUserName,
  domainName,
  validLink,
  password,
  mobile,
  nameAlpha,
  numberVlaue,
  specialCharactor,
};

export default validation;
