// TODO: Решить что делать с разграничением сервисов на 1 домене
// TODO: Сверстать нормальную начальную страницу для каждого пользователя
//  КАЖДЫЙ РАЗ ОТПРАВЛЯТЬ СТРОЧКУ С ДАННЫМИ SIGN B И.т.п???!?!?
// const url = "http://localhost:5000"
const url = "https://eb095dcc7685.ngrok.io";
let authParams = "ha, gayyyyyy";

export default function reqCheckParams(params) {
  const body = { authParams: params };
  console.log("body:".body);
  authParams = params;
  return fetchCustom("/checkparams", body);
}

export function reqCreateUser(vk_id, name, firstname) {
  const body = { authParams, vk_id, name, firstname };
  return fetchCustom("/createuser", body);
}

export function reqDesireCreate(name, description, genre) {
  const body = { authParams, name, description, genre };
  console.log("BODY:", body);
  return fetchCustom("/desireCreate", body);
}

export function reqGetDesires() {
  const body = { authParams };
  return fetchCustom("/getDesires", body);
}

export function reqSubdesireCreate(desire_id, name, description, genre) {
  const body = { authParams, desire_id, name, description, genre };
  return fetchCustom("/subdesiresCreate", body);
}

export function reqGetSubdesires(desire) {
  const body = { authParams, desire };
  return fetchCustom("/getSubdesires", body);
}

export function reqDeleteDesire(desire) {
  const body = { authParams, desire };
  return fetchCustom("/deleteDesire", body);
}

export function reqSetSuccessSubdesire(sub) {
  let desire_id = sub.desire_id;
  let id = sub.id;
  let success = sub.success;
  const body = { authParams, desire_id, id, success };
  return fetchCustom("/setSuccessSubdesire", body);
}
export function reqDeleteSubdesire(subdesire) {
  let desire_id = subdesire.desire_id;
  let id = subdesire.id;
  const body = { authParams, desire_id, id };
  return fetchCustom("/deleteSubdesire", body);
}

function fetchCustom(paramUrl, body) {
  return fetch(url + paramUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("ANSWER: ", { typeof: typeof result, result });
        return result;
      },
      (error) => {
        console.log(error);
        return error;
      }
    );
}
