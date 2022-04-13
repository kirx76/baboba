import {
  Button,
  Panel,
  PanelHeader,
  Root,
  ScreenSpinner,
  View,
  Div,
} from "@vkontakte/vkui";
import { useMemo } from "react";
import Test from "../panels/Test";
import { observer } from "mobx-react";
import { useStores } from "../hooks/mobx";
import { useNavigation } from "../hooks/navigation";

const Navigator = observer(({ loading }) => {
  const { userStore } = useStores();
  const navigation = useNavigation();

  const popout = useMemo(() => {
    if (loading) {
      return <ScreenSpinner size="large" />;
    } else {
      return null;
    }
  }, [loading]);

  return (
    <Root activeView={navigation.activeView}>
      <View id={"Main"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"Test"}>
          <Test />
        </Panel>
        <Panel id={"SecondTest"}>
          <PanelHeader>Second Test</PanelHeader>
          <Div>
            <Button
              onClick={() => {
                console.log(userStore.vkUser);
              }}
            >
              Print User
            </Button>
          </Div>
        </Panel>
      </View>
    </Root>
  );
});

export default Navigator;
