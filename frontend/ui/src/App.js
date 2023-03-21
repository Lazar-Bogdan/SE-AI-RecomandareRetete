import './App.css';
import MainPage from "./Pages/MainPage";
import {Route, Routes} from "react-router-dom";
import QuestionsPage from "./Pages/QuestionsPage";
import RecipePage from "./Pages/RecipePage";

function App() {
    return (
        <div className="App">
            <>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/questions/:id" element={<QuestionsPage/>} />
                    <Route path="/recipe/:id" element={<RecipePage/>} />
                </Routes>
            </>
        </div>
    );
}

export default App;
