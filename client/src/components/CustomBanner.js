import React from 'react'
import { Banner,
    Button,
    Progress
  } from '@vkontakte/vkui';

  let urls = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6b7c36116015757.605df87081ee0.jpg",
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

export default function CustomBanner (props) {
    // const user = props.user;
    // console.log(user.id);
    // const [mainPanel, setMainPanel] = useState("")
  

    
    return(
            <div
                 onClick = {() => {
                     props.setActivePanel("desire_panel");
                     props.onSetDesire(props.desire)
                     console.log("ket props:",props.desire)
                    }}
                >
                <Banner
                    mode="image"
                    header={props.desire.description}
                    size="m"
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
                    actions={<Button onClick = {() => props.setActivePanel("desire_panel")}
                        mode="overlay_primary">Посмотреть</Button>}
                    // onClick={ () => desirePanel('panel2') }
                />
        </div>
    )
}