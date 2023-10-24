import styled from "styled-components";
import { useGlobalContext } from "../context";
import logo from "../images/logo.svg";

const StatusBarContainer = styled.div`
  padding: 1rem;
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid #fff;
    border-radius: .5rem;
    .logo {
      height: 4rem;
    }
    .score-wrapper {
      padding: .5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      text-align: center;
      border-radius: .5rem;
      .label {
        margin: 0;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      .score {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
  @media screen and (min-width: 1028px) {
    padding: 2rem;
    .wrapper {
      max-width: 60%;
      padding: 1rem 2rem;
    }
    .score-wrapper {
      padding: 1rem 2rem;
      .label {
        font-size: 1.5rem;
      }
    }
  }
`

function StatusBar() {
  const { score } = useGlobalContext();

  return (
    <StatusBarContainer>
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <div className="score-wrapper">
          <p className="label">score</p>
          <p className="score">{score}</p>
        </div>
      </div>
    </StatusBarContainer>
  )
}

export default StatusBar;