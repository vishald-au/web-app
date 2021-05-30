import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Slideshow from './Slideshow'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const notify = () => toast.info(product1);

    function product1() {
        return (
            <div>
                Next-Gen AirPods XR<br />
                <small>Product has been added</small>
                
            </div>
        )
    }

    return (
        <div className='area'>
            <div className='container'>
                <div className='row'>
                        
                        <div className='col-sm-12 col-md-8 order-sm-12'>
                            <Slideshow />
                        </div>
                        <div className='col-sm-12 col-md-4 order-sm-1'>
                            <div className='flexbox'>
                                <h6>New Arrivals</h6>
                                <h4>Next-Gen AirPods XR</h4>
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien commodo, fermentum erat vitae, efficitur ligula. Duis quis volutpat arcu. Nullam hendrerit ut ligula eget ultricies.</small></p>
                                
                                <Button className='btn-same' variant='contained' color='primary' onClick={notify}><ShoppingBasketIcon fontSize='small' />  &nbsp;$1200</Button>
                            </div>
                        </div>
                </div>
            </div>               
        </div>
     
    )
}

export default Home
