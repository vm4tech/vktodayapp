import React from 'react';
// import ReactDOM from 'react-dom';
import {  
  AppRoot,
  ConfigProvider,
  AdaptivityProvider
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import CustomEpic from './components/CustomEpic';

function App () {
   
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot style={{overflow:"hidden", maxWidth:"100%", minWidth:"100%"}}>    
          
          {/* <CustomEpic platform={platform} user={user}> */}
          <CustomEpic 
            // isLoading={isLoading.current}
            // user={user.current}
            // platform={platform} 
            // popout={popout}
          >
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
