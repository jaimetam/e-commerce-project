import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProductCarousel({product}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let carouselItems = [];
  if (product.images) {
    for (let i = 0; i < product.images.length; i++){
      console.log("an item", i);
      carouselItems[i] = <Carousel.Item data-bs-theme="dark">
        <img src={`/images/${product.images[i]}`} text={`Slide #${i}`} className='w-100' />
        <Carousel.Caption>
          <h3 className='color-warning'>{product.names[i]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    }
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      {carouselItems}
    </Carousel>
  );
}

export default ProductCarousel;