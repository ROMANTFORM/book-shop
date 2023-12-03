import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Cart from "./components/Cart";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";


function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/" component={Signin}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/booklist" component={BookList}/>
          <Route path="/bookcard" component={BookCard}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
