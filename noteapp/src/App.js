import "./App.css";
import Filter from "./compenents/Filter";
import Header from "./compenents/Header";
import NoteList from "./compenents/NoteList";
import TextArea from "./compenents/TextArea";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <TextArea />
      <NoteList />
    </div>
  );
}

export default App;
