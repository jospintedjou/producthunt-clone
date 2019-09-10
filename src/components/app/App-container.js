import React, {Component} from 'react';
import firebase from '../firebase';
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './App.css';
import  img0 from "../../assets/images/img-001.gif";
import signupImg from "../../assets/images/signup-promo.jpg";
import founderImg from "../../assets/images/ounder-club-sidebar-card.png.jpg";
import Header from './Header';
import SimpleBox from './SimpleBox';
import MakersBox from "./MakersBox";
import RadioBox from "./RadioBox";
import NewsletterABox from "./NewsLetterABox";
import StoriesBox from "./StoriesBox";
import SignupBox from "./SignupBox";
import FounderBox from "./FounderBox";
import FooterBox from './FooterBox';
import LoginPopup from '../loginPopup/LoginPopup';

class App extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('users');
        this.unsubscribe = null;
        this.isSignedIn = localStorage.getItem('user');
        this.signInOptions = {};
        this.uiConfig = {
          signInFlow : 'popup',
            signInOptions : [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            callbacks : {
              signInSuccess : () => false
            }
        };
        this.state = {
            user: {},
            products: [],
            upcommings: [
                {
                    name: "car",
                    description: "The Global Gaming Network for Mobile Esports",
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
                    description: "The Global Gaming Network for Mobile Esports",
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
                    description: "The Global Gaming Network for Mobile Esports",
                    image: img0,
                    category: 'Health andd fitness',
                    nbComments: 100,
                    nbVotes: 446,
                    subscribers: [{'link': 'http://google.fr', image: img0}, {
                        'link': 'http://google.fr',
                        image: img0
                    }, {'link': 'http://google.fr', image: img0}],
                    nbSubscribers: 80
                }],
            makers: [
                {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}, {image: img0}
            ],
            stories: [
                {title: "How We Built a Million-Dollar YouTube Channel", text: "Jospin", image: img0},
                {title: "How We Built a Million-Dollar YouTube Channel", text: "Jospin", image: img0}],
            hiringTeams: [{title: "Matter", text: "The future of professionnal feedback", image: img0},
                {title: "Matter", text: "The future of professionnal feedback", image: img0}],
            discussions: [{
                title: "this idea will work out?", text: "", image: img0, nbVotes: "40", nbComments: "57"
            },
                {title: "this idea will work out?", text: "", image: img0, nbVotes: "20", nbComments: "27"}]
        };

    }

    componentDidMount = () => {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        this.authListener();
    };

    authListener = () =>{
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user});
                localStorage.setItem('user', JSON.stringify(user));
            } else{
                this.setState({'user': null});
                localStorage.removeItem('user');
            }
        })
    };

    //Recuppère la collection de la BD et a charge dans le state "bords"
    onCollectionUpdate = (querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
            const {name, description, image, category, subscribers, nbSubscribers, nbVotes, nbComments } = doc.data();
            const items = [];

            items.push({
                key: doc.id,
                doc, // DocumentSnapshot
                name, description, image, category, subscribers, nbSubscribers, nbVotes, nbComments
            });
            products.push({title: "Today", items: items});
        });

        this.setState({ products : products });
    };

    render() {

        const upcommings = [
            {
                name: "car",
                description: "The Global Gaming Network for Mobile Esports",
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
                description: "The Global Gaming Network for Mobile Esports",
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
                description: "The Global Gaming Network for Mobile Esports",
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

      /*  const products = [{
            title: "Today",
            items: [{
                name: "Dabel",
                description: "Live audio streams that listened...",
                image: img0,
                category: 'iphone',
                nbComments: 100,
                nbVotes: 446,
                nbComments: 100,
                nbVotes: 446
            },
                {
                    name: "Dabel",
                    description: "Live audio streams that listened...",
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
                    description: "FlowReads desc desc desc desc desc desc desc",
                    image: img0,
                    category: 'Education',
                    nbComments: 9,
                    nbVotes: 6
                },
                    {
                        name: "Bayonga",
                        description: "Many things to discover",
                        image: img0,
                        category: 'Education',
                        nbComments: 9,
                        nbVotes: 7
                    }
                ]
            }]; */
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
            {title: "this idea will work out?", text: "", image: img0, nbVotes: "20", nbComments: "27"}];
        return (
            <div className="main-app">
                {this.state.isSignedIn
                    ? <div>USer signed in</div>
                    : null
                }
                <Header user={this.state.user} authListener={this.authListener} uiConfig={this.uiConfig} />
                <div className="page-container">
                    <div className="main">
                        <SimpleBox withSubscribers={true} title="Upcomming" title2="powered by Ship" items={this.state.upcommings}
                                   headMessage="Follow and support your future favorite products."/>
                        {this.state.products.map(products => <SimpleBox withSubscribers={false} title={products.title} title2=""
                                                                  items={products.items} headMessage=""/>)}

                    </div>
                    <aside className="sidebar-right flex mg-t-10">
                        <MakersBox title="Makers working today" items={this.state.makers}/>
                        <RadioBox title="Product Hunt Radio" link="http://google.fr" image={img0}
                                  text="Founder depression, “going independent,” and the future of podcasting"/>
                        <NewsletterABox title="Newsletter" headMessage="GOOGLE FINALLY made it"
                                        text="Get the best new products in your inbox, every day"
                                        image={img0}/>
                        <StoriesBox title="Latest Stories" items={this.state.stories} imgSize="medium"/>
                        <StoriesBox title="Team hiring now" items={this.state.hiringTeams} imgSize="small"/>
                        <StoriesBox title="Top Discussions" items={this.state.discussions} imgSize="rounded"/>
                        <SignupBox image={signupImg}/>
                        <FounderBox title="NEW" headMessage="Kickstart your startup" image={founderImg} text="Access to potentially $12,000+ worth of savings on tools and services"/>
                        <FooterBox />
                    </aside>

                </div>
            </div >
        )
    }
}

export default App;
