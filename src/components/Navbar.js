import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class MenuExampleSecondary extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item as={NavLink} to='/' exact name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/espn' exact name='ESPN' active={activeItem === 'ESPN'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/cnn' exact name='CNN' active={activeItem === 'CNN'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/buzzfeed' exact name='Buzzfeed' active={activeItem === 'Buzzfeed'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/other' exact name='Add' active={activeItem === 'Add'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}