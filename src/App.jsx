import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import PageLayout from "./pages/PageLayout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={<PageLayout />}
                errorElement={<ErrorPage />}
            >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<OurServices />} />
                <Route path="contact" element={<ContactUs />} />

                <Route path="*" element />
            </Route>
        </Route>
    )
);

function App() {
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
}

export default App;
