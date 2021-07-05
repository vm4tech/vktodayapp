import { reqDesireCreate } from "../../actions";
import {
  FormItem,
  Input,
  Button,
  Textarea,
  Select,
  Div,
} from "@vkontakte/vkui";
const { React, useState, useEffect } = require("react");

export default function DesireCreate(props) {
  const [description, setDescription] = useState(
    "ну короче надо около 250к золотых..."
  );
  const [name, setName] = useState("Название мечты");
  const genres = ["Годовой", "Недельный", "Навсегда"];
  const [genre, setGenre] = useState(genres[0]);

  useEffect(() => {}, []);

  const desireCreate = async (value) => {
    await reqDesireCreate(name, description, genre).then((res) => {
      // props.setAddDesire(res);
    });
    props.setActivePanel(value);
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
      <FormItem top="Описание">
        <Textarea
          placeholder="Описание"
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormItem>
      {props.activePanel === "desireCreate" ? (
        <FormItem top="Жанр">
          <Select
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            options={genres.map((genre) => ({ label: genre, value: genre }))}
          />
        </FormItem>
      ) : null}
      <Div>
        {props.activePanel}
        <Button
          onClick={() => desireCreate("all")}
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
