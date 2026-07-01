import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout.jsx";
import AdminLayout from "./adminLayout.jsx";

import Team from "./routes/team.jsx";
import Project from "./routes/project.jsx";
import Login from "./routes/login.jsx";
import Admin from "./routes/admin.jsx";
import ExternalRedirect from "./routes/externalRedirect.jsx";
import NewsletterSubscribers from "./routes/newsletterSubscribers.jsx";
import NewsletterEditor from "./routes/newsletterEditor.jsx";
import NewsletterList from "./routes/newsletterList.jsx";

import { AppContext } from "./contexts/AppContext.jsx";
import ScrollContext from "./contexts/ScrollContext.jsx";
import ScreenContext from "./contexts/ScreenContext.jsx";
import MouseContext from "./contexts/MouseContext.jsx";
import ToastContext from "./contexts/ToastContext.jsx";
import constants from "./contexts/Constants.jsx";
import { api } from "./contexts/CSRF.jsx";

import ToastStack from "./elements/toastStack.jsx";
import Modal from "./elements/modal.jsx";

function App() {

	const [user, setUser] = useState(null)
	const [modal, setModal] = useState(null)
	const scrollState = ScrollContext()
	const screenState = ScreenContext()
	const breakpoints = constants()
	const mouseState = MouseContext()
	const toastState = ToastContext()


	const tabs = {
		"/admin/newsletter/subscribers": {title: "Newsletter Subscribers", path: "/admin/newsletter/subscribers"},
		"/admin/newsletter/list": {title: "Newsletter List", path: "/admin/newsletter/list"},
		"/admin/newsletter/editor": {title: "Newsletter Editor", path: "/admin/newsletter/editor"}
	}

	const fetchUser = async () => {
		const { res, data } = await api("/me", {
			method: "GET",
		})
		return { res, data }
	}

	useEffect(() => {
		const boot = async () => {
			try {
				const { res, data } = await fetchUser();

				if (res?.status === 200) {
					setUser(data.username);
				} else {
					setUser(null);
				}
			} catch (err) {
				console.log(err);
				setUser(null);
			}
		};
		boot();
	}, []);

	return (
		<AppContext.Provider value={
			{
				user,
				scrollState,
				screenState,
				mouseState,
				toastState,
				breakpoints,
				modal,
				setModal,
			}
		}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>

						<Route path="" element={<Project />} />

						<Route path="home" element={<Navigate to="/" />} />
						<Route path="team" element={<Team />} />
						<Route path="login" element={<Login />} />

						<Route path="admin" element={<AdminLayout tabs={tabs}/>}>
							<Route index element={<Admin />}/>
							<Route path="newsletter/subscribers" element={<NewsletterSubscribers />} />
							<Route path="newsletter/list" element={<NewsletterList />} />
							<Route path="newsletter/editor/" element={<NewsletterEditor />} />
							<Route path="newsletter/editor/:documentId" element={<NewsletterEditor />} />
						</Route>

						<Route
							path="kickstarter"
							element={
								<ExternalRedirect to="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia?ref=ac9ed8"
								/>
							}
						/>
						<Route 
							path="playtest" 
							element={
								<ExternalRedirect to="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia?ref=cratyi" 
								/>
							} 
						/>
						<Route 
							path="feedback" 
							element={
								<ExternalRedirect to="https://forms.gle/gZJvmk8BAEDLZ1TX8" 
								/>
							} 
						/>
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
				<ToastStack/>
				<Modal modal={modal}/>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;