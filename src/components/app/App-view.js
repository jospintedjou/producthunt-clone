import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

export default class DropdownMenu extends Component {
    constructor() {
        super();
        this.state = {show: false};
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({show: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(e) {
        this.setState({show: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        const {show} = this.state;
        return (
            <div className="pointer">
                <span className="text-grey smalltext" onClick={this.showMenu.bind(this)}>
                    <FontAwesomeIcon icon={faEllipsisH}/>
                </span>
                {
                    show ?
                        (<ul className="dropdown-menu">
                                <li> ASK</li>
                                <li> UPCOMMING</li>
                                <li> COLLECTIONS</li>
                                <li> TOPICS</li>
                                <li> NEWSLETTER</li>
                                <li> TIME TRAVEL</li>
                                <li> ADVERTISE</li>
                                <li> POST A JOB</li>
                                <li> PROMOTED PRODUCTS</li>
                                <li> EVENTS</li>
                        </ul>)
                        : ("")
                }
            </div>
        );
    }
}