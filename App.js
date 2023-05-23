import {Fragment,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from "./components/UI/notification"; 



function App() {

  const dispatch = useDispatch();

 const showCart =  useSelector(state=>state.ui.cartIsVisible);
 const cart = useSelector(state=>state.cart);
 const notification = useSelector(state=>state.ui.notification);

 useEffect(()=>{

  const sendCartData = async () =>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'Sending...',
      message:"Sending Cart Data"
    }));
    const response = await fetch('https://react-products-ae34d-default-rtdb.firebaseio.com/cart.json',{
      method:"PUT",
      body:JSON.stringify(cart),
    });
    if(!response.ok){
      throw new Error('Error');
    }
 
    dispatch(uiActions.showNotification({
      status:'success',
      title:'Success',
      message:"Sent Cart Data Successfully"
    }));

  }
   sendCartData().catch(error=>{
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error!',
      message:"Sending Cart Data failed!"
    }));
   });
 }, [cart, dispatch]);

  return (
    <Fragment>
   {notification &&  <Notification status={notification.status} title={notification.title} message={notification.message}/>}
       <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
