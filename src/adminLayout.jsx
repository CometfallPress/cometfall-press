import { Outlet } from "react-router-dom";
import {useEffect, useState} from "react";

import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

function AdminLayout(props) {
	const [selected, setSelected] = useState(0)
	const tabs = props.tabs
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		for (let i=0; i < tabs.length; i++) {
			if (tabs[i].path===location.pathname) {
				setSelected(i)
			}
		}
	}, [location.pathname, tabs])

	return (
		<>
			<div className="w-screen h-screen">
				<div className={`grid grid-cols-3 gap-2 w-fit ml-10 font-semibold`}>
					{tabs.map((tab, index) => {
						return (
							<div key={index}
							     className={`col-${index} w-full mx-auto mt-2 px-2 pt-2 pb-1 ${index===selected?"bg-white text-[#5f5475]":"bg-[#ffffff767]"} hover:text-[#ed2396] rounded-t-lg text-center`}
							     onClick={() => {if (index!==selected){setSelected(index); navigate(tab.path)}}}
							>
								{tab.title}
							</div>
						)})
					}
				</div>
				<div className="w-full h-[90vh] m-auto bg-white rounded-xl">
					<div className="p-2 h-full">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

AdminLayout.propTypes = {
	tabs: PropTypes.array.isRequired,
};

export default AdminLayout;