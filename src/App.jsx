import Switch from "./components/Switch";
import VideoCam from "./components/VideoCam";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

function App() {
  return (
    <Container>
      <VideoCam streamUrl="http://192.168.1.199/picture/1/frame/" />
      <Switch />
    </Container>
  );
}

export default App;
