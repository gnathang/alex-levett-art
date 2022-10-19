import React, {useState} from 'react';
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

import arrowRight from '../../images/arrow-right.svg'
import arrowLeft from '../../images/arrow-left.svg'
import closeIcon from '../../images/close-icon-black.svg'

const allImages = [

  {
    id: 1,
    title: 'black-one',
    image: black1,
    category: 'blackWhite'
  },
  {
    id: 2,
    title: 'black-two',
    image: black2,
    category: 'blackWhite'
  },
  {
    id: 3,
    title: 'black-three',
    image: black3,
    category: 'blackWhite'
  },
  {
    id: 4,
    title: 'black-four',
    image: black4,
    category: 'blackWhite'
  },
  {
    id: 5,
    title: 'black-five',
    image: black5,
    category: 'blackWhite'
  },
  {
    id: 6,
    title: 'black-six',
    image: black6,
    category: 'blackWhite'
  },
  {
    id: 7,
    title: 'black-seven',
    image: black7,
    category: 'blackWhite'
  },
  {
    id: 8,
    title: 'colour-one',
    image: colour1,
    category: 'colour'
  },
  {
    id: 9,
    title: 'colour-two',
    image: colour2,
    category: 'colour'
  },
  {
    id: 10,
    title: 'colour-three',
    image: colour3,
    category: 'colour'
  },
  {
    id: 11,
    title: 'colour-four',
    image: colour4,
    category: 'colour'
  },
  {
    id: 12,
    title: 'colour-five',
    image: colour5,
    category: 'colour'
  },
  {
    id: 13,
    title: 'colour-six',
    image: colour6,
    category: 'colour'
  },
  {
    id: 14,
    title: 'colour-seven',
    image: colour7,
    category: 'colour'
  },
  {
    id: 15,
    title: 'colour-eight',
    image: colour8,
    category: 'colour'
  },
  {
    id: 16,
    title: 'colour-nine',
    image: colour9,
    category: 'colour'
  },
  {
    id: 17,
    title: 'colour-ten',
    image: colour10,
    category: 'colour'
  },
  {
    id: 18,
    title: 'colour-eleven',
    image: colour11,
    category: 'colour'
  }
]


// const blackWhiteFilter = allImages.filter(image => (
//   image.category.includes('blackWhite'))
// );


const ImageGrid = () => {

  
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlides, setOpenSlides] = useState(false);

  const handleOpenSlides = (index) => {
    setOpenSlides(true);
    setSlideNumber(index);
  }
  
  const changeSlide = (index) => {
    const length = allImages.length - 1;
    setSlideNumber((slideNumber) => {
      return slideNumber < length ? slideNumber + 1 : 0;
    })
  } 

  return (
    <div className="container">

      {openSlides && 
        <div className="modal open">
          <img className="close-icon" alt='' src={closeIcon} onClick={() => setOpenSlides(false)} />
          <div className="image-arrows-wrapper">
            <img className="arrow" alt="" src={arrowLeft} />
            <img className="image-large" alt="" src={slideNumber} />
            <img className="arrow" alt="" src={arrowRight} onClick={() => changeSlide()} />
          </div>
        </div>
      }
      
      <div className='image-grid'>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter={'1rem'}>
          
          {allImages.map((singleImage, index) => (
            <div className='image-title-wrapper'
                 key={index} 
                 onClick={() => handleOpenSlides(index)}>
              <img className='image' alt='' src={singleImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{singleImage.title}</p>
              </div>  
            </div>
          ))}

          {/* {allImages.filter(image => image.category === 'blackWhite').map(filteredImage => (
            <div className='image-title-wrapper' key={filteredImage.length}>
              <img className='image' alt='' src={filteredImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{filteredImage.title}</p>
              </div>
            </div>
          ))}
          
          {allImages.filter(image => image.category === 'colour').map(filteredImage => (
            <div className='image-title-wrapper' key={filteredImage.length}>
              <img className='image' alt='' src={filteredImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{filteredImage.title}</p>
              </div>
            </div>
          ))} */}

          </Masonry>
        </ResponsiveMasonry>
      </div>
      
    </div> // container
  );
};  

export default ImageGrid;
