import "./App.css";
import { Teacher } from "./components/Teacher";
import Teste from "./components/Teste";

function App() {
  const teachers = [
    {
      name: "Alex",
      job: "Instructor",
      budget: 15000,
    },
    {
      name: "Felipe",
      job: "Instructor",
      budget: 5000,
    },
  ];

  return (
    <div className="App">
      <Teste />
      <li className="lista">
        {teachers.map((teacher) => (
          <Teacher teacher={teacher} />
        ))}
      </li>
    </div>
  );
}

export default App;
