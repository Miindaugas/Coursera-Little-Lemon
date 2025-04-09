import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Nav} from "./components/Nav";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
