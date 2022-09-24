import { BrowserRouter as Router } from "react-router-dom";

import { DefaultLayout } from "./views/DefaultLayout";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

function App() {
  return (
    <Router>
      <DefaultLayout />
    </Router>
  );
}

export default App;
