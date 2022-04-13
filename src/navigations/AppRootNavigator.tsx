import { AppRoot } from "@vkontakte/vkui";
import { useEffect, useState } from "react";
import Navigator from "./Navigator";
import { observer } from "mobx-react";
import { useStores } from "../hooks/mobx";

const AppRootNavigator = observer(() => {
  const { userStore } = useStores();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userStore.setVKUser().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AppRoot>
      <Navigator loading={loading} />
    </AppRoot>
  );
});

export default AppRootNavigator;
