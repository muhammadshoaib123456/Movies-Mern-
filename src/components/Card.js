function Card(props) {
    return (
      <>
        <div className='cards'>
          <div className='card'>
            <img src={props.imgsrc} alt='kgf_img' className='card_img' />
  
            <div className='title_info'>
              <span className='card_category'>{props.title}</span>
              <h3 className='card_title'> {props.name} </h3>
              <a href={props.link} target='_blank' rel='noreferrer'>
                <button> Watch Now </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;
  