import React from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

import Footer from './footer';
import Header from './header';

const Layout = props => {
  const { children } = props;

  return (
    <div className='site-wrapper'>
      <main id='site-main' className='site-main'>
        <Header />
        <div className='container'>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
