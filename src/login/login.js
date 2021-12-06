import React, { useState, useContext} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Context } from '../context/context';

const clientId = "462358266969-jnq7395vs945k1nqcedov83pg49anhri.apps.googleusercontent.com";
function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [context, setContext] = useContext(Context);

    const onLoginSuccess = (res) => {
        
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setContext(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    }; 

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;

function sendRequest(method, url, body){
    const headers = {
        'Content-Type': 'app/user'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers = headers
    }).then(response => {
        return response.json();
    });
}