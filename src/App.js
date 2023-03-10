import "./App.scss";
import TableUser from "./componemt/TableUser";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UpdateUser from "./componemt/UpdateUsers";
import { ToastContainer } from "react-toastify";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Routes history={history}>
        <Route path="/" element={<TableUser />} />
        <Route path="/:page" element={<TableUser />} />
        <Route path="/student/:id" element={<UpdateUser />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
