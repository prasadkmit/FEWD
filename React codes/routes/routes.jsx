import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../components/home/Home"
import Contact from "../components/contact/Contact"
import About from "../components/about/About"
import Header from "../components/Header"

const Routing = ()=> {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;