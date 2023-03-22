import './App.css';
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import QuestionsPage from "./Pages/QuestionsPage";
import RecipePage from "./Pages/RecipePage";
import Algoritm from './Pages/algorithm';
import { createBrowserHistory  as createHistory} from 'history';

import CookieService from './backend/CookieService';

const history = createHistory(); 

// sessionStorage.setItem('answer_Vegani_0', "");
// sessionStorage.setItem('answer_Vegani_1', "");
// sessionStorage.setItem('answer_Vegani_2', "");
// sessionStorage.setItem('answer_Vegani_3', "");
// sessionStorage.setItem('answer_Vegani_4', "");
// sessionStorage.setItem('answer_NoVegani_0', "");
// sessionStorage.setItem('answer_NoVegani_1', "");
// sessionStorage.setItem('answer_NoVegani_2', "");
// sessionStorage.setItem('answer_NoVegani_3', "");
// sessionStorage.setItem('answer_NoVegani_4', "");

// CookieService.remove('answer_Vegani_0');
// CookieService.remove('answer_Vegani_1');
// CookieService.remove('answer_Vegani_2');
// CookieService.remove('answer_Vegani_3');

// CookieService.remove('answer_NoVegani_0');
// CookieService.remove('answer_NoVegani_1');
// CookieService.remove('answer_NoVegani_2');
// CookieService.remove('answer_NoVegani_3');


function App() {
    return (
        <div className="App">
            <>  
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route exact path="/questions/:id/:id" component={QuestionsPage} />
                        <Route exact path="/recipe/:id" component={RecipePage} />
                        <Route exact path="/algoritm/:id" component={Algoritm } />
                    </Switch>
                </Router>
            </>
        </div>
    );
}

export default App;
