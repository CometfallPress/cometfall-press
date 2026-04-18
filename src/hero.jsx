import PropTypes from "prop-types";
import ScreenContext from "./ScreenContext.jsx";
import constants from "./constants.jsx";

function Hero(props) {

	const {bp, bp2, bp3} = constants();
	const { screenSize } = ScreenContext();

	return (
		<div id={props.id} className="flex flex-col mt-2 text-white scale-x-90">
			<img className={`drop-shadow-lg ${screenSize.ratio<=bp?"w-[33vw]":"w-[50%]"} m-auto`} src={props.src} alt={props.name}/>
			<div className={`font-semibold text-center mt-5 ${screenSize.ratio<=bp?"text-[4.5vw]":"text-[3.5vh]"}`}>{props.name}</div>
			<div className="text-center">{props.title}</div>
			<p className="text-center m-auto mt-3 p-1 w-4/5">
				{props.description}
			</p>
		</div>
	)
}

Hero.propTypes = {
	id: PropTypes.string.isRequired,
	src: PropTypes.any.isRequired,
	name: PropTypes.string = '',
	title: PropTypes.string = '',
	description: PropTypes.string = '',
};


export default Hero