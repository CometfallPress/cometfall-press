import { Outlet } from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import {useAppContext} from "./contexts/AppContext.jsx";

function AdminLayout(props) {

    const { user } = useAppContext()
	const tabs = props.tabs
	const navigate = useNavigate();
	const location = useLocation();
    const [selected, setSelected] = useState(location.pathname.split("/").slice(0, 4).join("/"))

	useEffect(() => {
		setSelected(location.pathname.split("/").slice(0, 4).join("/"))
	}, [location.pathname])

	return (
		<>
			<div className="w-[90vw] h-screen scale-111 origin-top-left">
				<div className={`grid grid-cols-3 gap-2 w-fit ml-10 font-semibold landscape:whitespace-nowrap`}>
					{Object.entries(tabs).map(([key, tab], index) => {
						return (
							<div key={key}
							     className={`col-${index} col-span-1 w-full mx-auto mt-2 px-2 pt-2 pb-1 ${tab.path===selected?"bg-white text-[#5f5475]":"bg-[#ffffff767]"} hover:text-[#ed2396] rounded-t-lg text-center place-content-end`}
							     onClick={() => {if (tab.path!==selected){setSelected(tab.path); navigate(tab.path)}}}
							>
								{tab.title}
							</div>
						)})
					}
				</div>
				<div className="w-full h-[80vh] m-auto bg-white rounded-xl">
					<div className="p-2 h-full">
                        {user&&(<Outlet />)}
					</div>
				</div>
			</div>
		</>
	)
}

AdminLayout.propTypes = {
	tabs: PropTypes.object.isRequired,
};

export default AdminLayout;