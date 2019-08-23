import React, {Component} from 'react';
import './App.css';
import DropdownMenu from './App-view';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="banner-in">
                    <a className="icon-link" href="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                                      fill="#DA552F"></path>
                                <path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                                      fill="#FFF"></path>
                            </g>
                        </svg>
                    </a>
                    <div className="search-block">
                        <form className="search-form" method="GET" action="/search">
                            <label className="">
						<span className="searchIcon">
							<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
								<path
                                    d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
                                    fill="#BBB" fillRule="evenodd"></path>
							</svg>
						</span>
                                <div className="search-box">
                                    <input autoComplete="off" className="input" data-test="search-input" name="q"
                                           placeholder="Discover your next favorite thing…" value=""/>
                                </div>
                                <button className="close" type="reset">
							<span>
								<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
									<path
                                        d="M6 4.586l4.24-4.24a1 1 0 1 1 1.416 1.413L7.413 6l4.24 4.24a1 1 0 1 1-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 1 1 .344 10.24L4.587 6 .347 1.76A1 1 0 1 1 1.757.343L6 4.587z"
                                        fillRule="evenodd"></path>
								</svg>
							</span>
                                </button>
                            </label>
                        </form>
                    </div>
                    <nav className="top-nav">
                        <ul>
                            <li><a href="/deals">Deals</a></li>
                            <li><a href="/jobs">Jobs</a></li>
                            <li><a href="/makers">Makers</a></li>
                            <li><a href="/radio">Radio</a></li>
                            <li><a href="/ships">Ships</a></li>
                            <li>
                                <DropdownMenu/>
                            </li>
                        </ul>
                    </nav>
                    <div className="loginActions black">
                        <div className="signBtn">
                            <a className="button default" href="/login">LOG IN</a>
                            <a className="button orange" href="/login">SIGN UP</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Header;