import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'react-scroll';

const Header = ({ dataSource, isMobile }) => {
  const [phoneOpen, setPhoneOpen] = useState(false);

  const navData = dataSource.Menu.children;
  const navChildren = navData.map((item) => {
    return (
      <Menu.Item key={item.name} className="header-item">
        <Link
          className="header-item-block"
          spy={true}
          to={item.href}
          smooth={true}
          duration={500}
          onClick={() => setPhoneOpen((prevState) => !prevState)}
        >
          {item.text}
        </Link>
      </Menu.Item>
    );
  });
  const moment = phoneOpen === undefined ? 300 : null;
  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      className="header"
    >
      <TweenOne
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        className="header-logo"
      >
        <img width="100%" src={dataSource.logo} alt="img" />
      </TweenOne>
      {isMobile && (
        <div
          className="header-mobile-menu"
          onClick={() => {
            setPhoneOpen((ps) => !ps);
          }}
        >
          <em />
          <em />
          <em />
        </div>
      )}
      <TweenOne
        className={`header-menu ${phoneOpen ? ' open' : ''}`}
        animation={
          isMobile
            ? {
                x: 0,
                height: 0,
                duration: 300,
                onComplete: (e) => {
                  if (phoneOpen) {
                    e.target.style.height = 'auto';
                  }
                },
                ease: 'easeInOutQuad',
              }
            : null
        }
        moment={moment}
        reverse={!!phoneOpen}
      >
        <Menu mode={isMobile ? 'inline' : 'horizontal'}>{navChildren}</Menu>
      </TweenOne>
    </TweenOne>
  );
};

export default Header;
