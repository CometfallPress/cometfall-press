import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css'
import Layout from './layout.jsx'
import Team from './team.jsx'
import Project from './project.jsx'
import ExternalRedirect from "./ExternalRedirect.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="" element={<Project/>}/>
                <Route path="team" element={<Team/>}/>
                <Route path="home" element={<Navigate to=""/>}/>
                <Route path="kickstarter" element={<ExternalRedirect to="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia?ref=ac9ed8"/>}/>
                <Route path="playtest" element={<ExternalRedirect to="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia?ref=cratyi"/>}/>
                <Route path="feedback" element={<ExternalRedirect to="https://forms.gle/gZJvmk8BAEDLZ1TX8"/>}/>
                <Route
                    path="*"
                    element={<Navigate to=""/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>
)
