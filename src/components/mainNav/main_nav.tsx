import { Link } from "react-router";

export const MainNav = () => {
  return (
    <div className="main-nav-wrapper basis-1/2">
      <div className="bg-blue-50 border border-solid border-blue-100 p-8 sticky top-0 w-64 overflow-y-auto h-screen">
        <div>APP_NAME</div>
        <hr className="my-4"/>
        <nav className="flex flex-col">
          <Link to='/'>HOME</Link>
          <Link to='/simulation'>SIMULATION</Link>
          <Link to='/map'>MAP</Link>
        </nav>
      </div>
    </div>
  );
};