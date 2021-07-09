import React, { useState, useEffect } from "react";
import {
  Div,
  Gallery,
  Group,
  Title,
  CellButton,
  FormItem,
  List,
  Cell,
} from "@vkontakte/vkui";
import {
  reqDeleteDesire,
  reqDeleteSubdesire,
  reqGetSubdesires,
} from "../../../actions";
import { Icon24Add } from "@vkontakte/icons";
import CheckBox from "../../CheckBox";
let urls = [
  "https://www.mercedes-benz.ru//passengercars/mercedes-benz-cars/models/amg-gt/coupe-c190/design/model-comparison/_jcr_content/comparisonslider/par/comparisonslide_379682962/exteriorImage.MQ6.12.20200831120232.jpeg",
  "https://www.erikastravelventures.com/wp-content/uploads/2018/10/IMG_6858-e1540290382435.jpg",
  "https://sun9-58.userapi.com/impg/vWmU4RE9UV7JhdF8n-ZC2UNJtgFq3wFdtR-iZg/obs_dYEPHkA.jpg?size=1600x1060&quality=96&sign=d6df7f014bd21d1522392392b03524bf&type=album",
  "https://sun9-58.userapi.com/impg/KH7eV4KH1o8BefYZUgZGL7NnefMaTLNfB52jQA/09XbTS6OOT0.jpg?size=1200x1600&quality=96&sign=76fabe9a7f2bebaf31696ad32f8bd37d&type=album",
];
/*TODO:
 ** (можно, но нужно ли?) 1. Посмотреть, что можно сделать с шевроном (стрелочкой), т.к. при использовании background она не показывается (слой находится выше, чем стрелка).
 * 2. Подумать над затемнением при наведении.
 **(надо сделать оптимизацию и вообще загрузку фото) 3. Подумать над качеством импортируемого изображения (т.к. при большом размере она долго прогружается)
 * 4. Посмотреть на счет округления и расположения изображения (над созданием пользователя)
 */

export default function DesirePanel(props) {
  //   useEffect(() => {
  //     async function requests() {}
  //     requests()
  //   });
  const [subdesires, setSubdesires] = useState([]);
  //   const user = props.user;
  //   const subdesires = props.desire.subdesires;
  useEffect(async () => {
    await reqGetSubdesires(props.desire).then((res) => {
      console.log("subdesires:", res);
      setSubdesires([...res]);
    });
  }, []);
  useEffect(() => {
    console.log("rerender");
  }, [subdesires]);

  const onDeleteDesire = async () => {
    await reqDeleteDesire(props.desire).then((res) => {
      console.log("res of delete", res);
      props.setActivePanel("all");
    });
  };

  function removeSubdesire(index) {
    setSubdesires([
      ...subdesires.slice(0, index),
      ...subdesires.slice(index + 1),
    ]);
    reqDeleteSubdesire(subdesires[index]);
  }

  return (
    <Group>
      <Gallery slideWidth="110%" style={{ height: 350 }}>
        <div style={{ backgroundColor: "var(--destructive)" }} />
        <div
          style={{
            backgroundImage: `url(${urls[1]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${urls[2]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${urls[3]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Gallery>
      <Div>
        <CellButton centered mode="danger" onClick={onDeleteDesire}>
          Удалить {props.desire.name}
        </CellButton>
        <CellButton
          centered
          before={<Icon24Add />}
          onClick={() => props.setActivePanel("subdesireCreate")}
        >
          Добавить связанные желания
        </CellButton>
        <Title level="1" weight="heavy" style={{ marginBottom: 16 }}>
          {props.desire.description}
        </Title>
        <Title level="2" weight="regular" style={{ marginBottom: 16 }}>
          {props.desire.genre}
        </Title>
        <Title level="3" weight="regular" style={{ marginBottom: 16 }}>
          {props.desire.name}
        </Title>
        <FormItem>
          <List>
            {subdesires.map((item, index) => (
              <CheckBox
                removeSubdesire={removeSubdesire}
                item={item}
                index={index}
              />
            ))}
          </List>
        </FormItem>
      </Div>
    </Group>
  );
}
