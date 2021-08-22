import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import logo from '../svg/erlogo.png';
import scholars from '../svg/scholars.png';

const Index = () => (
  <Layout>
    <section className="pt-16 md:pt-40" id="top">
      <div className="container mx-auto lg:flex">
        {/* <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Main title of your landing page
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Free landing page template to promote your business startup and generate leads for the
            offered services
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div> */}
        <div className="lg mx-auto">
          <img src={logo} />
          {/* <HeroImage /> */}
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-center text-xl lg:text-2xl font-dark">
          eveRed Gaming - evered.gg
        </p>
        <p className="text-center text-xl lg:text-2xl mt-6 font-dark">
          Professional Gamers
        </p>
      </div>
    </section>
    <section id="features" className="py-12 lg:pb-40 lg:pt-40">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">Axie Infinity Scholars</h1>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <img src={scholars} />

          {/* <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      title="Schoolar Academy"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          {/* <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3> */}
          <p className="mt-8 text-xl font-light leading-relaxed">
            eveRed Scholar Academy gives the chance for new players to show they can rapidly learn the game, prove their commitment and talent to the guild.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            During 4 weeks, you will get a basic team of proven Axies to start playing Axie Infinity. If your performance exceeds our expectations, there will be great chances that you will become a permanent scholar by the end of the academy.
          </p>
        </div>
      }
      secondarySlot={
        <div>
          {/* <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3> */}
          <p className="mt-8 text-xl font-light leading-relaxed">
            It is expected that new players in academy improve average daily SLP and arena rating every week.
            Below, you can see the averages, including the total SLP accumulated in the account:
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            SLP withdraw while in academy is in the end of the 4th week after you start playing with the axies. That makes easier for the academic and manager to check progression.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The expected SLP share for academic is 35%, however, if you exceed the expectations, your share will be according to the scholar table.
          </p>
        </div>
      }
    />

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">Rules</h1>
        <ul className="mt-8 text-xl font-light leading-relaxed text-left">
          <li>Be honest with your manager and be nice with other scholars.</li>
          <li>No toxic behaviour will be tolerated.</li>
          <li>MULTI-ACCOUNT IS NOT ACCEPTABLE. You can play only one account, regardless of using separate devices.</li>
          <li>DO NOT SHARE YOUR ACCOUNT. This is also not acceptable by eveRed (although possible in the game), as we don't want risk one of your friends playing in multiple accounts.</li>
          <li>No toxic behaviour will be tolerated.</li>
          <li>If your performance is not satisfactory, you can be sacked and receive your remaining SLP.</li>
          <li>Read the information provided here before asking a question to your manager.</li>
        </ul>
      </div>
    </section>
    <section id="testimonials" className="pt-20 py-20 lg:py-40">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">FAQ</h1>
        <p>Coming next</p>
        {/* <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to apply to Evered?</h3>
      <p className="mt-8 text-xl font-light">
        Click apply and be a part of our team
      </p>
      <p className="mt-8">
        <Button size="xl">Apply</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
