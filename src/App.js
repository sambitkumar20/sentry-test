import './App.css';

function App() {
  const breakTheCode = () => {
    throw new Error("Broken code with @sentry/Browse")
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
