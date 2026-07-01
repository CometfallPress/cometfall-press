import PropTypes from "prop-types";


export default function SocialIcons(socialLinks) {
	return (
		<div className="flex justify-center space-x-6">
			{Object.entries(socialLinks.socialLinks).map(([key, value]) => {

				return (
					<a key={key} href={value} target="_blank" rel="noopener noreferrer" className="social-icon">
						<i className={`fab fa-${key}${key === "kickstarter" ? '-k' : ''} text-xl`}></i>
					</a>
				)
			})}
			<a href="mailto:aaron.kumar@cometfallpress.com" target="_blank" rel="noopener noreferrer" className="social-icon">
				<i className="fas fa-envelope text-2xl"></i>
			</a>
		</div>
	)
}

SocialIcons.propTypes = {
	socialLinks: PropTypes.object.isRequired,
};