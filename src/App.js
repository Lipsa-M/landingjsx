import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingPage';
// import ContentText from './components/contentText';
function App() {
  return (
    <div className="App">
{/* 
      <div className="CouraselText">
        <ContentText></ContentText>
      </div> */}

      <div className="courasel">
      <LandingPage></LandingPage>
      </div>
     
    </div>
  );
}

export default App;
