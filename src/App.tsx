import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";
import { TaskProvider } from "./context/TaskContext";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "./global.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <TaskProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tasks">
            <TaskList />
          </Route>
          <Route path="/tasks/:id">
            <TaskDetail />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </TaskProvider>
  </IonApp>
);

export default App;
