import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils';

const Teams = ({ dataSource }) => {
  const getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          <Row>
            <Col span={7}>
              <div {...image}>
                <img src={image.children} alt="img" />
              </div>
            </Col>
            <Col span={17}>
              <QueueAnim {...titleWrapper} type="bottom">
                {titleWrapper.children.map(getChildrenToRender)}
              </QueueAnim>
            </Col>
          </Row>
        </Col>
      );
    });

  const listChildren = getBlockChildren(dataSource.block.children);
  return (
    <div {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim type="bottom" key="tween" leaveReverse>
            <QueueAnim
              type="bottom"
              key="block"
              {...dataSource.block}
              component={Row}
            >
              {listChildren}
            </QueueAnim>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};

export default Teams;
