import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
import { Button } from "../Button";
import { Colors } from "../../theme/colors";

const PageHeader = () => {
  const history = useNavigate();

  return (
    <div className="rwa-page-header">
      <Container fluid>
        <div className="d-flex align-items-center">
          <Button
            onClick={() => {
              history(-1);
            }}
            className="back-btn"
            title={<FontAwesomeIcon icon={faArrowLeft} color={Colors.black} />}
          />
          <Button
            className="layout-btn"
            title={
              <div>
                classic - default
                <FontAwesomeIcon
                  icon={faLock}
                  color={Colors.textPrimary}
                  className="lock-icon"
                />
              </div>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
