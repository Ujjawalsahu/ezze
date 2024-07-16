import './App.css';
import Header from './components/Navbar/Navbar';
import SmallCard from './components/SmallCard/SmallCard';
import LargeCard from './components/LargeCard/LargeCard';

function App() {
  return (
    <>
    <div className='main-box'>
    <div className='container'>
      <Header/>
    </div>
      <SmallCard/>
      <LargeCard/>
    </div>
    </>
  );
}

export default App;
