import PropTypes from "prop-types";


export default function SocialIcons(socialLinks) {
	return (
		<div className={`flex justify-center landscape:space-x-6 portrait:space-x-3`}>
			{Object.entries(socialLinks.socialLinks).map(([key, value]) => {

				return (
					<a key={key} href={value} target="_blank" rel="noopener noreferrer" className="social-icon">
						<i className={`fa${key==="envelope"?"s":"b"} fa-${key}${key === "kickstarter" ? '-k' : ''} landscape:text-xl portrait:text-sm`}></i>
					</a>
				)
			})}
		</div>
	)
}

SocialIcons.propTypes = {
	socialLinks: PropTypes.object.isRequired,
};