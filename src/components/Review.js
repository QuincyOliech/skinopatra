import React from 'react'

const Review = ({product}) => {
  let stars = Array(product.star_rating).fill("★")
  return (
    <div className='review-section'>
        <div className='review-score'>{stars.join("")}</div>
        <div className='review-comment'><em>{product.comment}</em></div>
        {/* <div className='review-author'>{product.user.name}</div> */}
      
    </div>
  )
}

export default Review
