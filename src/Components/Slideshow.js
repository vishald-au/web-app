import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image1 from '../a1.png'
import Image2 from '../a2.png'


const images = [
    
  ];

const Slideshow = () => {

    const images = [
        Image1,
        Image2,
      ];
    
      const zoomInProperties = {
        scale: 1.2,
        duration: 1500,
        indicators: false,
        arrows: false,
        autoplay: true,
        canSwipe: true
      }


    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                <div className='effect-bg' key={index} style={{width: "100%"}}>
                    <img src={each} />
                </div>
                ))}
            </Zoom>
        </div>
    )
}

export default Slideshow
