import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
