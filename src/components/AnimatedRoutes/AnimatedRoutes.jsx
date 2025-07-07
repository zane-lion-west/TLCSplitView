import { Routes, Route, useLocation} from "react-router-dom";

import Home from "../../routes/Home.jsx"; // Your routes
// import SplitView from "../../routes/SplitView.jsx";


export default function AnimatedRoutes() {
    const pageLocation = useLocation();

    return (
            <Routes location={pageLocation} key={pageLocation.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                {/* <Route path="/SplitView" element={<SplitView />} /> */}
            </Routes>
    )
}