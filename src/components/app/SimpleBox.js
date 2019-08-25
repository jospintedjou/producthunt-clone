import React, {Component} from 'react';
import './App.css';
import  img0 from "../../assets/images/img-001.gif";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const {image, name, desc, subscribers, nbSubscribers} = props.info;
    return (
        <div className="item">
            <a href="/" className="link">
                <img className="product-img" src={image}/>
                <div>
                    <div className="product-name">{name}</div>
                    <div className="product-desc smalltext text-grey">
                        {desc}
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
    )
};

const ItemVote = (props) => {
    const {image, name, desc, nbVotes, category, nbComments} = props.info;
    return (
        <div className="item flex">
            <a href="/" className="link">
                <img className="product-img" src={image}/>
                <div>
                    <div className="product-name">{name}</div>
                    <div className="product-desc smalltext text-grey">
                        {desc}
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
                                <a className="" href="/"><FontAwesomeIcon
                                    icon={faExternalLinkAlt}/></a>
                            </div>
                            <span className="l-h-25"> {category}</span>
                        </div>
                    </div>
                </div>
            </a>
            <div className="mg-l-a">
                <button className="button default voteButton">
                    <span className="flex-col al-center">
                        <div className="icon mg-l-4 pd-r-18"><FontAwesomeIcon fixedWidth="1em" size="2x" icon={faCaretUp}/></div>
                        <span>{nbVotes}</span>
                    </span>
                </button>
            </div>
        </div>
    )
};

class SimpleContainer extends Component {

    render() {
        const {headMessage, title, title2, withSubscribers, items} = this.props;
        return (
            <div className="container">
                <div className="container-header flex">
                    <span>{title} </span>
                    <span className="smalltext mg-l-5 text-grey"> {title2}</span>
                </div>
                <div class="content">
                    {headMessage != "" && headMessage != " " ?
                        <div className="content-title smalltext text-grey">
                            <span className="content-title-text">{headMessage}</span>
                        </div>
                        : null}
                    {withSubscribers ?
                        (<div class="content">
                                { items.map((info) => <Item info={info}/>) }
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
                        <div class="content">
                            {items.map(info => <ItemVote info={info}/>)}
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