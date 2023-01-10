import Header from './components/Header';
import './App.css';
import Data from './components/Data';
import Card from './components/Card';
import Trendingsec from "./components/Tredingsec"

const nav = [
  { id: 1, name: "Our story" },
  { id: 2, name: "Membership" },
  { id: 3, name: "Write" },
  { id: 4, name: "Sign in" },
]

function App() {
  return (
    <section >
      <div className="Big">
        <div className="container">
          <Header navs={nav} />
        </div>

      </div>
      <div className="container">
        <Trendingsec />

      </div>
    </section>
  );
}

export default App;
