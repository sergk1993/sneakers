import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="mainWrapper">
      <header>header</header>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
}

export default Root;
