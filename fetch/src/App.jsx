import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [githubProfile, setGithubProfile] = useState({});
  const [repoGithub, setRepoGithub] = useState([]);

  async function getDataFromGithub() {
    const urlProfile = "https://api.github.com/users/femasterflash";
    const urlRepos = "https://api.github.com/users/femasterflash/repos";

    const resultProfile = await fetch(urlProfile);
    const resultRepos = await fetch(urlRepos);

    const jsonProfile = await resultProfile.json();
    const jsonRepo = await resultRepos.json();

    setGithubProfile(jsonProfile);
    setRepoGithub(jsonRepo);
  }

  // useEffect = HOOK do react, responsavel por executar ou chamar uma função quando a TELA FOR CARREGADA.
  useEffect(() => {
    getDataFromGithub();
  }, []);

  return (
    <div>
      <div>
        <h1>{githubProfile.name}</h1>
        <p>{githubProfile.bio}</p>
      </div>
      <div>
        <span>{githubProfile.location}</span>
      </div>

      <div>
        <h2>Meus repositórios</h2>
        <ul>
          {repoGithub.map((repo) => (
            <li>{repo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
