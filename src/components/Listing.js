import Item from './Item';

function Listing({items}) {
  return (
    <div className="item-list">
      {items.map(item =>
        <Item item={item} key={item.listing_id}/>
        )}
    </div>
  );
}

export default Listing;

