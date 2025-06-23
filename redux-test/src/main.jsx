import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import {Provider} from "react-redux";
import {store} from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* bungkus dengan provider store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
