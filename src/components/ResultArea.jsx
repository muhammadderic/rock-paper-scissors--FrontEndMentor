import styled, { keyframes } from "styled-components";
import { useGlobalContext } from "../context";
import Choice from "./Choice";

const waitOpponent = keyframes`
    0%,100% {
        opacity: .5;
    }
    50% {
        opacity: .2;
    }
`;

const ResultAreaContainer = styled.div`
  height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wrapper {
    margin: 0 auto;
    display: flex;
    gap: 4rem;
    .choice-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h3 {
        margin-bottom: 50px;
        color: #fff;
        font-size: 1rem;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
      }
      .opponent {
        width: 100px;
        height: 100px;
        padding: .7rem;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        animation: ${waitOpponent} 1s infinite;
      }
    }
  }
`

function ResultArea() {
  const { choice } = useGlobalContext();
  return (
    <ResultAreaContainer>
      <div className="wrapper">
        <div className="choice-wrapper">
          <Choice {...choice} />
          <h3>you picked</h3>
        </div>
        <div className="choice-wrapper">
          {/* <Choice {...choice} /> */}
          <div className="opponent"></div>
          <h3>the house picked</h3>
        </div>
      </div>
    </ResultAreaContainer>
  )
}

export default ResultArea;