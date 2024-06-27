import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  const name = 'Joiaribe';
  const age = 25;
  const isWorking = false;

  function showInfo() {
    return (
      <div>Meu nome é {name}, tenho {age} anos</div>
    );
  }

  return (
    <div>
      <h1>Olá, {name}</h1>
      <h2>Idade: {age}</h2>
      {isWorking ? (
        <p>Você está trabalhando</p>
      ) : (
        <p>Você não está trabalhando</p>
      )}
      {showInfo()}

      <FirstComponent />
      <SecondComponent name='segundo' />
    </div>
  );
}

export default App;
