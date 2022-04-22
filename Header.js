import {Menu, Search} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import React from 'react';
import firebase from './firebase';

function Header() {
    const [user, setUser] = React.useState(null);
    // user sign in/ out event
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((curUser) => {
            setUser(curUser);
        });
    }, []);

    return (
        <Menu>
            <Menu.Item>MyChat</Menu.Item>
            <Menu.Item>
                <Search />
            </Menu.Item>
            <Menu.Menu position='right'>
                { user ? (
                    <>
                        <Menu.Item as={Link} to='/chatroom'>
                            ChatRoom
                        </Menu.Item>
                        <Menu.Item as={Link} to='/myprofile'>
                            My Profile
                        </Menu.Item>
                        <Menu.Item onClick={() => firebase.auth().signOut()}>
                            Sign Out
                        </Menu.Item>
                    </>
                ) : (
                    <Menu.Item as={Link} to='/sign'>
                        Sign Up / Sign In
                    </Menu.Item>
                )}
            </Menu.Menu>
        </Menu>
    );
}

export default Header;