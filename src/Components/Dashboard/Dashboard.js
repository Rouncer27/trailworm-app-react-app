import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import {
  B1White,
  Btn1Warning,
  H1White,
  Btn1Infor,
  standardWrapper,
  Btn1Green,
} from "../../styles/helpers";
import Spinner from "../UIElements/Spinner";
import DashboardActions from "./DashboardActions";
import DashboardExperiences from "./DashboardExperiences";

const DashboardStyled = styled.div`
  position: relative;
  min-height: 80rem;
  height: 100vh;
  padding-top: 10rem;
  background-image: linear-gradient(
    59deg,
    #1a6a4e 0%,
    #b2cccc 81%,
    #95c5c1 88%,
    #7fbfb9 95%,
    #77beb6 100%
  );

  .wrapper {
    ${standardWrapper};
  }

  .dashLoading {
    width: 100%;
  }

  .dashInfo {
    width: 100%;
  }

  .dashTitle {
    width: 100%;

    h1 {
      ${H1White};
      margin-bottom: 0;
    }

    p {
      ${B1White};
    }
  }

  .profDetails {
    p {
      ${B1White};
    }
    &__delete {
      margin-top: 5rem;
      button {
        ${Btn1Warning};
      }
    }

    &__nopro {
      a {
        ${Btn1Green};
      }
    }
  }

  .newExperience {
    width: 100%;
    margin-top: 5rem;

    a {
      ${Btn1Infor};
    }
  }
`;

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
  deleteAccount,
}) => {
  useEffect(() => {
    if (user) {
      getCurrentProfile();
    }
  }, [user]);
  return loading && profile === null ? (
    <DashboardStyled>
      <div className="wrapper">
        <div className="dashLoading">
          <Spinner />
        </div>
      </div>
    </DashboardStyled>
  ) : (
    <DashboardStyled>
      <div className="wrapper">
        <div className="dashInfo">
          <div className="dashTitle">
            <h1>My Dashboard</h1>
            <p>Welcome {user?.name}</p>
          </div>
          <div className="profDetails">
            {profile !== null ? (
              <div>
                <p>You have a profile!</p>
                <div className="profDetails__actions">
                  <DashboardActions />
                </div>
                <DashboardExperiences experiences={profile.experience} />
                <div className="profDetails__delete">
                  <button type="button" onClick={deleteAccount}>
                    Delete My Account
                  </button>
                </div>
              </div>
            ) : (
              <div className="profDetails__nopro">
                <p>No profile has been created for this account.</p>
                <Link to="create-profile">Create a profile</Link>
              </div>
            )}
          </div>
        </div>

        <div className="newExperience">
          <Link to="/get-started">New Experience</Link>
        </div>
      </div>
    </DashboardStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
