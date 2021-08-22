import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 bg-gray-700 shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 text-white">
      <div className="flex items-center text-2xl">
        <AnchorLink className="px-4 text-white" href="#top" offset="1000">
          EVERED.GG
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-white" href="#features">
          AXIE INFINITY
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#services">
          SCHOOLAR ACADEMY
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#stats" >
          RULES
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#testimonials">
          FAQ
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#testimonials">
          APPLY
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
