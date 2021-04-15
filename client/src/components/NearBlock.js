import React from 'react'
import { Banner,
    Button,
    Header,
    Group,
    Progress
    
  } from '@vkontakte/vkui';

  let urls = [
    "https://www.mercedes-benz.ru//passengercars/mercedes-benz-cars/models/amg-gt/coupe-c190/design/model-comparison/_jcr_content/comparisonslider/par/comparisonslide_379682962/exteriorImage.MQ6.12.20200831120232.jpeg",
    "https://www.erikastravelventures.com/wp-content/uploads/2018/10/IMG_6858-e1540290382435.jpg",
    "https://sun9-58.userapi.com/impg/vWmU4RE9UV7JhdF8n-ZC2UNJtgFq3wFdtR-iZg/obs_dYEPHkA.jpg?size=1600x1060&quality=96&sign=d6df7f014bd21d1522392392b03524bf&type=album",
    "https://sun9-58.userapi.com/impg/KH7eV4KH1o8BefYZUgZGL7NnefMaTLNfB52jQA/09XbTS6OOT0.jpg?size=1200x1600&quality=96&sign=76fabe9a7f2bebaf31696ad32f8bd37d&type=album"
  ]
/*TODO: 
* 1. Посмотреть, что можно сделать с шевроном (стрелочкой), т.к. при использовании background она не показывается (слой находится выше, чем стрелка).
* 2. Подумать над затемнением при наведении.
* 3. Подумать над качеством импортируемого изображения (т.к. при большом размере она долго прогружается) 
*/

export default function NearBlock (props) {
    // const user = props.user;
    // console.log(user.id);
    // const [description, setDescription] = useState("");
    // const [mainPanel, setMainPanel] = useState("")
    const help = (message) => {
        props.setMainPanel(message)
        console.log(props);
    }
    const pashas = 100/36*6;
    
    return(
        <Group
            header={<Header>TEsting</Header>}
        >   <div
                 onClick = {() => help("panel2")}
                >
                <Banner
                    mode="image"
                    header="Купить машину"
                    size="s"
                    asideMode="expand"
                    subheader= "Выполнено 2 из 4"
                    background={
                        <div
                        style={{
                            backgroundImage: `url(${urls[0]})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                        >
                            <Progress 
                                value={50}
                                style={{
                                    height:"5%",                            
                                    }} />
                        </div>
                    }
                    actions={<Button onClick = {() => help("panel2")}
                        mode="overlay_primary">Посмотреть</Button>}
                    // onClick={ () => help('panel2') }
                />
            </div>
              
            <Banner
                mode="image"
                header="Купить машину"
                size="m"
                asideMode="expand"
                subheader="Выполнено 2 из 4"
                background={
                    <div
                    style={{
                        backgroundImage: `url(${urls[0]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                    >
                         <Progress 
                        value={50}
                        style={{
                            height:"5%",
                            }} />
                    </div>
                }
                actions={<Button onClick = {() => help("panel2")}
                     mode="overlay_primary">Посмотреть</Button>}
                // onClick = {() => help("panel2")}
            />
            <Banner
                mode="image"
                size="m"
                header="Путешествие"
                asideMode="expand"
                subheader="Выполнено 0 из 25"
                background={
                    <div
                    style={{
                        // backgroundColor: '#65c063',
                        backgroundImage: `url(${urls[1]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                       
                    }}
                    >
                         <Progress 
                        value={0}
                        style={{
                            height:"5%"
                            }} />
                    </div>
                }
                
                actions={<Button onClick = {() => help("panel2")}
                mode="overlay_primary">Посмотреть</Button>}
        //    onClick={ () => help('panel2') }
            />
            {/* <Banner
                header="Больше интересных подкастов в каталоге"
                subheader="Найдите интересующие именно Вас подкасты!"
                asideMode="expand"
                onClick={() => console.log('[Podcast banner] onClick')}
            /> */}

            <Banner
                mode="image"
                header="Паша фотограф"
                size="m"
                asideMode="expand"
                subheader={<span>Сделано топовых фоток <b>6 </b> из <b>36</b></span>}
                background={
                    <div
                    style={{
                        backgroundColor: 'black',
                        backgroundImage: `url(${urls[2]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                   > <Progress 
                        value={pashas}
                        style={{
                            height:"5%",                            
                            }} />
                    </div>
                }
                imageTheme="dark"
                onClick = {() => console.log("Паша лох!")}
                actions={<Button onClick = {() => help("panel2")}
                     mode="overlay_primary">Посмотреть</Button>}
                // onClick={ () => help('panel2') }
            />
            <Banner
                mode="image"
                header="Паша модель"
                size="m"
                asideMode="expand"
                subheader={<span>Сделано ню фоток <b>30 </b> из <b>30</b></span>}
                background={
                    <div
                    style={{
                        // backgroundColor: '#65c063',
                        backgroundImage: `url(${urls[3]})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        
                    }}
                    >
                         <Progress 
                        value={100}
                        style={{
                            height:"5%",                            
                            }} />
                    </div>
                }
                imageTheme="ligth"
                onClick = {() => console.log("Паша лох!")}
                actions={<Button onClick = {() => help("panel2")}
                     mode="overlay_primary">Посмотреть</Button>}
                // onClick={ () => help('panel2') }
            />
        </Group>
    )
}