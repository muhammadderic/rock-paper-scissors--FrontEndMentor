import styled, { keyframes } from "styled-components";
import { useGlobalContext } from "../context";
import Choice from "./Choice";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import { useEffect } from "react";
import { useState } from "react";

const choices = [
  {
    borderColor: "hsl(229deg 85% 63%)",
    shadowColor: "hsl(229deg 65% 46%)",
    name: "paper",
    img: paper,
  },
  {
    borderColor: "hsl(39deg 84% 51%)",
    shadowColor: "hsl(28deg 75% 45%)",
    name: "scissors",
    img: scissors,
  },
  {
    borderColor: "hsl(349deg 68% 53%)",
    shadowColor: "hsl(348deg 74% 35%)",
    name: "rock",
    img: rock,
  },
];

const waitOpponent = keyframes`
    0%,100% {
        opacity: .5;
    }
    50% {
        opacity: .2;
    }
`;

const checkStatus = (firstChoice, secondChoice) => {
  const wins = ["paper,rock", "rock,scissors", "scissors,paper"];
  if (firstChoice === secondChoice) {
    return "draw";
  } else if (wins.includes(`${firstChoice},${secondChoice}`)) {
    return "win";
  } else {
    return "lose";
  }
}

const ResultAreaContainer = styled.div`
  height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
    .your-choice {
      order: 1;
    }
    .opponent-choice {
      order: 2;
    }
    .choice-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      position: relative;
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
        .choice::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 6rem;
          left: 1rem;
          right: 1rem;
          border-radius: 50%;
          box-shadow: none;
        }
        .choice.win::before {
          transition: 0.3s;
          box-shadow: 
            0 0 0 1rem rgb(255 255 255 / 6%),
            0 0 0 2rem rgb(255 255 255 / 4%), 
            0 0 0 3rem rgb(255 255 255 / 2%);
        }
    }
    .result {
      dispaly: flex;
      flex-direction: column;
      justify-content: center;
      order: 3;
      grid-column: span 2;
      margin: 0 auto;
      h2 {
        margin: 0;
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #fff;
      }
      button {
        width: 100px;
        margin-top: 1rem;
        padding: .5rem;
        font-size: .5rem;
        font-weight: bold;
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 2px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        outline: none;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 1028px) {
    .wrapper {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 4rem;
      .your-choice {
        order: 1;
      }
      .opponent-choice {
        order: 3;
      }
      .choice-wrapper {
        .choice {
          position: relative;
        }
        .choice::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 50%;
          box-shadow: none;
        }
        .choice.win::before {
          transition: 0.3s;
          box-shadow: 0 0 0 40px rgb(255 255 255 / 6%),
            0 0 0 80px rgb(255 255 255 / 4%), 0 0 0 130px rgb(255 255 255 / 2%);
        }
      }
      .result {
        grid-column: span 1;
        choice: 2;
        button {
          width: 150px;
          font-size: 1rem;
        }
      }
    }
  }
`

function ResultArea() {
  const { choice, setScore, setChoice } = useGlobalContext();
  const [houseChoice, setHouseChoice] = useState();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setHouseChoice(null);
    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setHouseChoice(randomChoice);
    }, 1000);
  }, [])

  useEffect(() => {
    if (!houseChoice) return;
    const status = checkStatus(choice.name, houseChoice.name);
    if (status === "win") {
      setScore((score) => score + 1);
    }
    setStatus(status);
  }, [houseChoice, choice.name, setScore]);

  const playAgain = () => {
    setChoice(null);
  };

  return (
    <ResultAreaContainer>
      <div className="wrapper">
        <div className="choice-wrapper your-choice">
          <Choice {...choice} className={status === "win" ? "win" : ""} />
          <h3>you picked</h3>
        </div>
        {status ?
          <div className="result">
            <h2>{status}</h2>
            <button type="button" onClick={playAgain}>play again</button>
          </div>
          :
          <div className="result"></div>
        }
        <div className="choice-wrapper opponent-choice">
          {houseChoice ?
            <Choice {...houseChoice} className={status === "lose" ? "win" : ""} /> :
            <div className="opponent"></div>
          }
          <h3>the house picked</h3>
        </div>
      </div>
    </ResultAreaContainer>
  )
}

export default ResultArea;