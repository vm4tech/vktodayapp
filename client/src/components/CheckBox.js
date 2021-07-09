import React, { useEffect, useState } from "react";
import { reqSetSuccessSubdesire } from "../actions";
import { SimpleCell, IconButton, Avatar, Cell } from "@vkontakte/vkui";
import { Checkbox } from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import { Icon16MoreVertical } from "@vkontakte/icons";

export default function CheckBox(props) {
  const [subdesire, setSubdesire] = useState();
  const index = props.index;
  const item = props.item;

  function changeSub() {
    item.success = !item.success;
    console.log("sub", item);
    reqSetSuccessSubdesire(item);
    setSubdesire(Object.assign({}, item));
  }

  useEffect(() => {
    console.log("rerender", item);
  }, [changeSub]);

  //   return (
  //     <SimpleCell
  //       after={
  //         <IconButton aria-label="Подробнее">
  //           <Icon16MoreVertical />
  //         </IconButton>
  //       }
  //     >
  //       <Checkbox checked={subdesire.success} onChange={(e) => changeSub()}>
  //         {subdesire.name}
  //       </Checkbox>
  //     </SimpleCell>
  //   );
  return (
    <Cell
      selectable
      //   selected={item.success}
      checked={item.success}
      onChange={() => changeSub()}
      key={item}
      removable
      onRemove={() => {
        props.removeSubdesire(index);
      }}
    >
      {item.name}
    </Cell>
  );
}
