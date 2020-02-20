/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class Cart extends Component {

    componentDidMount() {
        const options = {
           edge: 'right',
           draggable : true,
           inDuration: 250,
           outDuration : 200,
           preventScrolling : true
        };
        M.Sidenav.init(this.Sidenav, options);
      };


    render() {
        return (
            <React.Fragment>
            <ul id="slide-out"
             className="sidenav"
             ref={Sidenav => {
                    this.Sidenav = Sidenav;
                }}
             >
                    <li>
                        <div className="user-view">
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <FontAwesomeIcon 
                className="fa-2x cursor sidenav-trigger"
                icon={faShoppingCart}
                data-target="slide-out"
            />
        </React.Fragment>
        );
       
    }
}

export default Cart;