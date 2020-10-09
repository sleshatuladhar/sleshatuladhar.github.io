/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React, { Component } from 'react'
import Footer from '../../../common/footer';
import Header from '../../../common/header';

class MainLayout extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child)
    );

    return (
      <div>
        <Header />
        <main>
          {childrenWithProps}
        </main>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;