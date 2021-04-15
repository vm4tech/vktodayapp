import React from 'react'
import { 
    Gallery,
    // Group,
    // Header
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

export default function DesirePanel (props) {
    
   
    return(
        // <Group >
            <Gallery
            slideWidth="100%"
            style={{ height: 350, borderRadius:'10px' }}
            >
            <div style={{backgroundColor: 'var(--destructive)' }} />
            <div 
                style={{
                    backgroundImage: `url(${urls[1]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div 
                style={{
                    backgroundImage: `url(${urls[2]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div 
                style={{
                    backgroundImage: `url(${urls[3]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            </Gallery>
        // </Group>
    )
}