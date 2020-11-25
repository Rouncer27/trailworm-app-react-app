import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profile";
import styled from "styled-components";
import { H1White, H3White, Btn1Warning } from "../../styles/helpers";

const DashboardExperiencesStyled = styled.div`
  margin-top: 5rem;
  h2 {
    ${H1White};
    margin: 0;
  }

  .expWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }
`;

const Experience = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  padding: 3rem 0;

  .expDetail {
    width: 75%;
    h3 {
      ${H3White};
      margin: 0;
    }
  }
  .expDelete {
    width: 25%;

    button {
      ${Btn1Warning};
    }
  }
`;

const DashboardExperiences = ({ experiences, deleteExperience }) => {
  return (
    <DashboardExperiencesStyled>
      <h2>Experiences</h2>
      <div className="expWrapper">
        {experiences.map((exp) => {
          return (
            <Experience>
              <div className="expDetail">
                <h3>{exp.title}</h3>
                {/* <p>
                <Moment format="YYYY/MM/DD">{}</Moment>
              </p> */}
              </div>
              <div className="expDelete">
                <button
                  onClick={() => {
                    deleteExperience(exp._id);
                  }}
                >
                  Delete Experience
                </button>
              </div>
            </Experience>
          );
        })}
      </div>
    </DashboardExperiencesStyled>
  );
};

export default connect(null, { deleteExperience })(DashboardExperiences);
