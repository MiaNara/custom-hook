import './App.css';
import RandomQuote from './components/RandomQuote';
import useFetch from './hook/useFetch';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const [data, loading, error] = useFetch('https://api.quotable.io/random');

  return (
    <div>
      {loading ? (
        <Loading />
      ) : !loading && error ? (
        <Error error={error} />
      ) : (
        <RandomQuote data={data} />
      )}
    </div>
  );
}

export default App;
