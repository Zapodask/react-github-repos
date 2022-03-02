import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Repositories from './pages/repositories'

export default function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:username" element={<Repositories />} />
        </Routes>
    )
}
