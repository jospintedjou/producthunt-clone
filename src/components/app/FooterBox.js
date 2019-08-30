import React, {Component} from 'react';

export default class FooterBox extends Component {
    render() {

        return (

            <div className="container v-smalltext italic text-grey mg-b-20">
                <ul className="flex flex-wrap pd-l-0">
                    <li><a className="mg-l-5" href="/">Blog&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Newsletter&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Apps&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">About&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">FAQ&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Terms&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Privacy and Cookies&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Twitter&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Facebook&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Instagram&nbsp;.</a></li>
                    <li><a className="mg-l-5" href="/">Advertise&nbsp;.</a></li>
                </ul>
                <div>&copy; 2019 PRODUCT HUNT</div>
            </div>
        );

    }
}