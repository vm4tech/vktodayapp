import React, { useEffect, useRef, useState } from "react";
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
  withAdaptivity,
} from "@vkontakte/vkui";
import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
  Icon24Fire,
} from "@vkontakte/icons";
// import NearBlock from "./NearBlock";
// import DesirePanel from "./DesirePanel";
// import MainBlock from "./MainBlock";
import bridge from "@vkontakte/vk-bridge";
// import Desires from "./Desires";
// import CreateDesire from "./CreateDesire";
import reqCheckParams, {
  // reqGetDesires,
  reqCreateUser,
  reqGetSubDesires,
} from "../../actions";
import All from "./All/All";
import DesireCreate from "../Сreate/DesireCreate";

const EpicCustom = withAdaptivity(
  (props) => {
    const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
    const [activeStory, setActiveStory] = useState("main");
    const [activePanel, setActivePanel] = useState("main");
    const access = useRef();
    const user = useRef({
      id: 1,
      first_name: "Тесто",
      last_name: "Тестовое",
    });
    const isDesktop = props.viewWidth >= ViewWidth.SMALL_TABLET;
    const onStoryChange = (e) => {
      setActiveStory(e.currentTarget.dataset.story);
      setActivePanel(e.currentTarget.dataset.story);
    };
    const selected = {
      backgroundColor: "var(--button_secondary_background)",
      borderRadius: 8,
    };

    useEffect(() => {
      async function fetchData() {
        bridge.subscribe((e) => {});
        await reqCheckParams(window.location.search.slice(1))
          .then((e) => {
            console.log("setAccess:", e);
            access.current = e;
          })
          .catch((e) => console.log("Ошибка: ", e));
        if (access.current) {
          await bridge.send("VKWebAppGetUserInfo").then((data) => {
            user.current = data;
          });
          await bridge.send("VKWebAppGetClientVersion").then((data) => {
            // setPlatform(data.platform);
          });
        }
        // Придумать авторизацию для пользователей, т.к. проверка пользователя переносится на бэк (из-за необходимости проверки вставляемых данных)
        await reqCreateUser(
          user.current.id,
          user.current.first_name,
          user.current.last_name
        ).then((data) => {
          console.log("reqCreateUser:", data);
        });
        console.log("end useEffect");
        setPopout(null);
      }

      // https://stackoverflow.com/questions/45876514/async-function-await-not-waiting-for-promise
      fetchData()
        .then((res) => console.log("FUCKING RES", res))
        .catch((err) => console.log("Error", err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return !popout ? (
      <SplitLayout style={{ justifyContent: "center" }}>
        {isDesktop && (
          <SplitCol spaced={true} fixed width="250px" maxWidth="280px">
            <Panel>
              <Group>
                <Cell
                  disabled={activeStory === "main"}
                  style={activeStory === "main" ? selected : {}}
                  data-story="main"
                  onClick={onStoryChange}
                  before={<Icon28NewsfeedOutline />}
                >
                  Главная
                </Cell>
                <Cell
                  disabled={activeStory === "all"}
                  style={activeStory === "all" ? selected : {}}
                  data-story="all"
                  onClick={onStoryChange}
                  before={<Icon28ServicesOutline />}
                >
                  Все
                </Cell>
                <Cell
                  disabled={activeStory === "profile"}
                  style={activeStory === "profile" ? selected : {}}
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
          width={isDesktop ? "560px" : "100%"}
          maxWidth={isDesktop ? "560px" : "100%"}
        >
          <Epic
            activeStory={activeStory}
            tabbar={
              !isDesktop && (
                <Tabbar>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === "main"}
                    data-story="main"
                    text="Главная"
                  >
                    <Icon28NewsfeedOutline />
                  </TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === "all"}
                    data-story="all"
                    text="Все"
                  >
                    <Icon28ServicesOutline />
                  </TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === "profile"}
                    data-story="profile"
                    text="Профиль"
                  >
                    <Icon28UserCircleOutline />
                  </TabbarItem>
                </Tabbar>
              )
            }
          >
            <View popout={popout} id="main" activePanel={activePanel}>
              <Panel id="main">
                <PanelHeader shadow={true} left={<PanelHeaderBack />}>
                  Главная
                </PanelHeader>
                <Group>
                  <Placeholder
                    icon={<Icon28UserCircleOutline width={56} height={56} />}
                  ></Placeholder>
                </Group>
              </Panel>
            </View>

            <View id="all" activePanel={activePanel}>
              <Panel id="all">
                <All setActivePanel={setActivePanel} />
              </Panel>
              <Panel id="desireCreate">
                <DesireCreate
                  activePanel={activePanel}
                  setActivePanel={setActivePanel}
                />
              </Panel>
            </View>
            <View id="profile" activePanel={activePanel}>
              <Panel id="profile">
                <PanelHeader shadow={true} left={<PanelHeaderBack />}>
                  Профиль
                </PanelHeader>
                <Group>
                  <Placeholder
                    icon={<Icon28UserCircleOutline width={56} height={56} />}
                  ></Placeholder>
                </Group>
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    ) : (
      popout
    );
  },
  {
    viewWidth: true,
  }
);

export default EpicCustom;
