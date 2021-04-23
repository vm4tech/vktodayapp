import React, { useEffect, useRef, useState } from 'react';
import { 
  Cell,
  Epic,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  PullToRefresh,
  ScreenSpinner,
  SplitCol,
  SplitLayout,
  Tabbar,
  TabbarItem,
  View,
  ViewWidth,
  withAdaptivity
  } from '@vkontakte/vkui';
import {
    Icon28NewsfeedOutline,
    Icon28ServicesOutline,
    Icon28UserCircleOutline,
    Icon24Fire
} from "@vkontakte/icons"
import NearBlock from "./NearBlock"
import DesirePanel from './DesirePanel';
import MainBlock from './MainBlock';
import bridge from '@vkontakte/vk-bridge';
import Desires from './Desires'
import CreateDesire from './CreateDesire'
import { reqGetDesires, reqCheckParams, reqCreateUser } from '../actions';


const CustomEpic = withAdaptivity((props) => {
    const [platform, setPlatform] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [activeStory, setActiveStory] = useState('main');
    const [activePanel, setActivePanel] = useState("main");
    const [desire, setDesire] = useState(null);
    const [addDesire, setAddDesire] = useState(null);
    const [addSubDesire, setAddSubDesire] = useState(null);
    const [deleteDesire, setDeleteDesire] = useState(null);
    const [desires, setDesires] = useState([]);
    const [refresh, setRefresh] = useState(null)
    const access = useRef()
    const user = useRef({
      id: 1,
      first_name: "Тесто",
      last_name: "Тестовое"  
    })
    const isDesktop = props.viewWidth >= ViewWidth.SMALL_TABLET;
    const onStoryChange = (e) => {setActiveStory(e.currentTarget.dataset.story); setActivePanel(e.currentTarget.dataset.story)}
    const onSetDesire = (desire) => setDesire(desire);
    
    useEffect(()=>{
      async function fetchData() {
        bridge.subscribe((e) => {});
        await reqCheckParams(window.location.search.slice(1))
          .then(e => {console.log("setAccess:", e); access.current = e;})
          .catch(e => console.log("Ошибка: ", e));
        if (access.current){
          await bridge.send('VKWebAppGetUserInfo')
            .then(data => {
              user.current = data; 
            });
          await bridge.send('VKWebAppGetClientVersion')
            .then(data => {setPlatform(data.platform)})
        }
        // Придумать авторизацию для пользователей, т.к. проверка пользователя переносится на бэк (из-за необходимости проверки вставляемых данных)
        await reqCreateUser(user.current.id, user.current.first_name, user.current.last_name)
              .then(data => {
                console.log("reqCreateUser:", data)
              });
        await reqGetDesires(user.current.id)
          .then(e => {
              setDesires([...e]);
              console.log("useEffect:",e)
          })
          .catch(e => console.log(e))
        console.log("end useEffect")
        setPopout(null);
      }
      // https://stackoverflow.com/questions/45876514/async-function-await-not-waiting-for-promise
      fetchData()
        .then(res => console.log("FUCKING RES", res))
        .catch(err => console.log("Error", err))

      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onRefresh = async () =>{
    setRefresh(true)
    await reqGetDesires(user.current.id)
          .then(e => {
              setDesires([...e]);
              console.log("Refresh desires:",e);
              setRefresh(false);
          })
    
  }

  useEffect(() =>{
    const deleted = desires.filter(item => item.id !== deleteDesire.id)
    setDesires([...deleted] )
    console.log("Итог:", deleted)
    // maybe fix it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[deleteDesire])

  useEffect(() => {
    // как лучше - хз)
    // setDesires([...desires, addDesire])
    setDesires(prev => [...prev, addDesire])
    console.log("added desires: ",desires)
    // maybe fix it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[addDesire])



    return (
      !popout ?
      <SplitLayout
        style={{ justifyContent: "center" }}
      > 
        
        {isDesktop && (
          <SplitCol spaced={true} fixed width="250px" maxWidth="280px">
            <Panel>
              <Group>
                <Cell
                  disabled={activeStory === 'main'}
                  style={activeStory === 'main' ? {
                    backgroundColor: "var(--button_secondary_background)",
                    borderRadius: 8
                  } : {}}
                  data-story="main"
                  onClick={onStoryChange}
                  before={<Icon28NewsfeedOutline />}
                >
                  Главная
                </Cell>
                <Cell
                  disabled={activeStory === 'services'}
                  style={activeStory === 'services' ? {
                    backgroundColor: "var(--button_secondary_background)",
                    borderRadius: 8
                  } : {}}
                  data-story="services"
                  onClick={onStoryChange}
                  before={<Icon28ServicesOutline />}
                >
                  Все
                </Cell>
              <Cell
                  disabled={activeStory === 'profile'}
                  style={activeStory === 'profile' ? {
                    backgroundColor: "var(--button_secondary_background)",
                    borderRadius: 8
                  } : {}}
                  data-story="profile"
                  onClick={onStoryChange}
                  before={<Icon28UserCircleOutline />}
                >
                  Профиль
                </Cell>
              </Group>
            </Panel>
          </SplitCol>
        )}
  
        <SplitCol
          animate={!isDesktop}
          spaced={isDesktop}
          width={isDesktop ? '560px' : '100%'}
          maxWidth={isDesktop ? '560px' : '100%'}
        >
          <Epic activeStory={activeStory} 
          tabbar={!isDesktop &&
            <Tabbar>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'main'}
                data-story="main"
                text="Главная"
              ><Icon28NewsfeedOutline /></TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'services'}
                data-story="services"
                text="Все"
              ><Icon28ServicesOutline/></TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'profile'}
                data-story="profile"
                text="Профиль"
              ><Icon28UserCircleOutline /></TabbarItem>
            </Tabbar>
          }>
            <View popout={popout} id="main" activePanel={activePanel}>
              <Panel id="main">
                <MainBlock></MainBlock> 
                <NearBlock></NearBlock> 
              </Panel>
            </View>



            <View id="services" activePanel={activePanel}>
              <Panel id="services">
                {/* <PanelHeader visor={false} transparent={true} left={<PanelHeaderBack style={{color:"var(--background_content)"}} />}> Все желания</PanelHeader> */}
                
                <PanelHeader left={<Icon24Fire width={35} height={35}/>} > Все желания</PanelHeader>
                <PullToRefresh onRefresh={onRefresh} isFetching={refresh}>                
                  <Desires 
                    desires={desires} 
                    addDesire={addDesire} 
                    onSetDesire={onSetDesire} 
                    setActivePanel={setActivePanel} 
                    addSubDesire={addSubDesire}
                    setAddSubDesire={setAddSubDesire}
                    user={user.current}
                  />
                </PullToRefresh>

              </Panel>
              <Panel id="create_desire">
                {/* <PanelHeader visor={false} transparent={true} left={<PanelHeaderBack style={{color:"var(--background_content)"}} />}> Все желания</PanelHeader> */}
                <PanelHeader left={<PanelHeaderBack onClick={()=> setActivePanel("services")} />}> Создание желания</PanelHeader>
                <Group>
                  <CreateDesire 
                    setAddDesire={setAddDesire}
                    user={user.current} 
                    setActivePanel={setActivePanel} 
                    activePanel={activePanel}
                  />
                </Group>
              </Panel>
              <Panel id="desire_panel">
                <PanelHeader 
                  visor={false}
                  transparent={true}
                  left={<PanelHeaderBack onClick={()=> setActivePanel("services")} style={{color:"var(--background_content)"}} />}
                />
                  <DesirePanel 
                    desire={desire}
                    user={user.current}
                    setDeleteDesire={setDeleteDesire}
                    setActivePanel={setActivePanel}
                  />
              </Panel>
              <Panel id="create_subdesire">
                {/* <PanelHeader visor={false} transparent={true} left={<PanelHeaderBack style={{color:"var(--background_content)"}} />}> Все желания</PanelHeader> */}
                <PanelHeader left={<PanelHeaderBack onClick={()=> setActivePanel("services")} />}> Создание subжелания</PanelHeader>
                <Group>
                  <CreateDesire 
                    desire={desire}
                    setAddSubDesire={setAddSubDesire}
                    addSubDesire={addSubDesire}
                    user={user.current} 
                    setActivePanel={setActivePanel} 
                    activePanel={activePanel}
                  />
                </Group>
              </Panel>
            </View>
            <View id="profile" activePanel={activePanel}>
              <Panel id="profile">
                <PanelHeader shadow={true} left={<PanelHeaderBack />}>Профиль</PanelHeader>
                <Group >
                  <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}>
                  </Placeholder>
                </Group>
              </Panel>
            </View>
          </Epic>
        </SplitCol> 
      </SplitLayout> 
      : popout
    );
  }, {
    viewWidth: true
  });
  

  export default CustomEpic;