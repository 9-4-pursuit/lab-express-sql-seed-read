import Songs from "../Components/Songs";
import Container from "react-bootstrap/Container";

export default function Index() {
  return (
    <div>
        <Container>
        <h1>Index</h1>
        <Songs />
        </Container>
    </div>
  );
}