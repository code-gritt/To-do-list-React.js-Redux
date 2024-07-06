import { Provider } from "react-redux";
import CustomerAdd from "./components/CustomerAdd";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: "center" }}>
          <h1>React Redux tutorial</h1>
          <CustomerAdd />
        </div>
      </Provider>
    </>
  );
}

export default App;
