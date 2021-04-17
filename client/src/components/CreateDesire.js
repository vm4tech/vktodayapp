import reqCreateDesire, {reqCreateUser} from "../actions"
const { React, useState } = require("react");
const { FormItem, Input, Button} = require("@vkontakte/vkui");


export default function CreateDesire (props){
    const user = props.user
    const [description, setDescription] = useState("ну короче надо около 250к золотых...");
    const [genre, setGenre] = useState("Годовалый");
    console.log("user, GSSS",user)


   
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
        console.log("USER:ID ", user.id)
        await reqCreateUser(user.id, user.first_name, user.last_name).then(res => console.log(res));
        await reqCreateDesire(user.id, user.first_name, description, genre).then(res => {
            response = res;
            console.log(response)
        })
        //  setId([...response]);
         console.log("И ЭТО...", response);
      };

    return(
        <div>
        <FormItem top="Создание мечты">
            {/* <Input type="text" placeholder="vk_id (потом автоматом)" onChange = {e => setVk_id(e.target.value)} /> */}
            {/* <Input type="text" placeholder="Название" onChange = {e => setName(e.target.value)} /> */}
            <Input type="text" placeholder="Описание" onChange = {e => setDescription(e.target.value)} />
            <Input type="text" placeholder="Жанр мечты" onChange = {e => setGenre(e.target.value)} />
            <Button onClick={e  =>  createDesire()} size="l" stretched style={{ marginRight: 8 }}>Создать</Button>
        </FormItem>
         {/* {id.map((id) => <p> id from request: {id}</p> )}  */}
        </div>

    )
}