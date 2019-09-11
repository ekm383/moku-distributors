import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a href="https://www.facebook.com" className="icon alt fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            &copy; MOKU Dstributors - 856 Ilaniwai St #102A Honolulu, Hawaii
            96813
          </li>
          <li>All Rights Reserved</li>
        </ul>
      </section>
    )
  }
}

export default Footer
