import React from 'react';
const Container = ({ children }) => <div className="container mx-auto text-center">{children}</div>;

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder, title }) => (
  <section id={id} className="py-20">
    {title && <Container><h1 className="text-3xl lg:text-5xl font-semibold">{title}</h1></Container>}
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
