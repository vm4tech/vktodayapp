import React, { useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import {  
  ScreenSpinner,
  AppRoot,
  ConfigProvider,
  AdaptivityProvider
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import {reqCheckParams} from './actions';
import CustomEpic from './components/CustomEpic';
import { reqCreateUser } from './actions';


function App () {
  // const [access, setAccess] = useState("");
  const [platform, setPlatform] = useState(null);
  const [user, setUser] = useState({
    id: 1,
    first_name: "Тесто",
    last_name: "Тестовое"  
  });
  const hu = useRef(user);
  const access = useRef();
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
  useEffect(() => {
    bridge.subscribe((e) => {});
		 async function fetchData() {
      // TODO: Включить, когда можно будет с сервером тестить
      await reqCheckParams(window.location.search.slice(1))
        .then(e => {console.log("setAccess:", e); access.current = e;})
        .catch(e => console.log("Ошибка: ", e));
      if (access.current){
        await bridge.send('VKWebAppGetUserInfo')
          .then(data => {setUser(data); hu.current = data});
        await bridge.send('VKWebAppGetClientVersion')
          .then(data => {setPlatform(data.platform)})
      }
      await reqCreateUser(hu.current.id, hu.current.first_name, hu.current.last_name)
            .then(data => {
              console.log("create user:", data)
            });
      console.log("hu.current", hu.current)
      setPopout(null);
		}
		fetchData();
  	},[]); 
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot style={{overflow:"hidden", maxWidth:"100%", minWidth:"100%"}}>    
          
          {/* <CustomEpic platform={platform} user={user}> */}
          <CustomEpic platform={platform} user={user} popout={popout}>
            {/* <Root activeView={activeView}>
              <View id="main" activePanel={mainPanel} popout={popout}>
                <Panel id="panel1">
                  <PanelHeader
                    left={<PanelHeaderClose />}
                    right={<Avatar size={36} />}
                  >
                    Стартовый экран
                  </PanelHeader>
                  <MainBlock user={user}></MainBlock>
                  <NearBlock setMainPanel={setMainPanel} user={user}></NearBlock>
                  <Group>
                    <CellButton onClick={ () => setMainPanel('panel2') }>
                      Вторая панель
                    </CellButton>
                  </Group>
                
                </Panel>
                <Panel left={<PanelHeaderBack  onClick={() => setMainPanel('panel1')} label="Назаl" />} id="panel2">
                  <DesirePanel/>
                  <Group>
                    <CellButton onClick={ () => setMainPanel('panel1') }>
                      Несколько иконок
                    </CellButton>
                  </Group>
                  <Test></Test>
                  
                </Panel>
              </View> 
            </Root> */}
          </CustomEpic>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}


export default App;
