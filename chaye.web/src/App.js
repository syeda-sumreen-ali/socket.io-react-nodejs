
import {lazy, Suspense} from "react"
import {Route} from "react-router-dom";


const Login = lazy(()=>import("./pages/auth/login"))
const Signup = lazy(()=>import("./pages/auth/signup"))
const ForgetPassword = lazy(()=>import("./pages/auth/forgetPassword"));
const Home = lazy(()=> import("./pages/home"))
const Chat = lazy (()=> import("./pages/chat"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/forgetPassword" component={ForgetPassword}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/chat" component={Chat}/>
			</Suspense>
    </div>
  );
}

export default App;
