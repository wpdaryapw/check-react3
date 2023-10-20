function Stars(props) {
    const { rating } = props
  
    const renderStars = () => {
      const stars = Array(5).fill(false)
      for (let i = 0; i < rating; i++) {
        stars[i] = true
      }
  
      return stars.map((isFilled, index) => (
        <span
          key={index}
          className={`fa fa-star ${isFilled ? 'active' : ''}`}
        ></span>
      ))
    }
  
    return (
      <div className="rating">
        {renderStars()}
      </div>
    )
  }
  
  export default Stars;
  
  

