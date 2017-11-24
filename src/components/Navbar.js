import React from 'react';
import Auth from '../adapters/Auth';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  // console.log("object in navbar", currentUser)

  const logLinks = props.authenticated ?

      <Menu.Menu position='right'>
        <NavLink className='item nav-item' to='/profile'>{props.currentUser}</NavLink>
        <NavLink className='item nav-item' activeClassName='' to ='/' onClick={Auth.logOut}>Log Out</NavLink>
      </Menu.Menu> :

      <Menu.Menu position='right'>
        <NavLink className='item nav-item' to='/signup'>Sign Up</NavLink>
        <NavLink className='item nav-item' to='/login'>Login</NavLink>
      </Menu.Menu>

  return (

      <Menu secondary>
        <Menu.Item as={NavLink} to='/' exact name='Home' onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/espn' exact name='ESPN' onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/cnn' exact name='CNN' onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/buzzfeed' exact name='Buzzfeed' onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/other' exact name='Other' onClick={this.handleItemClick} />
        {logLinks}
      </Menu>
  )

}

export default Navbar