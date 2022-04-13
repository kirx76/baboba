import React from "react";
import { observer, Provider } from "mobx-react";
import { AdaptivityProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import RootStore from "./stores/RootStore";
import AppRootNavigator from "./navigations/AppRootNavigator";

const App = observer(() => {
  const rootStore = new RootStore();

  return (
    <Provider {...rootStore}>
      <AdaptivityProvider>
        <AppRootNavigator />
      </AdaptivityProvider>
    </Provider>
  );
});

export default App;
