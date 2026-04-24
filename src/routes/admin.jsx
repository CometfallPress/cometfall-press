import TabSwitcher from "../elements/tabSwitcher.jsx";

function Admin() {
	return (
		<>
			<div className="w-screen h-screen place-items-center place-content-center">
				<TabSwitcher props={{ tabs:{} }} />
			</div>
		</>
	)
}

export default Admin