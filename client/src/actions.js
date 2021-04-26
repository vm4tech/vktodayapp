// TODO: Решить что делать с разграничением сервисов на 1 домене
// TODO: Сверстать нормальную начальную страницу для каждого пользователя
//  КАЖДЫЙ РАЗ ОТПРАВЛЯТЬ СТРОЧКУ С ДАННЫМИ SIGN B И.т.п???!?!?
// const url = "http://localhost:5000"
const url = "https://3da2266f31d0.ngrok.io"
let authParams = "ha, gayyyyyy"

export function reqCheckParams(params) {
  const body = {"authParams":params}
  console.log("body:". body)
  authParams = params;
      return fetch(url + "/checkparams", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          console.log("RESULT: ", result)
          return result;
        },
        (error) => {
          console.log("ERR:", error)
          return error;
        }
      )
}

export function reqCreateUser(vk_id, name, firstname) {
    const body = {authParams, vk_id, name, firstname}
        return fetch(url +"/createuser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          })
        .then(res => res.json())
        .then(
          (result) => {
            console.log("typeof" ,typeof(result));
            return result;
          },
          (error) => {
            console.log(error);
            return error;
          }
        )
}

export default function reqCreateDesire(vk_id, name, description, genre) {
  const body = {authParams, vk_id, name, description, genre}
    return fetch(url + "/createdesire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      )
}

export function reqDeleteDesire(vk_id, desire) {
  const body = {authParams, vk_id, desire}
    return fetch(url + "/deletedesire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      )
}

export function reqCreateSubdesire(vk_id, name, desire_id) {
  const body = {authParams, vk_id, name, desire_id}
    return fetch(url + "/createsubdesire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      )
}

export function reqGetDesires(vk_id) {
  const body = {authParams, vk_id}
      return fetch(url +"/getdesires", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          console.log("rsult:", result);
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      )
}

export function reqGetSubDesires( desire) {
  const body = {authParams, desire}
      return fetch(url +"/getsubdesires", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      )
}