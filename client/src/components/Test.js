import reqTestReq from "../actions"
const { React, useState } = require("react");
const { FormItem, Input, Button, File, Banner, ContentCard} = require("@vkontakte/vkui");
const {Icon24Document} = require("@vkontakte/icons")


function Test (){

    const [vk_id, setVk_id] = useState("1");
    const [name, setName] = useState("Влад");
    const [firstname, setFirstname] = useState("Молотков");


    const testReq = () => {
      let result = reqTestReq(vk_id, name, firstname);
      console.log(result);
      // setName(result.name);
    };

    return(
        <FormItem top="Тестовый стенд">
            <Input type="text" defaultValue="1" onChange = {e => setVk_id(e.target.value)} />
            <Input type="text" defaultValue="Влад" onChange = {e => setName(e.target.value)} />
            <Input type="text" defaultValue="Молотков" onChange = {e => setFirstname(e.target.value)} />
            <Button onClick={() => testReq()} size="l" stretched style={{ marginRight: 8 }}>Создать</Button>
            Имя индивида: {name}
        </FormItem>

    )
}
export default Test; 