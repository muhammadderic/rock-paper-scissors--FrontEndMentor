import styled from "styled-components";
import StatusBar from "./components/StatusBar";
import PickArea from "./components/PickArea";
import RulesButton from "./components/RulesButton";
import Rules from "./components/Rules";
import { useGlobalContext } from "./context";
import ResultArea from "./components/ResultArea";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function App() {
  const { rulesIsOpen, choice } = useGlobalContext();

  return (
    <AppContainer>
      {rulesIsOpen ? <Rules /> : undefined}
      <StatusBar />
      {choice ? <ResultArea /> : <PickArea />}
      <RulesButton />
    </AppContainer>
  );
}

export default App;
