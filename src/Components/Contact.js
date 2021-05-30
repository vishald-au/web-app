import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = () => {
    return (
        <div className='area'>
            <div className='container'>
                <div className='row'>
                     
                        
                         
                        <div className='col-sm-12 col-md-6'>
                            <div className='flexbox'>
                                <h6>Contact</h6>
                                <h4>Leave a message</h4>
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien commodo, fermentum erat vitae, efficitur ligula. Duis quis volutpat arcu. Nullam hendrerit ut ligula eget ultricies.</small></p>
                                
                                
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 expadding'>

                        <form noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label="Name"
                                defaultValue=" " 
                                variant="outlined"
                            />
                            <TextField
                                id="email"
                                label="Email"
                                defaultValue=" " 
                                variant="outlined"
                            />
                            <TextField
                                id="message"
                                label="Message"
                                multiline
                                rows={3}
                                defaultValue=" " 
                                variant="outlined"
                            /> 
                            <Button className='btn-same' variant='contained' color='primary'>Send</Button>
                        </form>
                        </div>
                        
                </div>
             
            </div>                
        </div>
    )
}

export default Contact
