import styled from "styled-components";
import triangle from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import Choice from "./Choice";

const PickAreaContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: center;
    .choice:last-child {
      grid-column: span 2;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1028px) {
    margin: 0;
  }
  @media screen and (min-width: 1366px) {
    .wrapper {
      width: 50%;
      height: 80%;
      background-size: 400px;
    }
  }
`

function PickArea() {
  return (
    <PickAreaContainer>
      <div className="wrapper">
        <Choice
          img={paper}
          borderColor={"hsl(229deg 85% 63%)"}
          shadowColor={"hsl(229deg 65% 46%)"}
          hover={"true"}
          name="paper" />
        <Choice
          img={scissors}
          borderColor={"hsl(39deg 84% 51%)"}
          shadowColor={"hsl(28deg 75% 45%)"}
          hover={"true"}
          name="scissors" />
        <Choice
          img={rock}
          borderColor={"hsl(349deg 68% 53%)"}
          shadowColor={"hsl(348deg 74% 35%)"}
          hover={"true"}
          name="rock" />
      </div>
    </PickAreaContainer>
  )
}

export default PickArea;