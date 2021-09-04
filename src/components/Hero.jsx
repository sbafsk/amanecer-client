import React from 'react';
import QueueAnim from 'rc-queue-anim';

import TweenOne from 'rc-tween-one';
import { Button } from 'antd';

const Hero = ({ dataSource }) => {
  const animType = {
    queue: 'bottom',
    one: {
      y: '+=30',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
    },
  };
  return (
    <div className="home-page-wrapper hero">
      <div className="home-page hero-page">
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          animation={{ opacity: 0, type: 'from' }}
          className="hero-title-wrapper"
        >
          <TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}>
            <h1 className="hero-title">{dataSource.title}</h1>
            <div className="hero-explain">{dataSource.explain}</div>
            <div className="hero-content">{dataSource.content}</div>
            <div className="hero-button-wrapper">
              <Button
                type="primary"
                className="hero-button"
                {...dataSource.button.href}
              >
                {dataSource.button.text}
              </Button>
            </div>
          </TweenOne>
        </QueueAnim>
      </div>
    </div>
  );
};
export default Hero;
