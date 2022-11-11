import './ReactCardSlider.css';

type ReactCardSliderProps = {
  items: Array<{
    title: string,
    imageUrl: any,
    imageAlt: string,
    description: string,
    buttonText?: string,
    buttonHref?: string,
  }>
}

export default function ReactCardSlider({ items }: ReactCardSliderProps) {

  // slide left
  function slideLeft() {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 190;
    }
  }

  // slide right
  function slideRight() {
    const slider = document.getElementById('slider')
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 190;
    }
  }

  // pre-render
  const cards = items.map((card, index) => {
    console.log(card.imageUrl)
    return (
      <div className='card' key={index}>
        <div className='contentWrapper'>
          <div className='contentUpper'>
            <div className='title'>{card.title}</div>
            <div className='price'>{card.description}</div>
          </div>
          <div className='contentLower'>
            {card.buttonHref && card.buttonText ? <a href={card.buttonHref} className='button'>{card.buttonText}</a> : null}
          </div>
        </div>
        <div className='image'>
          <img src={card.imageUrl} alt={card.imageAlt} />
        </div>
      </div>
    )
  })

  // render
  return (
    <div className='card-slider-container'>
      <div className='controls-wrapper'>
        <div className='left' onClick={slideLeft}>
          <div className='innerLeft'></div>
        </div>
        <div className='right' onClick={slideRight}>
          <div className='innerRight'></div>
        </div>
      </div>
      <div className='cards-wrapper' id='slider'>
        {cards}
      </div>
    </div>
  )
}