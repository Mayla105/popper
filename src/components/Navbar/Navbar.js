import React from 'react';

import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      ulOculta: 'true'
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e){
    if(this.state.ulOculta === 'true'){
      this.setState({
        ulOculta: 'false'
      });
    } else {
      this.setState({
        ulOculta: 'true'
      });
    }
  }

  handleMouseEnter(e){
      e.target.className='li-activo';
  }

  handleMouseLeave(e){
      e.target.className='';
  }


  render(){
    return (
      <div className="navbar-container">
        <div className="navbar-wrap">
          <Link to='/'> <a className="brand">Calvin Clein</a> </Link>

          <ul className="ul-activa">
            <Link to='/'> <a className="" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>MEN</a> </Link>
            <Link to='/women'> <a className="" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>WOMEN</a> </Link>
            <Link to='/shop'> <a className="" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>SHOP</a> </Link>
          </ul>

          <ul className={this.state.ulOculta === 'true' ? 'ul-oculta' : 'ul-oculta-visible'} id='menu-alt' >
            <Link to='/'> <li className="">MEN</li> </Link>
            <Link to='/women'> <li className="">WOMEN</li> </Link>
            <Link to='/shop'> <li className="">SHOP</li> </Link>
          </ul>

          <div className="navbar-icons">
            <Link to='/cart'>
              <i className="fas fa-shopping-cart fa-lg"></i>
            </Link>

            <Link to='/'>
              <i className="fas fa-bars fa-lg" id="menu" onClick={this.handleMenuClick}></i>
            </Link>
          </div>

        </div>
      </div>
    );
  }

}

export default Navbar;
