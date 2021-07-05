import React from 'react'
import { 
    CardScroll,
    Group,
    Header,
    ContentCard
  } from '@vkontakte/vkui';

  let urls = [
    "https://sun9-43.userapi.com/impg/EwxHS_fyIcrcAF_p9UxdxYj_HpQYKVJG5RImSw/yGSW4OyX3to.jpg?size=1600x1060&quality=96&sign=0ed947cc70a14d1e4c20245290a37d23&type=album",
    "https://sun9-58.userapi.com/impg/KDNminqkporztz7QwMImW7aMacrXS-Y8J9gqhA/CNOnZT6QBX8.jpg?size=1060x1600&quality=96&sign=d0baeb298530eb3dd7064462e07bdf18&type=album",
  ];

export default function MainBlock (props) {
    

    return(
        // Причесываю компоненты 
        // TODO: Сделать обрезание текста, чтобы не выходило за границы, иначе режется верстка у ContentCard (проверить можно вставив много букв в caption)
        // TODO: Понять, почему не работает вне vk скрол с shift и скрол до конца. 
             <Group header={<Header>Главные</Header>}> 
              <CardScroll size="m">
                <ContentCard
                  image={urls[0]}
                  subtitle="Провода"
                  header="Картинка как будто удочка"
                  // text=""
                  caption="Photo by Pasha Usenko"
                  maxHeight={150}
                  // onClick={}
                  mode="tint"
                />
                <ContentCard
                 image={urls[1]}
                  subtitle="Учеба"
                  header="Закончить учебу"
                  // text=""
                  caption="Выполнено 3 из 4"
                  mode="tint"
                  maxHeight={150}
                />
                <ContentCard
                
                  image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                  subtitle="Горы"
                  header="Какой-то текст"
                  caption="Хочу в горы"
                  mode="tint"
                  maxHeight={150}
                />
                             </CardScroll>
            </Group>
    )
}