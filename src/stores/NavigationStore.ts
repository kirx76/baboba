import { action, computed, makeAutoObservable, observable } from "mobx";

type AvailableViews = "Main";
type AvailablePanels = "Test" | "SecondTest";

class NavigationStore {
  @observable _activeView: AvailableViews = "Main";
  @observable _activePanel: AvailablePanels = "Test";

  constructor() {
    makeAutoObservable(this);
  }

  @computed get activeView() {
    return this._activeView;
  }

  @computed get activePanel() {
    return this._activePanel;
  }

  @action setActiveView = (v: AvailableViews) => (this._activeView = v);
  @action setActivePanel = (v: AvailablePanels) => (this._activePanel = v);
}

export default NavigationStore;
