import {useAppContext} from "../contexts/AppContext.jsx";

function Admin() {

	const { user } = useAppContext();

	return (
		<>
			<p className="font-bold text-center mx-auto my-4">Admin Panel</p>
			<div
				className="w-full h-[90%] relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-2xl border border-slate-200">
				{(user!=="loading"&&user!==null)&&(
					<>
						<div className="relative flex flex-col justify-center items-center w-full text-center h-full">
							<p className="text-2xl p-2 font-bold">Hi, {user}</p>
							<p className="text-lg p-2">Use the tabs above to access newsletter related features.</p>
						</div>
					</>

				)}
			</div>
		</>
	)
}

export default Admin