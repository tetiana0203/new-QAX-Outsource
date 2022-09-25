import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import BtnScrollUp from "./components/BtnScrollUp"

function App() {
  return (
    <div className="App">
       <Header />
       <Main />
       <Footer  />
       <BtnScrollUp />
    </div>
  );
}

export default App;
