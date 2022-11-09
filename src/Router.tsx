import { Route, Routes } from "react-router-dom";

import { Platform } from "./pages/Platform";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route
                path={`${import.meta.env.VITE_BASE_URL}/`}
                element={<Subscribe />}
            />
            <Route
                path={`${import.meta.env.VITE_BASE_URL}/lesson`}
                element={<Platform />}
            />
            <Route
                path={`${import.meta.env.VITE_BASE_URL}/lesson/:slug`}
                element={<Platform />}
            />
        </Routes>
    );
}
