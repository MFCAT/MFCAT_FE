import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../App.css";
import logo from "../images/logo.png";
import { useMoralis } from "react-moralis";
import TokenPrice from "./TokenPrice";

const Topbar = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  return (
    <div>
      <Navbar className="color-nav" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="210"
              height="40"
              className="img-responsive"
            />{" "}
            <span style={{ color: "red" }}> &#946;</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/marketplace">
                MARKETPLACE
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                CREATE
              </Nav.Link>
              {isAuthenticated ? (
                <Nav.Link as={Link} to="/account">
                  MY ACCOUNT
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
            <Nav>
              <Nav>
                {" "}
                <TokenPrice
                  address="0x352Aeb6707508226b4A35264df9280562Fd132Dc"
                  chain="BSC"
                  image="https://myfuckingcat.xyz/wp-content/uploads/2021/11/logomfcat.png"
                  size="20px"
                />
              </Nav>
            </Nav>
            <Nav>
              {!isAuthenticated ? (
                <Button
                  onClick={() =>
                    authenticate({
                      signingMessage: "MYFUCKINGCAT.xyz Authentication",
                    })
                  }
                  variant="outline-success"
                >
                  CONNECT WALLET
                </Button>
              ) : (
                <Button onClick={() => logout()} variant="outline-success">
                  {" "}
                  {String(user.get("ethAddress")).substring(0, 6) +
                    "..." +
                    String(user.get("ethAddress")).substring(36)}
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
