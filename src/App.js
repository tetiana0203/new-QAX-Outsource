import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
       <Header title="My header" subtitle="subtitle2" />
       <Main />
       <Footer  />

       
    </div>
  );
}

export default App;
