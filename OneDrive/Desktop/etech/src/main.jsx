import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from './components/routes/Route';
import ContextApi from "./components/Context/ContextApi";

createRoot(document.getElementById("root")).render(
<ContextApi>
<RouterProvider router={router}>
     <App />
  </RouterProvider>
</ContextApi>
);
