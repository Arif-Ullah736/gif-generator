import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Gif Generater</h3>
      </div>
      <div>
        <Random />
      </div>
      <div>
        <Tag />
      </div>
    </div>
  );
}

export default App;
