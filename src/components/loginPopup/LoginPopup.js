import React, {Component} from 'react';
import '../app/App.css';
import './loginPopup.css';
import firebase from '../firebase';
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import logoImg from "../../assets/images/ph_logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class LoginPopup extends Component {
    constructor(props){
        super(props);
        this.state = {
          //  show: true,
        }
    }

  componentDidMount(){
        this.props.authListener();
        const nodes = document.getElementById('loginPopup').childNodes;
        nodes.forEach(
            (elt) => {
                if(elt.id !== "popup_inner") elt.addEventListener('click', this.props.closePopup);
            }
        );
  }

    render() {
        const {uiConfig} = this.props;
        return (
            <div>
                <div id="loginPopup" className='popup'>
                    <div className="close-popup" onClick={this.props.closePopup.bind(this)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div id="popup_inner" className='popup_inner'>
                        <img className="logo-img" src={logoImg}/>
                        <h4 className="al-center">Login to Product Hunt</h4>
                        <p className="text-grey al-center bottom-mess">We're a community of product people here to geek out
                            and discover new, interesting products.</p>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                    </div>
                </div>
            </div>
               );
    }
}

export default LoginPopup;