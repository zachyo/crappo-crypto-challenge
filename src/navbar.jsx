import { Container } from 'react-bootstrap';
import logo from './assets/logo.svg'

const Navbar = () => {
    return (
      <div className="navbar">
        {/* <Nav></Nav> */}
        <Container>
          <nav>
            <img src={logo} alt="" />
            <div className="nav-list">
              <a href="/">Products</a>
              <a href="/">Features</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Login</a> |{' '}
              <a href="/">Register</a>
            </div>
          </nav>
        </Container>
      </div>
    );
}
 
export default Navbar;