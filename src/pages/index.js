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
        </div>

         <br/>
         <br/>
         <p className="mt-8 text-l font-light leading-relaxed text-left">Scholar table for SLP split reference (Total accumulated in 14 days):</p>
            <br/>
            <table>
              <tr>
                <th>Avg Daily SLP</th>
                <th>Total SLP</th>
                <th>Scholar</th>
                <th>Manager</th>
              </tr>
              <tr>
                <td>140</td>
                <td>2000 - 2249</td>
                <td>35%</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>160</td>
                <td>2250 - 2499</td>
                <td>40%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>180</td>
                <td>2500 - 2799</td>
                <td>45%</td>
                <td>55%</td>
              </tr>
              <tr>
                <td>200</td>
                <td>2800 or more</td>
                <td>50%</td>
                <td>50%</td>
              </tr>
            </table>
          <br/>

          <p className="mt-8 text-l font-light leading-relaxed text-left">The SLP will be entirely withdraw whenever it is available. The scholar share will be entirely paid in SLP into his/her private Ronim wallet.<br/><br/>
          For every additional month scholar stays in the team, they will get an additional 1%, until it gets to an additional of 5% in total. Which means that high performance scholars might reach up to 55% in SLP share.
          </p>
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
          <br/>
          <table>
              <tr>
                <th>Week</th>
                <th>Avg Daily SLP</th>
                <th>Total SLP</th>
                <th>Arena MMR</th>
                <th>SLP Share</th>
              </tr>
              <tr>
                <td>Week1</td>
                <td>100</td>
                <td>700</td>
                <td>1100 - 1299</td>
                <td>35%</td>
              </tr>
              <tr>
                <td>Week2</td>
                <td>115</td>
                <td>1505</td>
                <td>1200 - 1299</td>
                <td>35%</td>
              </tr>
              <tr>
                <td>Week3</td>
                <td>130</td>
                <td>2415</td>
                <td>1300 - 1500</td>
                <td>35%</td>
              </tr>
              <tr>
                <td>Week4</td>
                <td>145</td>
                <td>3430</td>
                <td>1300 - 1500</td>
                <td>35%</td>
              </tr>
            </table>
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
        First step to become a professional gamer
      </p>
      <p className="mt-8">
        <a href="https://forms.gle/fXjjTTcTKoRvfJty9" className='button button--link' target="_blank">Apply</a>
      </p>
    </section>
  </Layout>
);

export default Index;
