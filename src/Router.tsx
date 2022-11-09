import { Route, Routes } from "react-router-dom";

import { Platform } from "./pages/Platform";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/lesson" element={<Platform />} />
            <Route path="/lesson/:slug" element={<Platform />} />
        </Routes>
    );
}
