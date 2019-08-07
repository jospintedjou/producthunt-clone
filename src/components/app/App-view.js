import React, { Component } from 'react';

export default class DropdownMenu extends Component {
    constructor(){
        super();
        this.state = {show : false};
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e){
        e.preventDefault();
        this.setState({ show: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu(e){
        console.log('close');
        this.setState({ show: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    render() {
        const {show} = this.state;
        return (
            <div>
                <button onClick={this.showMenu.bind(this)}>
                    ...
                </button>
                {show ?
                    (< div className="menu">
                    <button> Menu item 1 </button>
                    <button> Menu item 2 </button>
                    <button> Menu item 3 </button>
                    </div>)
                    : ("")
                }
            </div>
        );
    }
}