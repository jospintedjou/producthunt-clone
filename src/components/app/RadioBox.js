import React, {Component} from 'react';
import './App.css';

class RadioBox extends Component {

    render() {
        const {title, text, image, link} = this.props;
        return (
            <div className="container">
                <div className="container-header flex font-size-init">
                    <span>{title} </span>
                </div>
                <div class="content mg-b-10">
                    <div>
                        <a href={link} className="flex">
                            <div className="flex h-85">
                                <div className="pd-10 f-w-600 text-black smalltext">
                                    {text}
                                </div>
                                <div>
                                    <img className="user-img hg-100-pc" src={image} alt=""/>
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
        );
    }
}

export default RadioBox;