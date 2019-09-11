import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Moku Distributors - Honolulu, Hawaii'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  about
                  <span> MOKU </span>
                  <br />
                  distributors
                </h2>
              </header>
              <p>
                Since 2000, Moku Distributors have been dedicatd to providing
                products with the highest quality and lowest prices possible. We
                believe in exceptional customer service, and regularly go above
                and beyond to exceed our client's needs. If you're interseted in
                learning about our expansive inventory, feel free to reach out
                today.
                <p>
                  <span>mokudistributors@yahoo.com</span>
                </p>
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>
                  <span>MOKU</span> Services
                </h2>
              </header>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="service one" />
              </span>
              <h3>
                <span>DELIVERY</span>
              </h3>
              <p>
                Frequently utilized by most of our clients, this service has
                been essential to success on many occassions. When it comes to
                all of our services, you can count on us to take care of your
                every need. We pride ourselves on our exceptional customer
                service, and guarantee you'll love working with our team. Let us
                know how we can assist you today.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="service two" />
              </span>
              <h3>
                <span>CUSTOMER SUPPORT</span>
              </h3>
              <p>
                We want all of our clients to experience the impressive level of
                professionalism when working with Moku Distributors compared to
                any other supplier. All of our services, especially this one,
                exists to make your life easier and stress free. You can trust
                us to supply you with the best products, as well as top quality
                customer service.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="service three" />
              </span>
              <h3>
                <span>SHIPPING</span>
              </h3>
              <p>
                This is one of our most popular services available. Shipping has
                made a big difference for many of our clients, and is provided
                with the highest level of excellence. With this service, we
                ensure all details are simple, seamless, and handled in a timely
                manner. Whenever you work with Moku Distributors, you can trust
                that you're in great hands.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
