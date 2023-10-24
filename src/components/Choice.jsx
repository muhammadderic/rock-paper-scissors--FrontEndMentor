import styled from "styled-components";

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
`

function Choice({ img, alt, borderColor, shadowColor, hover }) {
  return (
    <ChoiceContainer
      className="choice"
      style={{
        backgroundColor: borderColor,
        boxShadow: `0 8px ${shadowColor}, 0 11px rgba(0, 0, 0, 0.3)`
      }}
      hover={hover}>
      <div className="inner">
        <img src={img} alt={alt} />
      </div>
    </ChoiceContainer>
  )
}

export default Choice;