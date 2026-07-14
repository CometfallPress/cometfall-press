import PropTypes from "prop-types";

export function FollowUsOnKickstarter(props) {

	const { screenState, breakpoints } = props;

	return (
		<a
			href={`${import.meta.env.VITE_REDIRECT_URL}/kickstarter`}
			target="_blank"
			rel="noreferrer"
			className={`block ${screenState.ratio>breakpoints.bp1?'text-[1.4vw]':'text-[2.4vw] '} w-[60%] text-center items-center rounded-full bg-linear-to-t from-emerald-500 hover:from-emerald-400 to-emerald-500 px-5 py-4 m-auto text-white! hover:scale-101 duration-100 transition-all`}
		>
			<p className="m-auto">
				Follow on Kickstarter
			</p>
		</a>
	)
}

FollowUsOnKickstarter.propTypes = {
	screenState: PropTypes.object.isRequired,
	breakpoints: PropTypes.object.isRequired,
}