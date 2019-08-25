import React, {Component} from 'react';
import './App.css';

export default class SignupBox extends Component {

    render() {
        const {title, headMessage, text, image} = this.props;
        return (
            <div className="container">
                <div className="container-header flex font-size-init">
                    <span>Founder Club  <span className="v-smalltext orange pd-2">{title}</span></span>
                </div>
                <div class="content pd-20" style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundPosition: "100% 100%", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                }}>
                    <a className="pd-r-80" href="">
                        <div className="smalltext bold text-white mg-b-10">{headMessage}</div>
                        <span className="smalltext semibold text-white">{text}</span>
                    </a>
                </div>
            </div>
        )
    }
}