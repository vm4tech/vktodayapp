import { Icon24Add, Icon28MessageOutline } from "@vkontakte/icons";
import {
  Avatar,
  CellButton,
  Group,
  Header,
  Placeholder,
} from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { reqGetDesires } from "../../../actions";
import BannerDesire from "./BannerDesire";

export default function All(props) {
  // const setActivePanel = props.setActivePanel;
  const [desires, setDesires] = useState([]);
  const create = (value) => props.setActivePanel(value);
  useEffect(() => {
    async function requests() {
      await reqGetDesires().then((res) => setDesires([...res]));
    }
    requests().then((res) => console.log("res", desires));
  }, []);

  useEffect(() => {
    // чтобы обновлялся комопонет при получении desires
    console.log("rerender");
  }, [desires]);
  return (
    <>
      <Group header={<Header>Ближайшие</Header>}>
        <CellButton
          onClick={() => create("desireCreate")}
          centered
          before={
            <Avatar shadow={false} size={40}>
              <Icon24Add />
            </Avatar>
          }
        >
          Добавить желание
        </CellButton>
        {desires.length !== 0 ? (
          desires.map((des) => (
            <BannerDesire
              setDesire={props.setDesire}
              desire={des}
              setActivePanel={props.setActivePanel}
            />
          ))
        ) : (
          <Placeholder
            header="Кажется, у вас пусто между ног..."
            icon={<Icon28MessageOutline width={56} height={56} />}
          />
        )}
      </Group>
    </>
  );
}
