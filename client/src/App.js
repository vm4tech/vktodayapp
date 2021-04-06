import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import {  View, Panel, PanelHeader,  Group,
  Root,                 
  PanelHeaderClose     ,
  PanelHeaderBack,      
  // Counter,
  Avatar,
  CellButton,
  // PanelHeaderButton,  
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainBlock from './components/MainBlock'
import NearBlock from './components/NearBlock'
import DesirePanel from './components/DesirePanel'
import Test from './components/Test'
function App () {
  const [mainPanel, setMainPanel] = useState("panel1")
  const [activeView] = useState("main")
  
  return (
    <Root activeView={activeView}>
        <View id="main" activePanel={mainPanel}>
          <Panel id="panel1">
            <PanelHeader
              left={<PanelHeaderClose />}
              right={<Avatar size={36} />}
            >
              Стартовый экран
            </PanelHeader>
            <MainBlock></MainBlock>
            <NearBlock setMainPanel={setMainPanel}></NearBlock>
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
      </Root>
  );
}


export default App;
