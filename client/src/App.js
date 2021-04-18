import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import {  
  ScreenSpinner,
  AppRoot,
  ConfigProvider,
  AdaptivityProvider
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
// import {reqCheckParams} from './actions';
import CustomEpic from './components/CustomEpic';


function App () {
  // const [access, setAccess] = useState("");
  const [platform, setPlatform] = useState(null);
  const [user, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  useEffect(() => {
    bridge.subscribe((e) => {console.log("SUBSCRIBE",e)});
		async function fetchData() {
      // TODO: Включить, когда можно будет с сервером тестить
      // await reqCheckParams(window.location.search.slice(1))
      // .then(e => {console.log("setAccess:", e)})
      // .catch(e => console.log("Ошибка: ", e));
      
			await bridge.send('VKWebAppGetUserInfo')
      .then(data => {
        setUser(data); 
        // console.log("USER:", user);
      });
      await bridge.send('VKWebAppGetClientVersion')
      .then(data => {
        console.log("ПЛАТФОРМА",data.platform)
        setPlatform(data.platform)})
		}
		fetchData();
    setPopout(null);
    // console.log("access:" , access);
	}, []); 

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
