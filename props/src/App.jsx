import { useState } from "react";
import "./App.css";
import { Teacher } from "./components/Teacher";

function App() {
  const [listName, setListName] = useState(["Tiago", "Felipe", "Joao"]);
  const [text, setText] = useState("");

  function addNewName() {
    event.preventDefault();
    setListName([...listName, text]);
    // spread operator ...variavel
  }

  function handleChangeText() {
    setText(event.target.value);
  }

  return (
    <>
      {listName.map((nome, indice) => (
        <Teacher key={indice} nome={nome} />
      ))}

      <form action="#" onSubmit={addNewName}>
        <input
          required
          onChange={handleChangeText}
          value={text}
          type="text"
          name="name"
          id="name"
          placeholder="Digite um nome"
        />
        <button type="submit">Adicionar novo professor</button>
      </form>
    </>
  );
}

export default App;
