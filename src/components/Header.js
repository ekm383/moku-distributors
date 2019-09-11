import React from 'react'
import logo from '../assets/images/moku-distributors-logo-hawaii.png'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <img src={logo} alt="Moku Distributors Logo" height="90px" />
          <h1>
            <strong>MOKU</strong> Distributors
            <br />
            Focused on Quality and Efficiency
          </h1>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                What we do
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
