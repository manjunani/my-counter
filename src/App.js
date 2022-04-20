import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Counter from './components/Counter';

function App() {
  return (
    <Container>
      <Row>
        <Col className='text-center justify-content-center m-5 p-5'>
          <Counter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
