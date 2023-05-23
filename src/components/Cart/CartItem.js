import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


const CartItem = (props) => {

  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  console.log(total);
   

  const removeHandler = () =>{
    dispatch(cartActions.removeFromCart(id));
  };

  const addCartHandler = () =>{
    dispatch(cartActions.addToCart({
      id,
      title,
      price,
    }))
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
