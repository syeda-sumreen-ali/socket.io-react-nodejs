
import {lazy, Suspense} from "react"
import {Route} from "react-router-dom";
const Home = lazy(()=> import("./pages/home"))
const Chat = lazy (()=> import("./pages/chat"))
const Auth = lazy(()=>import("./pages/auth"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <Route exact path="/" component={Auth}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/chat" component={Chat}/>
			</Suspense>
    </div>
  );
}

export default App;
