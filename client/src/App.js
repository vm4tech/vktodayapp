import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import {  View, Panel, PanelHeader,  Group,
  Root,                 
  PanelHeaderClose     ,
  PanelHeaderBack,      
  // Counter,
  Avatar,
  CellButton,
  ScreenSpinner,
  AppRoot,
  usePlatform,
  ConfigProvider,
  AdaptivityProvider
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import MainBlock from './components/MainBlock';
import NearBlock from './components/NearBlock';
import DesirePanel from './components/DesirePanel';
import Test from './components/Test';
import {reqCheckParams} from './actions';
import CustomEpic from './components/CustomEpic';


function App () {
  const [mainPanel, setMainPanel] = useState("panel1");
  const [activeView] = useState("main");
  const [access, setAccess] = useState("");
  const [platform, setPlatform] = useState(null);
  const [user, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  useEffect(() => {
 
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
      await reqCheckParams(window.location.search.slice(1))
      .then(e => {console.log("setAccess:", e)})
      .catch(e => console.log("Ошибка: ", e));
      
			await bridge.send('VKWebAppGetUserInfo')
      .then(data => setUser(data));
      await bridge.send('VKWebAppGetClientVersion')
      .then(data => setPlatform(data.platform))
		}
		fetchData();
    setPopout(null);
    console.log("access:" , access);
	}, []);

  
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>    
          <CustomEpic platform={platform} user={user}>
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
