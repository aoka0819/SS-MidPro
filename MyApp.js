import Header from './Header';
import SignIn from './pages/SignIn';
import Chat from './pages/Chat';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function MyApp() {
    return (
        // *BrowserRouter包住Header是為了給底層用
        <Router>
            <Header />
            <Routes>
                <Route exact path='/sign' element={<SignIn />}/>
                <Route exact path='/chatroom' element={<Chat />}/>
            </Routes>
        </Router>
    );
}

export default MyApp;