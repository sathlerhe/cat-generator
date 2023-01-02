import { useEffect, useState } from "react";
import { Container as GridContainer, Col, Row } from "react-grid-system";
import api from "../../services/api";

import { Container, Img, Button, ContentContainer } from "./styles";

const Home: React.FC = () => {
  const [catImg, setCatImg] = useState("/assets/catbase.jpeg");

  const handleGenerateCat = async () => {
    try {
      const response = await api.get("");
      setCatImg(response?.data[0]?.url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <ContentContainer>
              <h1>
                Maybe a <i>cat</i> is all you need!
              </h1>
              <Img style={{ backgroundImage: `url(${catImg})` }} />
              <Button onClick={handleGenerateCat}>Generate Cat</Button>
            </ContentContainer>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Home;
