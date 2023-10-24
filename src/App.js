import styled from "styled-components";
import StatusBar from "./components/StatusBar";
import PickArea from "./components/PickArea";
import RulesButton from "./components/RulesButton";
import Rules from "./components/Rules";
import { useGlobalContext } from "./context";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function App() {
  const { rulesIsOpen } = useGlobalContext();

  return (
    <AppContainer>
      {rulesIsOpen ? <Rules /> : undefined}
      <StatusBar />
      <PickArea />
      <RulesButton />
    </AppContainer>
  );
}

export default App;
