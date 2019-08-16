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
                                <span className="smalltext mg-l-5 text-grey"> powered by Ship</span>
                            </div>
                            <div class="content">
                                <div className="content-title smalltext text-grey">
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
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <span className="nb-subscribers smalltext text-grey"> have subscribe.</span>
                                                </div>
                                                <div className="right flex">
                                                    <span className="v-smalltext">SUBSCRIBE</span>
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
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
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
                                        <a href="/"> Discover Ship</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex">
                                <span>Today </span>
                                <span className="smalltext mg-l-5 text-grey"> powered by Ship</span>
                            </div>
                            <div class="content">
                                <div className="content-title smalltext text-grey">
                                    <span className="content-title-text">Follow and support your future favorite products.</span>
                                </div>
                                <div className="item flex">
                                    <a href="/" className="link">
                                        <img className="product-img" src={require('../../assets/images/img-001.gif')}/>
                                        <div>
                                            <div className="product-name">Gizer</div>
                                            <div className="product-desc smalltext text-grey">
                                                The Global Gaming Network for Mobile Esports
                                            </div>
                                            <div className="base-line flex">
                                                <div className="left flex">
                                                    <span className="nb-subscribers smalltext text-grey"> productivity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="mg-l-a">
                                        <button className="button default voteButton">
                                            <span className="icon mg-l-4"></span>
                                            <span>105</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="container-foot flex smalltext">
                                    <a href="">VIEW ALL PRODUCTS</a>
                                    <div className="align-right">
                                        <span>Working on something?
                                        <a href="/"> Discover Ship</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex">
                                <span>Yesterday </span>
                                <span className="smalltext mg-l-5 text-grey"> powered by Ship</span>
                            </div>
                            <div class="content">
                                <div className="content-title smalltext text-grey">
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
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <span className="nb-subscribers smalltext text-grey"> have subscribe.</span>
                                                </div>
                                                <div className="right flex">
                                                    <span className="v-smalltext">SUBSCRIBE</span>
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
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
                                                        </div>
                                                    </a>
                                                    <a href="" className="sub-link">
                                                        <div className="user-img-box">
                                                            <img className="user-img"
                                                                 src="https://via.placeholder.com/24" alt=""/>
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
                                        <a href="/"> Discover Ship</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="sidebar-right flex mg-t-10">
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Makers working today </span>
                            </div>
                            <div class="content pd-15">
                                <div><a href="" className="img-container flex">
                                    <div className="user-img-box">
                                        <img className="user-img hide" src={require('../../assets/images/hands-up.png')}
                                             alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                    <div className="user-img-box">
                                        <img className="user-img hide" src="https://via.placeholder.com/24" alt=""/>
                                        <img className="user-img" src="https://via.placeholder.com/24" alt=""/>
                                    </div>
                                </a></div>
                                <div className="container-foot single-line flex smalltext">
                                    <a href="">JOIN THEM ON MAKERS</a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Product Hunt Radio </span>
                            </div>
                            <div class="content mg-b-10">
                                <div>
                                    <a href="" className="flex">
                                        <div className="flex h-85">
                                            <div className="pd-10 f-w-600 text-black smalltext">
                                                Founder depression, “going independent,” and the future of podcasting
                                            </div>
                                            <div>
                                                <img className="user-img hg-100-pc" src="https://via.placeholder.com/85"
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex v-smalltext text-grey flex-end">
                                <span>Sponsored by</span> <img className="user-img hg-100-pc mg-l-10"
                                                               src="https://via.placeholder.com/50x14" alt=""/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Newsletter </span>
                            </div>
                            <div class="content pd-20">
                                <a className="flex-col mg-b-20">
                                    <div className="mg-b-10 img-h-110"
                                         style={{backgroundImage: "url(" + "'https://via.placeholder.com/288x110'" + ")"}}></div>
                                    <span className="product-name">GOOGLE FINALLY made it</span>
                                </a>
                                <div>
                                    <span
                                        className="bold">Get the best new products in your inbox, every day <span>👇</span> </span>
                                    <form>
                                        <div className="mg-t-10">
                                            <input className="input button-lg pd-l-10" placeholder="Your email"
                                                   name="email" type="email"
                                                   value=""/>
                                        </div>
                                        <button className="button button-lg orange wdth-100 mg-l-0 mg-t-10"><span>SUBSCRIBE</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Latest Stories </span>
                            </div>
                            <div class="content pd-l-15 pd-r-15">
                                <div className="item pd-l-0 pd-r-0">
                                    <a href="/" className="link">
                                        <div>
                                            <div className="smalltext semibold text-black">How We Built a Million-Dollar
                                                YouTube Channel
                                            </div>
                                            <div className="product-desc smalltext text-grey">
                                                By Jospin
                                            </div>
                                        </div>
                                        <img className="img-60 mg-l-20"
                                             src={require('../../assets/images/img-001.gif')}/>
                                    </a>
                                </div>
                                <div className="item pd-l-0 pd-r-0">
                                    <a href="/" className="link">
                                        <div>
                                            <div className="smalltext semibold text-black">How We Built a Million-Dollar
                                                YouTube Channel
                                            </div>
                                            <div className="product-desc smalltext text-grey">
                                                By Jospin
                                            </div>
                                        </div>
                                        <img className="img-60 mg-l-20"
                                             src={require('../../assets/images/img-001.gif')}/>
                                    </a>
                                </div>
                                <div className="container-foot single-line flex smalltext">
                                    <a href="">READ MORE STORIES</a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Team hiring now </span>
                            </div>
                            <div class="content pd-l-15 pd-r-15">
                                <div className="item pd-l-0 pd-r-0">
                                    <a href="/" className="link">
                                        <div>
                                            <div className="smalltext semibold text-black">InVision
                                            </div>
                                            <div className="product-desc smalltext text-grey">
                                                The digital product design platform
                                            </div>
                                        </div>
                                        <img className="img-40 mg-l-a"
                                             src="https://via.placeholder.com/40"/>
                                    </a>
                                </div>
                                <div className="item pd-l-0 pd-r-0">
                                    <a href="/" className="link">
                                        <div>
                                            <div className="smalltext semibold text-black">InVision
                                            </div>
                                            <div className="product-desc smalltext text-grey">
                                                The digital product design platform
                                            </div>
                                        </div>
                                        <img className="img-40 mg-l-a"
                                             src="https://via.placeholder.com/40"/>
                                    </a>
                                </div>
                                <div className="container-foot single-line flex smalltext">
                                    <a className="text-black" href="/">VIEW ALL JOBS</a><a className="pd-l-20" href="">POST
                                    A JOB</a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Top Discussions </span>
                            </div>
                            <div class="content pd-l-15 pd-r-15">
                                <div className="item pd-l-0 pd-r-0">
                                    <a href="/" className="link">
                                        <div>
                                            <div className="pd-r-5 smalltext semibold text-black">
                                                How do you convince yourself "this idea" will work out?
                                            </div>
                                        </div>
                                        <img className="img-30 img-round mg-l-a"
                                             src="https://via.placeholder.com/30"/>
                                    </a>
                                    <div className="base-line flex v-smalltext text-grey">
                                        <div className="left flex">
                                            <span>
                                                <svg width="9" height="8" viewBox="0 0 9 8"
                                                     xmlns="http://www.w3.org/2000/svg" class="upvoteIcon_f942d"><path
                                                    d="M9 8H0l4.5-8L9 8z" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="mg-l-2">42</span>
                                            </span>
                                            <a className="mg-l-20" href="">
                                                <svg width="12" height="11" viewBox="0 0 12 11"
                                                     xmlns="http://www.w3.org/2000/svg" class="commentIcon_f39d0">
                                                    <path
                                                        d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z"
                                                        fill="#FFF" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="mg-l-2">30</span>
                                            </a>
                                            <a className="mg-l-20" href="">
                                                <svg width="10" height="10" viewBox="0 0 10 10"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.334 9l.778-.778L2.89 6H6c1.834 0 3.334-1.5 3.334-3.333V1H8.223v1.667c0 1.222-1 2.222-2.222 2.222H2.89l2.222-2.222-.778-.778-3.167 3.167a.537.537 0 0 0 0 .777L4.334 9z"
                                                        stroke="#999" fill="#999" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="mg-l-2">Reply</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item pd-l-0 pd-r-0">
                                    <a href="/" className="link">
                                        <div>
                                            <div className="pd-r-5 smalltext semibold text-black">
                                                How do you convince yourself "this idea" will work out?
                                            </div>
                                        </div>
                                        <img className="img-30 img-round mg-l-a"
                                             src="https://via.placeholder.com/30"/>
                                    </a>
                                    <div className="base-line flex v-smalltext text-grey">
                                        <div className="left flex">
                                            <span>
                                                <svg width="9" height="8" viewBox="0 0 9 8"
                                                     xmlns="http://www.w3.org/2000/svg" class="upvoteIcon_f942d"><path
                                                    d="M9 8H0l4.5-8L9 8z" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="mg-l-2">42</span>
                                            </span>
                                            <a className="mg-l-20" href="">
                                                <svg width="12" height="11" viewBox="0 0 12 11"
                                                     xmlns="http://www.w3.org/2000/svg" class="commentIcon_f39d0">
                                                    <path
                                                        d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z"
                                                        fill="#FFF" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="mg-l-2">30</span>
                                            </a>
                                            <a className="mg-l-20" href="">
                                                <svg width="10" height="10" viewBox="0 0 10 10"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.334 9l.778-.778L2.89 6H6c1.834 0 3.334-1.5 3.334-3.333V1H8.223v1.667c0 1.222-1 2.222-2.222 2.222H2.89l2.222-2.222-.778-.778-3.167 3.167a.537.537 0 0 0 0 .777L4.334 9z"
                                                        stroke="#999" fill="#999" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="mg-l-2">Reply</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-foot single-line flex smalltext">
                                    <a href="">VIEW MORE DISCUSSIONS</a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Untitled </span>
                            </div>
                            <div class="content pd-20">
                                <a className="flex-col">
                                    <div className="img-h-110"
                                         style={{backgroundImage: "url(" + "'https://via.placeholder.com/278x114'" + ")"}}></div>
                                </a>
                                <div className="flex">
                                    <a className="button button-lg default wdth-100 mg-l-0 mg-t-10" href="/"><span>SIGNUP NOW</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-header flex font-size-init">
                                <span>Founder Club  <span className="v-smalltext orange pd-2">NEW</span></span>
                            </div>
                            <div class="content pd-20" style={{
                                backgroundImage: "url(" + require("../../assets/images/ounder-club-sidebar-card.png.jpg") + ")",
                                backgroundPosition: "100% 100%", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                            }}>

                                <a className="pd-r-80" href="">
                                    <div className="smalltext bold text-white mg-b-10">Kickstart your startup</div>
                                    <span className="smalltext semibold text-white">Access to potentially $12,000+ worth of savings on tools and services</span>
                                </a>

                            </div>
                        </div>
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
                    </aside>

                </div>
            </div>
        )
    }
}

export default App;
