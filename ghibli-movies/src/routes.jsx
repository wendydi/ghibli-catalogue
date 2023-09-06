import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './pages/Movies'
import Infos from './pages/Infos'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Curiosities from './pages/Curiosities'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/infos/" element={<Infos />}></Route>
                <Route path="/curiosities" element={<Curiosities />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
} 

export default AppRoutes