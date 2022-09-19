
import './App.css';
import './app.styles.scss'
import ImageGrid from './components/image-grid/image-grid.component'

const App = () => {

  return (
    <div>
      <header>
        <h1 className='site-title' href='#'>Alex Levett Art</h1>
      </header>
      <ImageGrid
        className='image-grid'
      />
    </div>
  );
}

export default App;
