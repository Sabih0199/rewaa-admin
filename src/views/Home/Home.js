import { Container, Row, Col } from "reactstrap";

import "./Home.scss";

const Home = () => {
    return (
        <div className="rwa-home">
            <Container>
                <Row>
                    <Col xs={12}>
                        home
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;