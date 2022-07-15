import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { publicRoutes } from "~/routes";
import "./App.scss";

function App() {
    return (
        <Router>
            <div className="max-w-[1200px] mx-auto">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = Fragment;
                        if (route.layout) {
                            Layout = route.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
