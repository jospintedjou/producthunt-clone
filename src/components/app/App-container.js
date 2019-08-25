import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import  img0 from "../../assets/images/img-001.gif";
import signupImg from "../../assets/images/signup-promo.jpg";
import founderImg from "../../assets/images/ounder-club-sidebar-card.png.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import SimpleBox from './SimpleBox';
import MakersBox from "./MakersBox";
import RadioBox from "./RadioBox";
import NewsletterABox from "./NewsLetterABox";
import StoriesBox from "./StoriesBox";
import SignupBox from "./SignupBox";
import FounderBox from "./FounderBox";
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
        const stories = [
            {title: "How We Built a Million-Dollar YouTube Channel", text: "Jospin", image: img0},
            {title: "How We Built a Million-Dollar YouTube Channel", text: "Jospin", image: img0}];
        const hiringTeams = [{title: "Matter", text: "The future of professionnal feedback", image: img0},
            {title: "Matter", text: "The future of professionnal feedback", image: img0}];
        const discussions = [{
            title: "this idea will work out?", text: "", image: img0, nbVotes: "40", nbComments: "57"
        },
            {title: "this idea will work out?", text: "", image: img0, nbVotes: "20", nbComments: "27"}]
        return (
            <div className="main-app">
                <Header/>
                <div className="page-container">
                    <div className="main">
                        <SimpleBox withSubscribers={true} title="Upcomming" title2="powered by Ship" items={upcommings}
                                   headMessage="Follow and support your future favorite products."/>
                        {dailyProducts.map(products => <SimpleBox withSubscribers={false} title={products.title}
                                                                  title2=""
                                                                  items={products.items} headMessage=""/>)}

                    </div>
                    <aside className="sidebar-right flex mg-t-10">
                        <MakersBox title="Makers working today" items={makers}/>
                        <RadioBox title="Product Hunt Radio" link="http://google.fr" image={img0}
                                  text="Founder depression, “going independent,” and the future of podcasting"/>
                        <NewsletterABox title="Newsletter" headMessage="GOOGLE FINALLY made it"
                                        text="Get the best new products in your inbox, every day"
                                        image={img0}/>
                        <StoriesBox title="Latest Stories" items={stories} imgSize="medium"/>
                        <StoriesBox title="Team hiring now" items={hiringTeams} imgSize="small"/>
                        <StoriesBox title="Top Discussions" items={discussions} imgSize="rounded"/>
                        <SignupBox image={signupImg}/>
                        <FounderBox title="NEW" headMessage="Kickstart your startup" image={founderImg} text="Access to potentially $12,000+ worth of savings on tools and services"/>
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
