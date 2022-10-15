import './App.css';

function App() {
  const breakTheCode = () => {
    throw new Error("Brokken code")
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={breakTheCode}>Break the code</button>
      </header>
    </div>
  );
}

export default App;
