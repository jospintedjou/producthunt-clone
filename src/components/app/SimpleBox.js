import React, {Component} from 'react';
import './App.css';
import  img1 from "../../assets/images/356c8e7f-4928-44c1-875f-9abb387978ef.gif";
import firebase from '../firebase';
import 'firebase/storage';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseOn : false
        }
    }

    render() {
        const {image, name, description, category, nbVotes, subscribers, nbSubscribers} = this.props.info;
        return (
            <div className="item flex" onMouseOut={this.props.handleMouseOut.bind(this)} onMouseOver={this.props.handleMouseOn.bind(this)}>
                <a href="/" className="link">
                    <img className="product-img" src={image}/>
                    <div>
                        <div className="product-name">{name}</div>
                        <div className="product-desc smalltext text-grey">
                            {description}
                        </div>
                        <div className="base-line flex">
                            <div className="left flex">
                                {subscribers.map((sub) => {
                                    return (
                                        <a href={sub.link} className="sub-link">
                                            <div className="user-img-box">
                                                <img className="user-img h-24"
                                                     src={sub.image} alt=""/>
                                            </div>
                                        </a>
                                    );
                                })}
                                <span className="nb-subscribers smalltext text-grey"><span>{nbSubscribers}</span>  <span
                                    className="mg-l-5">subscribers.</span> </span>
                            </div>
                            <div className="right flex">
                                <span className="v-smalltext">SUBSCRIBE</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
};

class ItemVote extends Component {
    render() {
        const {image, name, description, nbVotes, category, nbComments} = this.props.info;
        return (
            <div className="item flex" onMouseOut={this.props.handleMouseOut.bind(this)} onMouseOver={this.props.handleMouseOn.bind(this)}>
                <a href="/" className="link">
                    <img className="product-img" src={img1}/>
                    <div>
                        <div className="product-name">{name}</div>
                        <div className="product-desc smalltext text-grey">
                            {description}
                        </div>
                        <div className="base-line flex v-smalltext text-grey">
                            <div className="left flex">
                        <span
                            className="button default text-grey l-h-25 mg-l-0 mg-r-10 small-size">
                            <FontAwesomeIcon icon={faComment}/>
                            <span className="mg-l-5">{nbComments}</span>
                        </span>
                        <div
                            className="button  default text-grey mg-l-0 small-size l-h-25 mg-r-10">
                            <a className="" href="/">
                                <FontAwesomeIcon className="ext-link hide" icon={faExternalLinkAlt}/>
                            </a>
                        </div>
                         <span className="l-h-25"> {category.name}</span>
                     </div>
                    </div>
                    </div>
                </a>
                <div className="mg-l-a">
                    <button className="button default voteButton">
                    <span className="flex-col al-center">
                        <div className="icon mg-l-4 pd-r-18"><FontAwesomeIcon fixedWidth="1em" size="2x"
                                                                              icon={faCaretUp}/></div>
                        <span>{nbVotes}</span>
                    </span>
                    </button>
                </div>
            </div>
        )
    }
};

class SimpleContainer extends Component {
    handleMouseOn = (e) => {
        this.setState({mouseOn: true});
        e.target.style.background = "#f3f3f385";
        let extLink = e.target.getElementsByClassName("ext-link");
        if( extLink[0] != undefined){
            extLink[0].style.display = "inline-block";
        }
       // e.target.getElementsByClassName('ext-link').style.display = "flex";
    };
    handleMouseOut = (e) => {
        this.setState({mouseOn: false});
        e.target.style.background = "transparent";
        //e.target.getElementsByClassName('ext-link').style.display = "transparent";
        let extLink = e.target.getElementsByClassName("ext-link");
        if( extLink[0] != undefined){
            extLink[0].style.display = "none";
        }

    };
    render() {
        const {headMessage, title, title2, withSubscribers, items} = this.props;
        return (
            <div className="container">
                <div className="container-header flex">
                    <span>{title} </span>
                    <span className="smalltext mg-l-5 text-grey"> {title2}</span>
                </div>
                <div className="content">
                    {headMessage != "" && headMessage != " " ?
                        <div className="content-title smalltext text-grey">
                            <span className="content-title-text">{headMessage}</span>
                        </div>
                        : null}
                    {withSubscribers ?
                        (<div className="content">
                                { items.map((info) => <Item info={info} handleMouseOut={this.handleMouseOut.bind(this)}
                                                            handleMouseOn={this.handleMouseOn.bind(this)}/>) }
                                <div className="container-foot flex smalltext">
                                    <a href="">VIEW ALL PRODUCTS</a>
                                    <div className="align-right">
                        <span>Working on something?
                        <a href="/"> Discover Ship</a></span>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <div className="content">
                            {items.map(info => <ItemVote info={info} handleMouseOut={this.handleMouseOut.bind(this)}
                                                         handleMouseOn={this.handleMouseOn.bind(this)}/>)}
                            <div className="container-foot single-line flex font text-grey pd-15">
                                <a href="" className="text-grey">
                                    <span className="mg-r-5 f-s-2em"><FontAwesomeIcon icon={faAngleDown}/></span> SHOW
                                    MORE</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SimpleContainer;