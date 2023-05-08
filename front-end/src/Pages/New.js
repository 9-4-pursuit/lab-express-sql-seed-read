import SongNewForm from "../Components/SongNewForm";
import Container from "react-bootstrap/Container";

export default function New() {
  return (
    <div>
        <Container>
        <h1>New</h1>
        <SongNewForm />
        </Container>
    </div>
  );
}
