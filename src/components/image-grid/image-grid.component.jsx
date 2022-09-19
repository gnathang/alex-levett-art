import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './image-grid.styles.scss';

// import black and white works
import black1 from '../../images/black1.jpg'
import black2 from '../../images/black2.jpg'
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
    id: 1,
    title: 'black-one',
    image: black1
  },
  {
    id: 2,
    title: 'black-two',
    image: black2
  },
  {
    id: 3,
    title: 'black-three',
    image: black3
  },
  {
    id: 4,
    title: 'black-four',
    image: black4
  },
  {
    id: 5,
    title: 'black-five',
    image: black5
  },
  {
    id: 6,
    title: 'black-six',
    image: black6
  },
  {
    id: 7,
    title: 'black-seven',
    image: black7
  }

]

const colourImages = [

  {
    id: 2.1,
    title: 'colour-one',
    image: colour1
  },
  {
    id: 2.1,
    title: 'colour-two',
    image: colour2
  },
  {
    id: 2.1,
    title: 'colour-three',
    image: colour3
  },
  {
    id: 2.1,
    title: 'colour-four',
    image: colour4
  },
  {
    id: 2.1,
    title: 'colour-five',
    image: colour5
  },
  {
    id: 2.1,
    title: 'colour-six',
    image: colour6
  },
  {
    id: 2.1,
    title: 'colour-seven',
    image: colour7
  },
  {
    id: 2.1,
    title: 'colour-eight',
    image: colour8
  },
  {
    id: 2.1,
    title: 'colour-nine',
    image: colour9
  },
  {
    id: 2.1,
    title: 'colour-ten',
    image: colour10
  },
  {
    id: 2.1,
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
          
          {blackWhiteImages.map((singleImage) => (
            <div className='image-title-wrapper' key={singleImage.id}>
              <img className='image' alt='' src={singleImage.image} />
              <p className='image-title'>{singleImage.title}</p>
            </div>
          ))}

          {colourImages.map((singleImage) => (
            <div className='image-title-wrapper' key={singleImage.id}>
              <img className='image' alt='' src={singleImage.image} />
              <p className='image-title'>{singleImage.title}</p>
            </div>
          ))}

        </Masonry>
      </ResponsiveMasonry>
    </div>
    
  );
};  


export default ImageGrid;
