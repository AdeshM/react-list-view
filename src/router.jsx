import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { RootLayout } from "./containers/RootLayout";
import { ErrorLayout } from "./containers/ErrorLayout";
import Demo from "./containers/DemoListing/Demo";
import DemoListVanilla from "./containers/DemoListVanilla";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        // errorElement: <>Unknown Error Occured</>,
        children: [
            {

                // path: "test-1",
                index: true,
                element: <Demo />
            },
            {
                path: "test-2",
                element: <DemoListVanilla />
            },
            {
                path: "test-2.1",
                element: <DemoListVanilla version={'2.1'} />
            },
            {
                path: "test-3",
                // element: <>Hello 3</>,
                children: [
                    {
                        index: true,
                        element: <>Hello 33 Index</>
                    },
                    {
                        path: "test-33",
                        element: <>Hello 33</>
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <ErrorLayout/>
    }
])