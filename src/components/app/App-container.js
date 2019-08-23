import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import  img0 from "../../assets/images/img-001.gif";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import SimpleBox from './SimpleBox';
import MakersBox from "./MakersBox";
import RadioBox from "./RadioBox";
import NewsletterABox from "./NewsLetterABox";

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

        const upcommings = [
            {
                name: "car",
                desc: "The Global Gaming Network for Mobile Esports",
                image: img0,
                category: 'Education',
                subscribers: [{'link': 'http://google.fr', image: img0}, {
                    'link': 'http://google.fr',
                    image: img0
                }, {'link': 'http://google.fr', image: img0}],
                nbSubscribers: 245
            },
            {
                name: "Bus",
                desc: "The Global Gaming Network for Mobile Esports",
                image: img0,
                category: 'Develppers Tools',
                subscribers: [{'link': 'http://google.fr', image: img0}, {
                    'link': 'http://google.fr',
                    image: img0
                }, {'link': 'http://google.fr', image: img0}],
                nbSubscribers: 150
            },
            {
                name: "Tech",
                desc: "The Global Gaming Network for Mobile Esports",
                image: img0,
                category: 'Health andd fitness',
                nbComments: 100,
                nbVotes: 446,
                subscribers: [{'link': 'http://google.fr', image: img0}, {
                    'link': 'http://google.fr',
                    image: img0
                }, {'link': 'http://google.fr', image: img0}],
                nbSubscribers: 80
            }];

        const dailyProducts = [{
                title: "Today",
                items: [{
                    name: "Dabel",
                    desc: "Live audio streams that listened...",
                    image: img0,
                    category: 'iphone',
                    nbComments: 100,
                    nbVotes: 446,
                    nbComments: 100,
                    nbVotes: 446
                },
                    {
                        name: "Dabel",
                        desc: "Live audio streams that listened...",
                        image: img0,
                        category: 'iphone',
                        nbComments: 100,
                        nbVotes: 446,
                        nbComments: 100,
                        nbVotes: 446
                    }]
            },
            {
                title: "Yesterday",
                items: [{
                    name: "FlowReads",
                    desc: "FlowReads desc desc desc desc desc desc desc",
                    image: img0,
                    category: 'Education',
                    nbComments: 9,
                    nbVotes: 6
                },
                    {
                        name: "Bayonga",
                        desc: "Many things to discover",
                        image: img0,
                        category: 'Education',
                        nbComments: 9,
                        nbVotes: 7
                    }
                ]
            }];
        const makers = [
            {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}
        ];
        return (
            <div className="main-app">
                <Header/>
                <div className="page-container">
                    <div className="main">
                        <SimpleBox withSubscribers="yes" title="Upcomming" title2="powered by Ship" items={upcommings}
                                   headMessage="Follow and support your future favorite products."/>
                        {dailyProducts.map(products => <SimpleBox withSubscribers="no" title={products.title} title2=""
                                                                  items={products.items} headMessage=""/>)}

                    </div>
                    <aside className="sidebar-right flex mg-t-10">
                        <MakersBox title="Makers working today" items={makers}/>
                        <RadioBox title="Product Hunt Radio" link="http://google.fr" image={img0}
                                  text="Founder depression, “going independent,” and the future of podcasting"/>
                        <NewsletterABox title="Newsletter" headMessage="GOOGLE FINALLY made it" text="Get the best new products in your inbox, every day"
                        image={img0} />

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
                                    <a className="button button-lg default wdth-100 mg-l-0 mg-t-10"
                                       href="/"><span>SIGNUP NOW</span>
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
            </
                div >
        )
    }
}

export default App;
