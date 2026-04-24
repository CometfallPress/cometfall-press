import {useEffect, useState} from "react";
import {api, initCSRF} from "./contexts/CSRF.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout.jsx";
import Team from "./routes/team.jsx";
import Project from "./routes/project.jsx";
import Login from "./routes/login.jsx";
import Admin from "./routes/admin.jsx";

import ExternalRedirect from "./routes/externalRedirect.jsx";
import ScrollContext from "./contexts/ScrollContext.jsx";
import ScreenContext from "./contexts/ScreenContext.jsx";
import MouseContext from "./contexts/MouseContext.jsx";
import constants from "./contexts/Constants.jsx";

import { AppContext } from "./contexts/AppContext.jsx";
import NewsletterEditor from "./routes/newsletterEditor.jsx";
import NewsletterList from "./routes/newsletterList.jsx";
import AdminLayout from "./adminLayout.jsx";


function App() {

	const [user, setUser] = useState(null)
	const scrollState = ScrollContext()
	const screenState = ScreenContext()
	const breakpoints = constants();
	const mouseState = MouseContext();

	const tabs = [
		{title: "Admin Panel", path: "/admin/"},
		{title: "Newsletter List", path: "/admin/newsletter/"},
		{title: "Newsletter Editor", path: "/admin/newsletter/editor"}
	];

	const fetchUser = async () => {
		const { res, data } = await api("/me", {
			method: "GET",
		})
		return { res, data }
	}

	useEffect(() => {
		try {
			fetchUser().then(r => {
				if(r.res&&r.data){
					if (r.res.status === 200) {
						setUser(r.data.username)
					}
					else {
						setUser(null)
					}
				}
			})
		} catch (err) {
			console.log(err)
			setUser(null)
		}
	}, [])

	useEffect(() => {
		initCSRF();
	}, []);

	return (
		<AppContext.Provider value={{ user, scrollState, screenState, mouseState, breakpoints }}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="" element={<Project />} />
						<Route path="home" element={<Navigate to="/" />} />
						<Route path="team" element={<Team />} />
						<Route path="login" element={<Login />} />
						<Route path="admin" element={<AdminLayout tabs={tabs}/>}>
							<Route index element={<Admin />}/>
							<Route path="newsletter" element={<NewsletterList />} />
							<Route path="newsletter/editor" element={<NewsletterEditor />} />
						</Route>

						<Route
							path="kickstarter"
							element={
								<ExternalRedirect to="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia?ref=ac9ed8"
								/>
							}
						/>

						<Route path="playtest" element={<ExternalRedirect to="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia?ref=cratyi" />} />
						<Route path="feedback" element={<ExternalRedirect to="https://forms.gle/gZJvmk8BAEDLZ1TX8" />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;