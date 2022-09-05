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
              <p>Products</p>
              <p>Features</p>
              <p>About</p>
              <p>Contact</p>
              <p>Login</p>
            </div>
            <button>Register</button>
          </nav>
        </Container>
      </div>
    );
}
 
export default Navbar;