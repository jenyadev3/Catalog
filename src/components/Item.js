function Item({item}) {
  if (!item || !item.title) {
    return null; 
  }

  const title = item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title;
  const currency =
  item.currency_code === 'USD' ? '$' :
  item.currency_code === 'EUR' ? '€' :
  item.currency_code;
    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage?.url_570xN} alt={item.title}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">
            {currency} {item.price}
          </p>
          <p className={`item-quantity level-${item.quantity > 10 ? 'high' : 'medium'}`}>
            {item.quantity} {item.quantity === 1 ? 'left' : 'lefts'}
          </p>
        </div>
      </div>
    );
  }
  
  export default Item;

  
  
  
  
  
  