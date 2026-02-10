import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css'
import Layout from './layout.jsx'
import Team from './team.jsx'
import Project from './project.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Project/>} />
          <Route path="team" element={<Team/>} />
          <Route path="home" element={<Navigate to="https://cometfallpress.com/"/>}/>
          <Route
              path="*"
              element={<Navigate to=""/>}
          />
        </Route>
      </Routes>
  </BrowserRouter>
)
