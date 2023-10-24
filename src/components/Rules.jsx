import styled from "styled-components";
import imageRules from "../images/image-rules.svg"

const RulesContainer = styled.div`
  display: flex;
  justify-context: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    z-index: 20;
    .rule-content {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        order: 1;
        text-transform: uppercase;
        font-size: 35px;
        color: #000;
        text-align: center;
      }
      img {
        order: 2;
      }
      button {
        order: 3;
        font-size: 2rem;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        opacity: 0.25;
        transition: 0.1s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (min-width: 1028px) {
    .overlay {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 5;
    }
    .wrapper {
      height: 50%;
      max-width: 30%;
      margin: auto;
      padding: 40px;
      border-radius: 10px;
      .rule-content {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        h2 {
          margin: 0 auto 0 0;
          font-size: 2rem;
        }
        img {
          width: 80%;
          margin-top: 2rem;
          order: 3;
        }
        button {
          font-size: 1.5rem;
          order: 2;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
`

function Rules() {
  return (
    <RulesContainer>
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="rule-content">
          <h2>rules</h2>
          <button type="button">
            x
          </button>
          <img src={imageRules} alt="rules" />
        </div>
      </div>
    </RulesContainer>
  )
}

export default Rules;