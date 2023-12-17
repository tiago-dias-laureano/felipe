import cowboy from "./assets/cowboy.jpg";
import praia from "./assets/praia.jpg";

function App() {
  return (
    <>
      <h1>FOTO DO FELIPE COWBOY</h1>
      <img src={cowboy} alt="" />

      <h1>FOTO DO FELIPE NA PRAIA</h1>
      <img src={praia} alt="" />
    </>
  );
}

export default App;
