import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function nav () {
  return (
    <NavBar bg='primary' expand='lg' varient='dark'>
        <Container>
            <NavBar.Brand href='/songs'>Songs Here!</NavBar.Brand>
            <Button variant='light'>
                <Link to={'/songs'}>New Song</Link>
            </Button>
        </Container>
    </NavBar >
  );
}
