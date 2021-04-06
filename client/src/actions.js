// TODO: Решить что делать с разграничением сервисов на 1 домене
// TODO: Перенести сервер и клиент на разные репозитории 
// TODO: Сверстать нормальную начальную страницу для каждого пользователя
// TODO: Попробовать заполнять желания и вытягивать их
export default function reqTestReq(vk_id, name,firstname) {
    const body = {vk_id, name, firstname}
        fetch("http://localhost:5000/createuser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            return result;
          },
          (error) => {
            console.log(error);
            return error;
          }
        )
}