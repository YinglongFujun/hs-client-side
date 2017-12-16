import React from 'react';
import axios from 'axios';
import store from '../Redux/store';
import getApiUrl from '../Util/getApiUrl';

import {
    Link,
} from 'react-router-dom';

export default class NavBar extends React.Component {

    constructor() {
        super();
        this.state = {
            userIcon: '',
        }
    }

    async componentDidMount() {
        const response = await axios.get(getApiUrl('api', '/me?'));
        this.setState({
            userIcon: response.data.icon,
        }, () => {
            store.dispatch({
                type: 'UPDATE_USER_STACK',
                payload: response.data,
            });
        })
    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand">
                        <Link to={"/"}>HoovesSound</Link>
                    </span>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <div className="nav-link">
                                    <Link to={"/"}>Home</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to={"/favorite"}>Favorite</Link>
                                </div>
                            </li>

                        </ul>

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link" id="navbarDropdown" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    <img
                                        src={this.state.userIcon}
                                        alt="Your profile icon"
                                        style={{
                                            borderRadius: '50%',
                                            width: '3em',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <div className="nav-link">
                                        <Link to={"/logout"}>Logout</Link>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>

        )
    }
}