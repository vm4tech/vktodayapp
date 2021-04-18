import reqCreateDesire from "../actions"
const { React, useState } = require("react");
const { FormItem, Input, Button, Textarea, Select, CustomSelectOption} = require("@vkontakte/vkui");


export default function CreateDesire (props){
    const user = props.user
    const [description, setDescription] = useState("ну короче надо около 250к золотых...");
    const [name, setName] = useState("Название мечты")
    const genres = [
        "Годовой",
        "Недельный",
         "Навсегда"]
    const [genre, setGenre] = useState(genres[0]);
   
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
        await reqCreateDesire(user.id, name, description, genre).then(res => {
            response = res;
            console.log(response)
        })
        //  setId([...response]);
         console.log("И ЭТО...", response);
      };

    return(
        <div>
        <FormItem top="Название">
            {/* <Input type="text" placeholder="vk_id (потом автоматом)" onChange = {e => setVk_id(e.target.value)} /> */}
            <Input type="text" placeholder="Mercedes AMG Turbo" onChange = {e => setName(e.target.value)} />
        </FormItem>
        <FormItem top="Описание">
            <Textarea placeholder="Описание" onChange = {e => setDescription(e.target.value)} />
        </FormItem>
        <FormItem top="Жанр">
            {/* <Input type="text" placeholder="Жанр мечты" onChange = {e => setGenre(e.target.value)} /> */}
                <Select
                  onChange={e => setGenre(e.target.value)} 
                  value={genre}
                  options={genres.map(genre => ({label: genre, value: genre }) )} 
                />
        </FormItem>
            <Button onClick={e  =>  createDesire()} size="l" stretched style={{ marginRight: 8 }}>Создать</Button>
        
         {/* {id.map((id) => <p> id from request: {id}</p> )}  */}
        </div>

    )
}