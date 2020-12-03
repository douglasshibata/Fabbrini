import React from 'react';
import { Widget } from 'rasa-webchat';
import './style.css'
import logo from './anamnaBot-logo.png'


export default function ChatBot() {

    return (
        <Widget
            selector={"#webchat"}
            interval={1000}
            customData={{ "language": "pt-BR" }}
            socketUrl={"https://a3a09d83cbb8.ngrok.io"}
            socketPath={"/socket.io/"}
            title={"Anamna Bot"}
            subtitle={"Digite 'Oi' para começarmos"}
            inputTextFieldHint={"Sua mensagem..."}
            connectingText={"Conectando..."}
            hideWhenNotConnected={true}
            fullScreenMode={true}
            showFullScreenButton={true}
            profileAvatar={logo}
	    openLauncherImage={logo}
            params={{
                images: {
                    dims: {
                        width: 250,
                        height: 200,
                    }
                },
                "storage": "session"
            }}
        />
    );
}