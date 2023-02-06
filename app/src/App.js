import './App.css';
import NewPublication from './components/NewPublication';
import PublicationList from './components/PublicationList';

const App = () => {
  return (
    <>
      <header>
        <h1>Publications</h1>
        <h1>⚛️📝</h1>
      </header>
      <main>
        <PublicationList />
        <NewPublication />
      </main>
    </>
  );
}

export default App;