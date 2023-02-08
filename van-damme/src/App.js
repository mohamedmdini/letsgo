import './App.css';
import Home from './Components/Home'
import StarRating from './Components/DescTrail';
import Card from './Components/MovieCard';





function App() {

  let Component
  switch (window.location.pathname) {
  
  case "/":
      Component = <Home/>
      
      break
      case"/DescTrail" :
      Component= <StarRating/>
  
    
      break
      case"/MovieCard" :
      Component= <Card/>
      break
  }

  
  return (
    <div>
      <nav className='nav'>
    <a href='/' className='site-title'>OUR MOVIES</a>
    <ul>
    <li className='active'>
        <a href='/DescTrail'>DescTrail</a>
        </li>
        <li>
        <a href='/MovieCard'>MovieCard</a>
    </li>
    </ul>
</nav>
{Component}
    </div>
  );
}

export default App;
