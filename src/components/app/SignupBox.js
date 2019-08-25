import React, {Component} from 'react';
import './App.css';

export default class SignupBox extends Component {

    render() {
        const {image} = this.props;
        return (
            <div className="container">
                <div className="content pd-20">
                    <a href="/" className="flex-col">
                        <div className="img-h-110"
                             style={{backgroundImage: "url(" + image + ")"}}> </div>
                    </a>
                    <div className="flex">
                        <a className="button button-lg default wdth-100 mg-l-0 mg-t-10"
                           href="/"><span>SIGNUP NOW</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}