import React, { useState } from 'react';
import { 
  Cell,
  Epic,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderProps,
  PanelHeaderBack,
  Placeholder,
  SplitCol,
  SplitLayout,
  Tabbar,
  TabbarItem,
  usePlatform,
  View,
  ViewWidth,
  VKCOM,
  withAdaptivity,
  Button,
  CellButton,
  Avatar
  } from '@vkontakte/vkui';
import {
    Icon28NewsfeedOutline,
    Icon28ServicesOutline,
    Icon28UserCircleOutline,
    Icon28ClipOutline,
    Icon28MessageOutline,
    Icon56NewsfeedOutline,
    Icon24Add
} from "@vkontakte/icons"
import NearBlock from "./NearBlock"
import Test from './Test';
import DesirePanel from './DesirePanel';
import MainBlock from './MainBlock';
import CreateDesire from './CreateDesire';


const CustomEpic = withAdaptivity((props) => {
    const [activeStory, setActiveStory] = useState('services');
    const onStoryChange = (e) => {setActiveStory(e.currentTarget.dataset.story);setActivePanel(e.currentTarget.dataset.story)};
    const [activePanel, setActivePanel] = useState("services");
    const isDesktop = props.viewWidth >= ViewWidth.SMALL_TABLET;
    const hasHeader = props.platform == 'web';
    console.log(props)
    console.log("isDeskotop ", isDesktop)
    console.log("hasHeader ", hasHeader) 
    return (
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
                  disabled={activeStory === 'messages'}
                  style={activeStory === 'messages' ? {
                    backgroundColor: "var(--button_secondary_background)",
                    borderRadius: 8
                  } : {}}
                  data-story="messages"
                  onClick={onStoryChange}
                  before={<Icon28MessageOutline />}
                >
                  messages
                </Cell>
                <Cell
                  disabled={activeStory === 'clips'}
                  style={activeStory === 'clips' ? {
                    backgroundColor: "var(--button_secondary_background)",
                    borderRadius: 8
                  } : {}}
                  data-story="clips"
                  onClick={onStoryChange}
                  before={<Icon28ClipOutline />}
                >
                  clips
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
                selected={activeStory === 'messages'}
                data-story="messages"
                label="12"
                text="Сообщения"
              ><Icon28MessageOutline /></TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'clips'}
                data-story="clips"
                text="Клипы"
              ><Icon28ClipOutline /></TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === 'profile'}
                data-story="profile"
                text="Профиль"
              ><Icon28UserCircleOutline /></TabbarItem>
            </Tabbar>
          }>
            <View id="main" activePanel={activePanel}>
              <Panel id="main">
                <MainBlock></MainBlock>
                <NearBlock></NearBlock>
              </Panel>
            </View>
            <View id="services" activePanel={activePanel}>
              <Panel id="services">
                {/* <PanelHeader visor={false} transparent={true} left={<PanelHeaderBack style={{color:"var(--background_content)"}} />}> Все желания</PanelHeader> */}
                <PanelHeader left={<PanelHeaderBack  />}> Все желания</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder header="Кажется, у вас пусто в штанах!" icon={<Icon28MessageOutline width={56} height={56} />}/>
                  <CellButton onClick={() => setActivePanel("create_desire")} centered before={<Avatar shadow={false} size={40} ><Icon24Add /></Avatar>}>Добавить желание</CellButton>
                </Group>
              </Panel>
              <Panel id="create_desire">
                {/* <PanelHeader visor={false} transparent={true} left={<PanelHeaderBack style={{color:"var(--background_content)"}} />}> Все желания</PanelHeader> */}
                <PanelHeader left={<PanelHeaderBack  />}> Создание желания</PanelHeader>
                <Group>
                  <CreateDesire user={props.user}></CreateDesire>
                </Group>
              </Panel>
            </View>
            <View id="messages" activePanel={activePanel}>
              <Panel id="messages">
                <PanelHeader left={<PanelHeaderBack />}>Сообщения</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}>
                  </Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="clips" activePanel={activePanel}>
              <Panel id="clips">
                <PanelHeader left={<PanelHeaderBack />}>Клипы</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder  icon={<Icon28ClipOutline width={56} height={56} />}>
                  </Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="profile" activePanel={activePanel}>
              <Panel id="profile">
                <PanelHeader shadow={true} left={<PanelHeaderBack />}>Профиль</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}>
                  </Placeholder>
                </Group>
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    );
  }, {
    viewWidth: true
  });
  

  export default CustomEpic;