import styled from "styled-components"

const Button = styled.button`
  width: 30%;
  margin: 1rem auto;
  padding: .5rem 2rem;
  font-family: inherit;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: .3rem;
  cursor: pointer;
  @media screen and (min-width: 1028px) {
    width: 10%;
    margin: 1rem 1rem 3rem auto;
  }
`

function RulesButton() {
  return (
    <Button onClick={() => console.log("clicked")}>
      Rules
    </Button>
  )
}

export default RulesButton;