import './Drink.css'
import { Layer } from '../Layer/Layer';

export const Drink = ({ name, image, layers}) => {
    return (
        <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
             
            {layers.map(layer => <Layer color= {layer.color} label ={layer.label} key={layer.label}/>)}
          </div>
        </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="0" />
          <button className="order-btn">
            Objednat
          </button>
        </form>
      </div>
            );
          };
 

<Drink
  id={0}
  name="Romano"
  ordered={false}
  image="http://localhost:4000/assets/cups/romano.png"
  layers={[
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ]}
/>