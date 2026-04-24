import { Outlet } from "react-router-dom";
import {useState} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function AdminLayout(props) {
	const [selected, setSelected] = useState(0)
	const tabs = props.tabs
	const navigate = useNavigate();

	return (
		<>
			<div className="w-screen h-screen">
				<div className={`grid grid-cols-${tabs.length} gap-2 w-fit ml-10 font-semibold hover:`}>
					{tabs.map((tab, index) => {
						return (
							<div key={index}
							     className={`col-${index} w-full mx-auto mt-2 px-2 pt-2 pb-1 ${index===selected?"bg-white text-[#5f5475]":"bg-[#ffffff99]"} hover:text-[#ed2396] rounded-t-lg text-center`}
							     onClick={() => {if (index!==selected){setSelected(index); navigate(tab.path)}}}
							>
								{tab.title}
							</div>
						)})
					}
				</div>
				<div className="w-full h-[90vh] m-auto bg-white rounded-xl">
					<div className="p-2">
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