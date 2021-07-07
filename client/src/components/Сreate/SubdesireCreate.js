import { reqDesireCreate, reqSubdesireCreate } from "../../actions";
import { FormItem, Input, Button, Div } from "@vkontakte/vkui";
const { React, useState, useEffect } = require("react");

export default function SubdesireCreate(props) {
  const [name, setName] = useState("Название подмечты");
  const genres = ["Годовой", "Недельный", "Навсегда"];

  useEffect(() => {}, []);

  const subdesireCreate = async () => {
    await reqSubdesireCreate(props.desire.id, name).then((res) => {
      console.log("activePanel", res);
      props.setActivePanel("desirePanel");
    });
  };

  return (
    <div>
      <FormItem top="Название">
        <Input
          type="text"
          placeholder="Mercedes AMG Turbo"
          onChange={(e) => setName(e.target.value)}
        />
      </FormItem>
      <Div>
        {props.activePanel}
        <Button
          onClick={() => subdesireCreate()}
          size="l"
          stretched
          style={{ marginRight: 8 }}
        >
          Создать
        </Button>
      </Div>
    </div>
  );
}
