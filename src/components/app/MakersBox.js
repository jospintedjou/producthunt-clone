import React, {Component} from 'react';
import './App.css';


const RoundedImg = (props) => {
    const {image} = props.image;
    return (

        <div className="user-img-box">
            <img className="user-img hide" src={require('../../assets/images/hands-up.png')}
                 alt=""/>
            <img className="user-img" src={image} alt="maker picture"/>
        </div>
    )
};

class MakersBox extends Component {

    render() {
        const {title, items} = this.props;
        return (
            <div className="container">
                <div className="container-header flex font-size-init">
                    <span>{title}</span>
                </div>
                <div class="content pd-15">
                    <div className="img-container flex">
                        {items.map(img => <RoundedImg image={img}/>)}
                    </div>
                    <div className="container-foot single-line flex smalltext">
                        <a href="">JOIN THEM ON MAKERS</a>
                    </div>
                </div>
            </div>
        );
    }

}
export default MakersBox;