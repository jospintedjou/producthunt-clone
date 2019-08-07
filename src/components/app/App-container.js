import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import DropdownMenu from './App-view';


class App extends Component {

    constructor() {
        super();
        //this.ref = firebase.firestore().collection('boards');
        this.state = {
            title: '',
            description: '',
            author: ''
        };

    }


    render() {
        const anchorRef = React.useRef < HTMLButtonElement > (null);
        // const [open, setOpen] = React.useState(false);
        function handleToggle() {
            // setOpen(prevOpen => !prevOpen);
        }

        function handleClose(event) {
            /*   if (anchorRef.current && anchorRef.current.contains(event)) {
             return;
             } */

            //setOpen(false);
        }

        return (
            <div className="main-app">
                <div className="header">
                    <div className="banner-in">
                        <a className="icon-link" href="/">
                            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                                          fill="#DA552F"></path>
                                    <path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                                          fill="#FFF"></path>
                                </g>
                            </svg>
                        </a>
                        <div className="search-block">
                            <form className="search-form" method="GET" action="/search">
                                <label className="">
						<span className="searchIcon">
							<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
								<path
                                    d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
                                    fill="#BBB" fillRule="evenodd"></path>
							</svg>
						</span>
                                    <div className="search-box">
                                        <input autoComplete="off" className="input" data-test="search-input" name="q"
                                               placeholder="Discover your next favorite thing…" value=""/>
                                    </div>
                                    <button className="close" type="reset">
							<span>
								<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
									<path
                                        d="M6 4.586l4.24-4.24a1 1 0 1 1 1.416 1.413L7.413 6l4.24 4.24a1 1 0 1 1-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 1 1 .344 10.24L4.587 6 .347 1.76A1 1 0 1 1 1.757.343L6 4.587z"
                                        fillRule="evenodd"></path>
								</svg>
							</span>
                                    </button>
                                </label>
                            </form>
                        </div>
                        <nav className="top-nav">
                            <ul>
                                <li><a href="/deals">Deals</a></li>
                                <li><a href="/jobs">Jobs</a></li>
                                <li><a href="/makers">Makers</a></li>
                                <li><a href="/radio">Radio</a></li>
                                <li><a href="/ships">Ships</a></li>
                                <li>
                                    <DropdownMenu/>
                                </li>
                            </ul>
                        </nav>
                        <div className="loginActions black">
                            <div className="signBtn">
                                <a className="button default" href="/login">LOG IN</a>
                                <a className="button orange" href="/login">SIGN UP</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-container">
                    <div className="main">
                        <div className="container">
                            <div className="container-header flex">
                                <span>Upcomming </span>
                                <span className="align-right"> powered by Ship</span>
                            </div>
                            <div class="content">
                                <div className="content-title">
                                    <span className="content-title-text">Follow and support your future favorite products.</span>
                                </div>
                                <div className="item">
                                    <a href="/" className="link">
                                        <img className="product-img" src={require('../../assets/images/img-001.gif')}/>
                                        <div>
                                            <div className="product-name">Gizer</div>
                                            <div className="product-desc smalltext text-grey">
                                                The Global Gaming Network for Mobile Esports
                                            </div>
                                            <div className="base-line flex">
                                                <div className="left flex">
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <span className="nb-subscribers smalltext text-grey"> have subscribe.</span>
                                                </div>
                                                <div className="right flex">
                                                    <span className="smalltext">SUBSCRIBE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="/" className="link">
                                        <img className="product-img" src={require('../../assets/images/img-001.gif')}/>
                                        <div>
                                            <div className="product-name">Gizer</div>
                                            <div className="product-desc smalltext text-grey">
                                                The Global Gaming Network for Mobile Esports
                                            </div>
                                            <div className="base-line flex">
                                                <div className="left flex">
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <span className="nb-subscribers smalltext text-grey"> have subscribe.</span>
                                                </div>
                                                <div className="right flex">
                                                    <span className="smalltext">SUBSCRIBE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container-foot flex smalltext">
                                    <a href="">VIEW ALL PRODUCTS</a>
                                    <div className="align-right">
                                        <span>Working on something?
                                        <a href="/">Discover Ship</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-right">I'am a sidebar
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
