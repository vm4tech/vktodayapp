// TODO: Решить что делать с разграничением сервисов на 1 домене
// TODO: Сверстать нормальную начальную страницу для каждого пользователя
// TODO: Попробовать заполнять желания и вытягивать их
//  КАЖДЫЙ РАЗ ОТПРАВЛЯТЬ СТРОЧКУ С ДАННЫМИ SIGN B И.т.п???!?!?

export function reqCheckParams(params) {
  const body = {params}
      return fetch("http://localhost:5000/checkparams", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      .then(res => res.json())
      .then(
        (result) => {
          // console.log("RESULT: ", result)
          return result;
        },
        (error) => {
          return error;
        }
      )
}

export function reqCreateUser(vk_id, name, firstname) {
    const body = {vk_id, name, firstname}
        return fetch("http://localhost:5000/createuser", {
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
  const body = {vk_id, name, description, genre}
    return fetch("http://localhost:5000/createdesire", {
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
