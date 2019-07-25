import React, { Component } from 'react'
import {Link} from 'gatsby'
import Logo from '../../images/logo.png'
import {FaCartArrowDown} from 'react-icons/fa'

export default class Navbar extends Component {
    state={
        navbarState:false,
        navbarClass:"collapse navbar-collapse",
        menus:[{
            id:"1",
            text:"Home",
            URL:'/'
        },{
        id:"2",
        text:"About",
        URL:'/about'
        },{
            id:"3",
            text:"Services",
            URL:'/services'
        },{
            id:"4",
            text:"Contact",
            URL:'/contact'
        }]
    }

    navbarToggler=()=>{
        if(this.state.navbarState){
            this.setState({
                navbarState:false,
                navbarClass:"collapse navbar-collapse",

            });

        }
        else{
            this.setState({
                navbarState:true,
                navbarClass:"collapse navbar-collapse show",
            });
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={Logo} alt="Logo" width="40px" />
                </Link>
                <button className="navbar-toggler" onClick={this.navbarToggler} type="button">
                    <span className="text-white">Menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu =>{
                            return(
                                <li key={menu.id} className="nav-item">
                                <Link to={menu.URL} className="nav-link text-white">
                                    {menu.text}
                                </Link>
                                </li>
                            )
                        })}

                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                <FaCartArrowDown className="cart-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
