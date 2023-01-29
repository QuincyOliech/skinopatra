import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Carousel() {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='h-100 p-4 d-block'
        itemId={1}
        src='https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='...'
      />
      <MDBCarouselItem
        className='d-block h-100 p-4'
        itemId={2}
        src='https://images.pexels.com/photos/8131585/pexels-photo-8131585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='...'
      />
      <MDBCarouselItem
        className='d-block h-100 p-4'
        itemId={3}
        src='https://images.pexels.com/photos/6168341/pexels-photo-6168341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='...'
      />
    </MDBCarousel>
  );
}

export default Carousel 