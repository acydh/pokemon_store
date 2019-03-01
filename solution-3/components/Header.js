import React from 'react';

class Header extends React.Component {
    render() {
        const { toggleCart, cartItems } = this.props;

        return (
            <header className="header">
                <div className="logo">
                    <img src="img/pokeball.svg" alt="" />
                </div>
            </header>
        );
    }
}

export default Header;