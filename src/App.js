import CatList from './components/CatList';
import './App.css';

const DATA = [
  {
    name: "Ubik",
    caretaker: "Maria",
    color: "grey",
    personality: "wild child",
    petCount: 6,
    id: 1,
  },
  {
    name: "Pepper",
    caretaker: "Mark",
    color: "black",
    personality: "spicy",
    petCount: 3,
    id: 2,
  },
  {
    name: "Binx",
    caretaker: "Susan",
    color: "tuxedo",
    personality: "feral",
    petCount: 8,
    id: 3,
  },
];

function App() {
  return (
    <main className="App">
      <h1>The Cat Corner</h1>
      <CatList catData={DATA}/>
    </main>
  );
}

export default App;
