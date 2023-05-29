import { Nav, Navbar as NavbarB, Container, NavDropdown } from "react-bootstrap"

const Navbar = () => {
    return (
        <NavbarB bg="light" expand="lg" className="shadow mb-3">
            <Container>
                <NavbarB.Brand href="#">Psychological Test</NavbarB.Brand>
                <NavbarB.Toggle aria-controls="basic-navbar-nav" />
                <NavbarB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Beranda</Nav.Link>
                        <Nav.Link href="#instruction">Petunjuk</Nav.Link>
                        <Nav.Link href="#contact">Kontak</Nav.Link>
                    </Nav>
                    <Nav>
                        <a
                            href="#login"
                            className="btn btn-primary rounded-5 px-4"
                        >
                            Login
                        </a>
                    </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    )
}

export default Navbar
