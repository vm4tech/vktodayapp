import React, { useState } from 'react'
import {
    Header,
    Group,
    Placeholder,
    Avatar,
    CellButton
  } from '@vkontakte/vkui';
import CustomBanner from './CustomBanner';
import { Icon24Add, Icon28MessageOutline } from '@vkontakte/icons';

  let urls = [
    "https://www.mercedes-benz.ru//passengercars/mercedes-benz-cars/models/amg-gt/coupe-c190/design/model-comparison/_jcr_content/comparisonslider/par/comparisonslide_379682962/exteriorImage.MQ6.12.20200831120232.jpeg",
    "https://www.erikastravelventures.com/wp-content/uploads/2018/10/IMG_6858-e1540290382435.jpg",
    "https://sun9-58.userapi.com/impg/vWmU4RE9UV7JhdF8n-ZC2UNJtgFq3wFdtR-iZg/obs_dYEPHkA.jpg?size=1600x1060&quality=96&sign=d6df7f014bd21d1522392392b03524bf&type=album",
    "https://sun9-58.userapi.com/impg/KH7eV4KH1o8BefYZUgZGL7NnefMaTLNfB52jQA/09XbTS6OOT0.jpg?size=1200x1600&quality=96&sign=76fabe9a7f2bebaf31696ad32f8bd37d&type=album"
  ]
  console.log(urls[0])
/*TODO: 
** 1. Посмотреть, что можно сделать с шевроном (стрелочкой), т.к. при использовании background она не показывается (слой находится выше, чем стрелка).
* 2. Подумать над затемнением при наведении.
* 3. Подумать над качеством импортируемого изображения (т.к. при большом размере она долго прогружается) 
*/

export default function Desires (props) {
    
    return(
        <Group
            header={<Header>Ближайшие</Header>}
        >   
        <CellButton onClick={() => props.setActivePanel("create_desire")} centered before={<Avatar shadow={false} size={40} ><Icon24Add /></Avatar>}>Добавить желание</CellButton> 
        {props.desires.size === 0 ? 
            <Placeholder 
              header="Кажется, у вас пусто в штанах!"
              icon={
                <Icon28MessageOutline 
                  width={56} height={56} 
                />}
            />
            :
              props.desires.slice(0).reverse().map((desire) =>
                <CustomBanner 
                  onSetDesire={props.onSetDesire} 
                  setActivePanel={props.setActivePanel} 
                  key={desire.id} 
                  desire={desire}
                /> 
              )
        }
        </Group>
    )
}