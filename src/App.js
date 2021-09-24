import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import requests from "./requests";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        className="big"
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        className="small"
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        className="small"
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        className="small"
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        className="small"
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        className="small"
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        className="small"
      />
    </div>
  );
}

export default App;
