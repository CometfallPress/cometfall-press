import 'react';
import '../index.css'
import SocialIcons from "./media-icons.jsx";

// Social Media Links JSON
const socialLinks = {
    bluesky: "https://bsky.app/profile/cometfallpress.bsky.social",
    instagram: "https://www.instagram.com/cometfallpress/",
    linkedin: "https://www.linkedin.com/company/cometfallpress/",
    twitter: "https://twitter.com/CometfallPress",
    facebook: "https://www.facebook.com/profile.php?id=61572637307560",
    discord: "https://discord.gg/afgrQbd7St",
    kickstarter: `${import.meta.env.VITE_REDIRECT_URL}/kickstarter/`,
};

function Footer() {
    return (
        <footer id='contact' className="bg-dark text-light text-center p-4 mt-0 scroll-smooth origin-center scale-y-125 scale-x-133">
            <div className="container mx-auto scale-x-90">
                <p className="text-sm md:text-base">
                    © {new Date().getFullYear()} Cometfall Press. All Rights Reserved.
                </p>

                {/* Social Media Icons */}
                <div className="mt-4">
                    <SocialIcons socialLinks={socialLinks} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
