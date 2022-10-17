import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './image-grid.styles.scss';

// import black and white works
import black2 from '../../images/black2.jpg'
import black1 from '../../images/black1.jpg'
import black3 from '../../images/black3.jpg'
import black4 from '../../images/black4.jpg'
import black5 from '../../images/black5.jpg'  
import black6 from '../../images/black6.jpg'
import black7 from '../../images/black7.jpg'

// import colour works
import colour1 from '../../images/colour1.jpg'
import colour2 from '../../images/colour2.jpg'
import colour3 from '../../images/colour3.jpg'
import colour4 from '../../images/colour4.jpg'
import colour5 from '../../images/colour5.jpg'  
import colour6 from '../../images/colour6.jpg'
import colour7 from '../../images/colour7.jpg'
import colour8 from '../../images/colour8.jpg'
import colour9 from '../../images/colour9.jpg'  
import colour10 from '../../images/colour10.jpg'
import colour11 from '../../images/colour11.jpg'

const blackWhiteImages = [

  {
    id: 1.1,
    title: 'black-one',
    image: black1
  },
  {
    id: 1.2,
    title: 'black-two',
    image: black2
  },
  {
    id: 1.3,
    title: 'black-three',
    image: black3
  },
  {
    id: 1.4,
    title: 'black-four',
    image: black4
  },
  {
    id: 1.5,
    title: 'black-five',
    image: black5
  },
  {
    id: 1.6,
    title: 'black-six',
    image: black6
  },
  {
    id: 1.7,
    title: 'black-seven',
    image: black7
  }

]

const colourImages = [

  {
    title: 'colour-one',
    image: colour1
  },
  {
    title: 'colour-two',
    image: colour2
  },
  {
    title: 'colour-three',
    image: colour3
  },
  {
    title: 'colour-four',
    image: colour4
  },
  {
    title: 'colour-five',
    image: colour5
  },
  {
    title: 'colour-six',
    image: colour6
  },
  {
    title: 'colour-seven',
    image: colour7
  },
  {
    title: 'colour-eight',
    image: colour8
  },
  {
    title: 'colour-nine',
    image: colour9
  },
  {
    title: 'colour-ten',
    image: colour10
  },
  {

    title: 'colour-eleven',
    image: colour11
  }
]

// data-masonry='{ "itemSelector": ".image-title-wrapper", "columnWidth": 200 }'

const ImageGrid = () => {

  return (
    
    <div className='image-grid'>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry gutter={'1rem'}>
          
          {blackWhiteImages.map((singleImage, index) => (
            <div className='image-title-wrapper' key={singleImage.length}>
              <img className='image' alt='' src={singleImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{singleImage.title}</p>
              </div>
            </div>
          ))}

          {colourImages.map((singleImage, index) => (
            <div className='image-title-wrapper' key={singleImage.length}>
              <img className='image' alt='' src={singleImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{singleImage.title}</p>
              </div>
            </div>
          ))}

        </Masonry>
      </ResponsiveMasonry>
    </div>
    
  );
};  


export default ImageGrid;
