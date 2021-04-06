import reqCreateDesire from "../actions"
import {reqCreateUser} from "../actions"
const { React, useState, useEffect } = require("react");
const { FormItem, Input, Button, File, Banner, ContentCard} = require("@vkontakte/vkui");
const {Icon24Document} = require("@vkontakte/icons")


function Test (){
    const [id, setId] = useState([]);
    const [vk_id, setVk_id] = useState("0");
    const [name, setName] = useState("Влад");
    const [firstname, setFirstname] = useState("Молотков");
    const [description, setDescription] = useState("ну короче надо около 250к золотых...");
    const [genre, setGenre] = useState("Годовалый");


    const createUser = () => {
        let res = [32,8];
        let result = reqCreateUser(vk_id, name, firstname);
        console.log(result);
        console.log("ID:", id);
    };

    // const createDesire = () => {
    //     let response;
    //     reqCreateDesire(vk_id, name, description, genre).then(res => {
    //         response = res;
    //     })
    //     .then(() => setId(response))
    //     .then(() => console.log("И ЭТО...", response));
    //   };

    const createDesire = async() => {
        let response;
        await reqCreateDesire(vk_id, name, description, genre).then(res => {
            response = res;
            console.log(response)
        })
        //  setId([...response]);
         console.log("И ЭТО...", response);
      };

    return(
        <div>
        <FormItem top="Создание пользователя">
            <Input type="text" placeholder="vk_id" onChange = {e => setVk_id(e.target.value)} />
            <Input type="text" placeholder="name" onChange = {e => setName(e.target.value)} />
            <Input type="text" placeholder="firstname" onChange = {e => setFirstname(e.target.value)} />
            <Button onClick={() => createUser()} size="l" stretched style={{ marginRight: 8 }}>Создать</Button>
            Имя индивида: {name}
        </FormItem>
        <FormItem top="Создание мечты">
            <Input type="text" placeholder="vk_id (потом автоматом)" onChange = {e => setVk_id(e.target.value)} />
            <Input type="text" placeholder="Название" onChange = {e => setName(e.target.value)} />
            <Input type="text" placeholder="Описание" onChange = {e => setDescription(e.target.value)} />
            <Input type="text" placeholder="Жанр мечты" onChange = {e => setGenre(e.target.value)} />
            <Button onClick={e  =>  createDesire()} size="l" stretched style={{ marginRight: 8 }}>Создать</Button>
        </FormItem>
         {/* {id.map((id) => <p> id from request: {id}</p> )}  */}
        </div>

    )
}
export default Test; 