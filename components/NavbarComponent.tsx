import { Navbar, Container, Nav, Image, Dropdown } from "react-bootstrap";
import Link from "next/link";
import Logo from "../public/static/images/logo.png";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src={Logo.src} width={200} height={50} className="image" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto nav">
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
            {/*  <Link href="/webcam">
              <span className="nav-link">Webcam</span>
            </Link> */}
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="nav-link"
              >
                Dropdown menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item /* href="/facial" */>
                  <Link href="/menu1">
                    <span className="link">menu1</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/menu2">
                    <span className="link">menu2</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/menu3">
                    <span className="link">menu3</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/menu4">
                    <span className="link">menu4</span>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link href="/page1">
              <span className="nav-link">page1</span>
            </Link>
            <Link href="/page2">
              <span className="nav-link">page2</span>
            </Link>
            <Link href="/page3">
              <span className="nav-link">page3</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
