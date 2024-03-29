import styled from "styled-components";
import { useGlobalContext } from "../context";

const ChoiceContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: .7rem;
  border-radius: 50%;
  cursor: pointer;
  ${props => props.hover ?
    `&:hover {
      box-shadow: 0 3px rgba(0, 0, 0, 0.3) !important;
      transform: translateY(10px);
    }`
    : null}
  .inner {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 7px inset hsl(228deg 22% 78%);
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
    margin: auto;
    padding: 1.2rem;
    .inner {
      img {
        height: 50%;
      }
    }
  }
`

function Choice({ name, img, borderColor, shadowColor, hover, className }) {
  const { setChoice } = useGlobalContext();
  return (
    <ChoiceContainer
      className={className + " choice"}
      style={{
        backgroundColor: borderColor,
        boxShadow: `0 8px ${shadowColor}, 0 11px rgba(0, 0, 0, 0.3)`
      }}
      hover={hover}
      onClick={() => {
        // if (!hover) return;
        setChoice({
          name,
          borderColor,
          shadowColor,
          img,
        })
      }}>
      <div className="inner">
        <img src={img} alt={name} />
      </div>
    </ChoiceContainer>
  )
}

export default Choice;