import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { B1White, H2White } from "../../styles/helpers";

const AlertStyled = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  margin: auto;
  width: 75vw;
  transform: translate(-50%, 0%);
  z-index: 500;

  .alert {
    margin: 2rem auto;
    padding: 2rem;
    background: rgba(66, 139, 202, 0.75);
    text-align: center;

    p {
      ${H2White};
      margin: 0;
    }
  }

  .alert-danger {
    background: rgba(217, 83, 79, 0.75);
  }

  .alert-success {
    background: rgba(92, 184, 92, 0.75);
  }
`;

const Alert = ({ alerts }) => {
  return (
    <AlertStyled>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => {
          return (
            <div
              key={alert.id}
              alertType={alert.alertType}
              className={`alert alert-${alert.alertType}`}
            >
              <p>{alert.msg}</p>
            </div>
          );
        })}
    </AlertStyled>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
