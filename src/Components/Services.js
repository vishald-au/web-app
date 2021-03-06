import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Image1 from '../a1.png'
import Image2 from '../a2.png'

const Services = () => {
    return (
        <div className='area'>
            <div className='container'>
                <div className='row'>


                    <div className='col-sm-12 col-md-6'>
                        <div className='imgslider'>
                            <div className='effect-bg2'>
                                <img className='img-fluid' alt='img' src={Image2} />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='flexbox'>
                            <h6>New Arrivals</h6>
                            <h4>Next-Gen AirPods XR</h4>
                            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien commodo, fermentum erat vitae, efficitur ligula. Duis quis volutpat arcu. Nullam hendrerit ut ligula eget ultricies.</small></p>

                            <Button className='btn-same' variant='contained' color='primary'><ShoppingBasketIcon fontSize='small' />  &nbsp;$800</Button>
                        </div>
                    </div>
                    <div className='col-sm-12 manage-arrow'><KeyboardArrowDownIcon /></div>
                </div>
                <div className='row'>


                    <div className='col-sm-12 col-md-6 order-sm-12'>
                        <div className='imgslider'>
                            <div className='effect-bg2'>
                                <img className='img-fluid' alt='img' src={Image1} />
                            </div>
                        </div>
                    </div>


                    <div className='col-sm-12 col-md-6 order-sm-1'>
                        <div className='flexbox'>
                            <h6>New Arrivals</h6>
                            <h4>Next-Gen AirPods XR</h4>
                            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien commodo, fermentum erat vitae, efficitur ligula. Duis quis volutpat arcu. Nullam hendrerit ut ligula eget ultricies.</small></p>

                            <Button className='btn-same' variant='contained' color='primary'><ShoppingBasketIcon fontSize='small' />  &nbsp;$800</Button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services
