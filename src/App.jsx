import { Provider } from "react-redux";
import AppContext from "./AppContext";
import ProviderContext from "./context/ProviderContext";
import AppRedux from "./AppRedux";
import { store } from "../app/store";

function App() {
  return (
    <>
      {/* Using Redux */}
      <Provider store={store}>
        <AppRedux />
      </Provider>

      {/* Using Context API */}
      <ProviderContext>
        <AppContext />
      </ProviderContext>
    </>
  );
}

export default App;
