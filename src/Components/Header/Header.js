import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { user } = useContext(AuthContext);
    const { firebase } = useContext(firebaseContext);
    const navigate = useNavigate();

    const logoutHandle = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate('/login');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div
                    onClick={() => {
                        navigate('/');
                    }}
                    className="brandName"
                >
                    <OlxLogo></OlxLogo>
                </div>
                <div className="placeSearch">
                    <Search></Search>
                    <input type="text" />
                    <Arrow></Arrow>
                </div>
                <div className="productSearch">
                    <div className="input">
                        <input type="text" placeholder="Find car,mobile phone and more..." />
                    </div>
                    <div className="searchAction">
                        <Search color="#ffffff"></Search>
                    </div>
                </div>
                <div className="language">
                    <span> ENGLISH </span>
                    <Arrow></Arrow>
                </div>
                <div onClick={() => navigate('/login')} className="loginPage">
                    <span>{user ? `Hi ${user.displayName}` : 'Login'}</span>
                    <hr />
                </div>
                <span onClick={logoutHandle}>{user && 'Logout'}</span>
                <div className="sellMenu">
                    <SellButton></SellButton>
                    <div onClick={() => navigate('/create')} className="sellMenuContent">
                        <SellButtonPlus></SellButtonPlus>
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
