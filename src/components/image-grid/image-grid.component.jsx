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
    id: 2,
    title: 'black-one',
    image: black1,
    category: 'blackWhite'
  },
  {
    id: 4,
    title: 'black-two',
    image: black2,
    category: 'blackWhite'
  },
  {
    id: 7,
    title: 'black-three',
    image: black3,
    category: 'blackWhite'
  },
  {
    id: 9,
    title: 'black-four',
    image: black4,
    category: 'blackWhite'
  },
  {
    id: 11,
    title: 'black-five',
    image: black5,
    category: 'blackWhite'
  },
  {
    id: 13,
    title: 'black-six',
    image: black6,
    category: 'blackWhite'
  },
  {
    id: 15,
    title: 'black-seven',
    image: black7,
    category: 'blackWhite'
  },
  {
    id: 1,
    title: 'colour-one',
    image: colour1,
    category: 'colour'
  },
  {
    id: 3,
    title: 'colour-two',
    image: colour2,
    category: 'colour'
  },
  {
    id: 5,
    title: 'colour-three',
    image: colour3,
    category: 'colour'
  },
  {
    id: 6,
    title: 'colour-four',
    image: colour4,
    category: 'colour'
  },
  {
    id: 8,
    title: 'colour-five',
    image: colour5,
    category: 'colour'
  },
  {
    id: 10,
    title: 'colour-six',
    image: colour6,
    category: 'colour'
  },
  {
    id: 12,
    title: 'colour-seven',
    image: colour7,
    category: 'colour'
  },
  {
    id: 14,
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

 


const ImageGrid = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlides, setOpenSlides] = useState(false);
  const [selectedTone, setSelectedTone] = useState();

  const handleOpenSlides = (index) => {
    setOpenSlides(true);
    setSlideNumber(slideNumber);
    console.log(index);
  }

  const changeSlide = () => {
    const length = allImages.length - 1;
    setSlideNumber((slideNumber) => {
      console.log(allImages[slideNumber]);
      if (slideNumber < length) {
        // do something here
        return slideNumber + 1;
      } else {
        // do something else
        return 0;
      }
    });
  };

  const filteredImages = allImages.filter(image => !selectedTone || (!!selectedTone && image.category === selectedTone)).sort((a, b) => a.id - b.id);

  console.log({ filteredImages })
  
  return (

    <div className="container">

      <div className="buttons-wrapper">
        <button className="button" onClick={() => setSelectedTone(undefined)}>all</button>
        <button className="button" onClick={() => setSelectedTone('blackWhite')}>black&white</button>
        <button className="button" onClick={() => setSelectedTone('colour')}>color</button>
      </div>

      <div>
        {openSlides && 
          <div className="modal open">
            <img className="close-icon" alt='' src={closeIcon} onClick={() => setOpenSlides(false)} />
            <div className="image-arrows-wrapper">
              <img className="arrow" alt="" src={arrowLeft} />
              <img key={allImages[slideNumber]} className="image-large" alt="" src={allImages[slideNumber].image} />
              <img className="arrow" alt="" src={arrowRight} onClick={changeSlide} />
            </div>
          </div>
        }
      </div>
      
      <div className='image-grid'>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter={'0.67rem'}>
          
            {/* {allImages.map((singleImage, index) => (
              <div className='image-title-wrapper'
                key={index}
                onClick={() => handleOpenSlides(index)}>
                <img className='image' alt='' src={singleImage.image} />
                <div className='image-title-overlay'>
                  <p className='image-title'>{singleImage.title}</p>
                </div>  
              </div>
            ))} */}

          {filteredImages.map((singleImage, index) => (
            <div className='image-title-wrapper'
              key={index}
              onClick={() => handleOpenSlides(index)}>
              <img className='image' alt='' src={singleImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{singleImage.title}</p>
              </div>  
            </div>
          ))}
          
          {/* {allImages.filter(image => image.category === 'colour').map(filteredImage => (
            <div className='image-title-wrapper' key={filteredImage.length}>
              <img className='image' alt='' src={filteredImage.image} />
              <div className='image-title-overlay'>
                <p className='image-title'>{filteredImage.title}</p>
              </div>
            </div>
          ))} */}

          </Masonry>
        </ResponsiveMasonry>
        
      </div> {/* grid */}
      
    </div> // container
  );
};  

export default ImageGrid;
