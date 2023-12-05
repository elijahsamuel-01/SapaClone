import { useState } from "react";
import pix from "./Assets/775118.jpg";
import { RouterProvider } from "react-router";
import { Router } from "./router/Router";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={Router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
