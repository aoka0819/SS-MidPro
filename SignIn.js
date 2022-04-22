import React from 'react';
import {Menu, Form, Container, Button, Message} from 'semantic-ui-react';
import firebase from '../firebase';
import 'firebase/compat/auth';
import {useNavigate} from 'react-router-dom';



function SignIn() {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = React.useState('signIn');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errMsg, setErrMsg] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    function onSubmit() {
        setLoading(true);
        if(activeItem == 'signUp') {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                setErrMsg('');
                navigate('/');
                setLoading(false);
            })
            .catch((e) => {
                if(e.code == 'auth/email-already-in-use') {
                    setErrMsg('Email already in use.');
                } else if(e.code == 'auth/invalid-email') {
                    setErrMsg('Invalid email format.');
                } else if(e.code == 'auth/weak-password') {
                    setErrMsg('Weak password.');
                } else {
                    setErrMsg('Unknown error: ' + e.code);
                }
                setLoading(false);
            });
        } else if(activeItem == 'signIn') {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setErrMsg('');
                navigate('/');
                setLoading(false);
            })
            .catch((e) => {
                if(e.code == 'auth/invalid-email') {
                    setErrMsg('Invalid email format.');
                } else if(e.code == 'auth/user-not-found') {
                    setErrMsg('User not found.');
                } else if(e.code == 'auth/wrong-password') {
                    setErrMsg('Wrong password.');
                } else {
                    setErrMsg('Unknown error: ' + e.code);
                }
                setLoading(false);
            });
        }
    }
    return (
        <Container>
            <Menu widths={'2'}>
                <Menu.Item active={activeItem == 'signIn'}
                    onClick={() => {
                        setActiveItem('signIn');
                        setErrMsg('');
                    }}>
                    Sign In
                </Menu.Item>
                <Menu.Item active={activeItem == 'signUp'}
                    onClick={() => {
                        setActiveItem('signUp');
                        setErrMsg('');
                    }}>
                    Sign Up
                </Menu.Item>
            </Menu>
            <Form>
                <Form.Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label='Email'
                    placeholder='type Email here'/>
                <Form.Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    type='password'
                    placeholder='type Password here'/>
                {errMsg && <Message negative>{errMsg}</Message>}
                <Button loading={loading} onClick={() => onSubmit()}>Submit</Button>
            </Form>
        </Container>
    );
}

export default SignIn;