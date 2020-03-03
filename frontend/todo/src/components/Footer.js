import React  from 'react'
import FooterForm from './FooterForm'
function Footer(){
        return(
            <footer className="page-footer light-green">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Drop your questions here!!</h5>
                <p className="grey-text text-lighten-4">Send us your queries!!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contact Us</h5>
                <FooterForm />
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Text
            </div>
          </div>
        </footer>
        )
    }

export default Footer