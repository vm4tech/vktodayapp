import reqCreateDesire, {reqCreateSubdesire} from "../actions"
import { 
    FormItem,
    Input,
    Button,
    Textarea,
    Select, 
    Div
} from "@vkontakte/vkui";
const { React, useState } = require("react");



export default function CreateDesire (props){
    const user = props.user
    const [description, setDescription] = useState("ну короче надо около 250к золотых...");
    const [name, setName] = useState("Название мечты")
    const genres = [
        "Годовой",
        "Недельный",
         "Навсегда"]
    const [genre, setGenre] = useState(genres[0]);
    
    const createDesire = async() => {
        console.log("USER:ID ", user.id)
        await reqCreateDesire(user.id, name, description, genre).then(res => {
            props.setAddDesire(res);
        })
        props.setActivePanel("services")
      };
    const createSubDesire = async() => {
        console.log("USER:ID for subdesire ", user.id)
        await reqCreateSubdesire(user.id, name, props.desire.id).then(res => {
            props.setAddDesire(res);
        })
        props.setActivePanel("desire_panel")
    }

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
        <Div>
            {props.activePanel}
            <Button onClick={e  =>  {
                    if (props.activePanel == "create_desire")
                        createDesire();
                    else 
                        createSubDesire();
                }} size="l" stretched style={{ marginRight: 8 }}>Создать</Button>
        </Div>
        </div>

    )
}