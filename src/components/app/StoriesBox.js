import React, {Component} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons';

const ItemR = (props) => {
    const {title, text, image, nbVotes, nbComments} = props.info;
    const {imgSize} = props;
    return (
        <div className="item pd-l-0 pd-r-0">
            <a href="/" className="link">
                <div className="mg-r-3">
                    <div className="smalltext semibold text-black">{title}
                    </div>
                    <div className="product-desc smalltext text-grey">
                        {imgSize === "medium" ? "By" : null} {text}
                    </div>
                </div>
                <img
                    className={"mg-l-a " + (imgSize === "rounded" ? "img-30 img-round" : imgSize === "small" ? "img-40"
                        : imgSize === "medium" ? "img-60" : null)}
                    src={image}/>
            </a>
            {imgSize==="rounded" ?
                <div className="base-line flex v-smalltext text-grey">
                    <div className="left flex">
                                            <span className="text-grey">
                                               <FontAwesomeIcon size="14px" icon={faCaretUp} />
                                                <span className="mg-l-4">{nbVotes}</span>
                                            </span>
                        <a className="mg-l-20 text-grey" href="">
                           <FontAwesomeIcon icon={faComment}/>
                            <span className="mg-l-2">{nbComments}</span>
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
            : null}
        </div>
    );
}
export default class StoriesBox extends Component {
    render() {
        const {title, items, imgSize} = this.props;
        return (
            <div className="container">
                <div className="container-header flex font-size-init">
                    <span>{title} </span>
                </div>
                <div class="content pd-l-15 pd-r-15">
                    {items.map(info => <ItemR imgSize={imgSize} info={info}/>)}
                    {imgSize === "small" ?
                        <div className="container-foot single-line flex smalltext">
                            <a className="text-black" href="/">VIEW ALL JOBS</a><a className="pd-l-20" href="">POST
                            A JOB</a>
                        </div>
                        : imgSize === "medium"
                            ? <div className="container-foot single-line flex smalltext">
                                <a href="">READ MORE STORIES</a></div>
                            : imgSize === "rounded"
                                ? <div className="container-foot single-line flex smalltext">
                                    <a href="">READ MORE DISCUSSIONS</a>
                                </div>
                                : null
                    }
                </div>
            </div>
        );
    }
}