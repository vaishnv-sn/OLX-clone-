import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext, firebaseContext } from './store/Context';

/* =====Import Components===== */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Post from './store/postContext';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
    const { setUser } = useContext(AuthContext);
    const { firebase } = useContext(firebaseContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });
    });

    return (
        <div>
            <Post>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/view" element={<View />} />
                        {/* <Route path="/create" component={Create} /> */}
                        <Route element={<PrivateRoutes />}>
                            <Route path="/create" element={<Create />} />
                        </Route>
                    </Routes>
                </Router>
            </Post>
        </div>
    );
}

export default App;
