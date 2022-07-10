import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h3 class="display-1">QuoteFold</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
     <Outlet /> 

      <p class="lead">
      “Brain is the most powerful device which can work bamboozled in both construction mode and destruction mode” ― J. Nedumaan
</p>
    </div>
  );
}
