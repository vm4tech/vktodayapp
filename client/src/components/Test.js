import reqCreateDesire from "../actions"
import {reqCreateUser} from "../actions"
const { React, useState } = require("react");
const { FormItem, Input, Button} = require("@vkontakte/vkui");


function Test (){
    // const [id, setId] = useState([]);
    const [vk_id, setVk_id] = useState("0");
    const [name, setName] = useState("Влад");
    const [firstname, setFirstname] = useState("Молотков");
    const [description, setDescription] = useState("ну короче надо около 250к золотых...");
    const [genre, setGenre] = useState("Годовалый");


    const createUser = () => {
        let result = reqCreateUser(vk_id, name, firstname);
        console.log(result);
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
            
            <Button style={{color: "#000000",  marginRight: 8 }} onClick={() => createUser()} size="l" >Создать</Button>
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