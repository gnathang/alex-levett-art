
const SingleImage = ({ singleImage }) => {
  // deconstruct from {blackWhiteImages} to get its properties
  const { image, title } = singleImage;
  return (
    <div className='image-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: {image},
        }}
      />
      <div className='text'>
        <h2>{title}</h2>
      </div>  
    </div>
  ); 

}

export default SingleImage;