import { BrowserRouter, Route, Routes } from "react-router-dom"
import Info from "./Navpages/Info"
import Fotter from "./Components/Fotter"
import Courceinfo from "./Components/Courceinfo"
import Rating from "./Components/Rating"
import Headerpage from "./Components/Headerpage"
import Nav from "./Components/Nav"
import Offer from "./Navpages/Offer"
import Contact from "./Navpages/Contact"
import Cources from "./Navpages/Cources"

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Headerpage />
                {/* <Info /> */}
                {/* <Cources /> */}
                {/* <Contact /> */}
                {/* <Offer /> */}
                <Routes>
                    {/* <Route path="/" element={<Headerpage />} /> */}
                    <Route path="/info" element={<Info />} />
                    <Route path="/Cources" element={<Cources />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Rating />
                <Courceinfo />
                <Fotter />
            </BrowserRouter>

        </>
    )
}

export default Router