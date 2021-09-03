/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { useState, useEffect } from 'react';

import { enquireScreen } from 'enquire-js';

import Nav3 from './components/Nav3';
import Banner5 from './components/Banner5';
import Feature5 from './components/Feature5';
import Feature3 from './components/Feature3';
import Feature0 from './components/Feature0';
import Feature2 from './components/Feature2';
import Feature1 from './components/Feature1';
import Feature7 from './components/Feature7';
import Feature8 from './components/Feature8';
import Teams2 from './components/Teams2';
import Footer1 from './components/Footer1';

import {
  Nav30DataSource,
  Banner51DataSource,
  Feature50DataSource,
  Feature30DataSource,
  Feature00DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature70DataSource,
  Feature80DataSource,
  Teams20DataSource,
  Footer10DataSource,
} from './data.source';

export default function App() {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b) => {
      setisMobile(b);
    });
  }, []);

  const children = [
    <Nav3
      id="Nav3_0"
      key="Nav3_0"
      dataSource={Nav30DataSource}
      isMobile={isMobile}
    />,
    <Banner5
      id="Banner5_1"
      key="Banner5_1"
      dataSource={Banner51DataSource}
      isMobile={isMobile}
    />,
    <Feature5
      id="Feature5_0"
      key="Feature5_0"
      dataSource={Feature50DataSource}
      isMobile={isMobile}
    />,
    <Feature3
      id="Feature3_0"
      key="Feature3_0"
      dataSource={Feature30DataSource}
      isMobile={isMobile}
    />,
    <Feature0
      id="Feature0_0"
      key="Feature0_0"
      dataSource={Feature00DataSource}
      isMobile={isMobile}
    />,
    <Feature2
      id="Feature2_0"
      key="Feature2_0"
      dataSource={Feature20DataSource}
      isMobile={isMobile}
    />,
    <Feature1
      id="Feature1_0"
      key="Feature1_0"
      dataSource={Feature10DataSource}
      isMobile={isMobile}
    />,
    <Feature7
      id="Feature7_0"
      key="Feature7_0"
      dataSource={Feature70DataSource}
      isMobile={isMobile}
    />,
    // <Feature8
    //   id="Feature8_0"
    //   key="Feature8_0"
    //   dataSource={Feature80DataSource}
    //   isMobile={isMobile}
    // />,
    <Teams2
      id="Teams2_0"
      key="Teams2_0"
      dataSource={Teams20DataSource}
      isMobile={isMobile}
    />,
    <Footer1
      id="Footer1_0"
      key="Footer1_0"
      dataSource={Footer10DataSource}
      isMobile={isMobile}
    />,
  ];
  return <div className="templates-wrapper">{children}</div>;
}
