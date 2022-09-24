import { BrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./views/DefaultLayout";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
}

export default App;
