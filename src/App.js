import "./styles.css";
import { BrowserRouter } from "react-router-dom";

import Router from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>useRoutes Example</h1>
        <Router/>
      </div>
    </BrowserRouter>
  );
}
