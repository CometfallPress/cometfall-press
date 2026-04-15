import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
const ExternalRedirect = ({ to }) => {
	useEffect(() => {
		window.location.replace(to);
	}, [to]);
	return (
		<>
			<div className='w-screen h-screen'>
				<div className='flex flex-col h-full m-auto place-items-center place-content-center  scale-120'>
					<p className="text-2xl font-bold mb-5">Redirecting...</p>
					<div>
						<svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-[#7459a5]" xmlns="http://www.w3.org/2000/svg"
						     fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
							<path className="opacity-75" fill="currentColor"
							      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					</div>
				</div>
			</div>
		</>
	)
}

export default ExternalRedirect