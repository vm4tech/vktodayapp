import { Icon24Add } from "@vkontakte/icons";
import { Avatar, CellButton, Group, Header } from "@vkontakte/vkui";
import React from "react";

export default function All(props) {
  // const setActivePanel = props.setActivePanel;
  const create = (value) => props.setActivePanel(value);
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
      </Group>
    </>
  );
}
