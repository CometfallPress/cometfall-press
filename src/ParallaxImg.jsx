import ScrollContext from './ScrollContext'
import ScreenContext from "./ScreenContext";
import PropTypes from "prop-types"

function ParallaxImg(props) {

    const { src, alt, classes, img_classes, intensity, scrollPosition, offset } = props

    // style={{ transform: `translateY(${(scrollPosition-offset)*intensity}%)` }}
    return (
        <>
            <div className={classes} >
                <img src={src} alt={alt} className={img_classes} />
            </div>
        </>
    )
}

ParallaxImg.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string = '',
    classes: PropTypes.string = '',
    img_classes: PropTypes.string = '',
    intensity: PropTypes.number.isRequired,
    scrollPosition: PropTypes.number.isRequired,
    offset: PropTypes.number = 0,
};

export default ParallaxImg;