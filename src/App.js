
import './App.css';
import './app.styles.scss';
import ImageGrid from './components/image-grid/image-grid.component';
// import allImages from './components/image-grid/image-grid.component';

import insta from './images/insta.svg'

const App = () => {

  return (
    <div>
      <header>
        <h1 className='site-title'>alex levett art</h1>
        <h2 className='blackWhiteFilter'>black & white</h2>
        <h2 className='colourFilter'>colour</h2>
        <a className='insta-link' href='https://www.instagram.com/alex.levett.35/'>
          <img alt='' src={insta} />  
        </a>
      </header>
      <ImageGrid className='image-grid'/>
    </div>
  );
}

export default App;
