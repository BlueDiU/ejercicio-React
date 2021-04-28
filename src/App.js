import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import NestedSelects from './components/NestedSelects';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <ContactForm />
      <hr />
      <NestedSelects />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
