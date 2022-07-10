import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Expenses from "./components/expenses";
import Invoices from "./components/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path=":invoiceId" element={<Invoices />} />
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
       <Route path=":invoiceId" element={<Invoices />} />
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>White noise refers to sounds that mask other sounds that might occur naturally in an environment. If you live in a city, for example, white noise could help block out noises associated with traffic. Specific sounds might be used to help encourage sleep regardless of environmental noises.</p>
        </main>
      }
    />
  {/* </Route> */}
  </Routes>
  </BrowserRouter>
);