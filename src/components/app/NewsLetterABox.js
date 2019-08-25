import React, {Component} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandPointDown} from '@fortawesome/free-solid-svg-icons';

class NewsLetterABox extends Component {

    render(){
        const {title, text, image, headMessage} = this.props;
        return(
            <div className="container">
                <div className="container-header flex font-size-init">
                    <span>{title} </span>
                </div>
                <div class="content pd-20">
                    <a className="flex-col mg-b-20">
                        <div className="mg-b-10 img-h-110"
                             style={{backgroundImage: "url(" + image + ")"}} ></div>
                        <span className="product-name">{headMessage}</span>
                    </a>
                    <div>
                                    <span
                                        className="bold">{text} <span className="text-grey"><FontAwesomeIcon icon={faHandPointDown} /></span> </span>
                        <form>
                            <div className="mg-t-10">
                                <input className="input button-lg pd-l-10" placeholder="Your email"
                                       name="email" type="email"
                                       value=""/>
                            </div>
                            <button className="button button-lg orange wdth-100 mg-l-0 mg-t-10">
                                <span>SUBSCRIBE</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsLetterABox;