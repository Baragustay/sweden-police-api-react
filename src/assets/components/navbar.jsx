import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-base-300 shadow-sm justify-center p-3">
            <ul className="menu menu-horizontal w-full justify-center gap-2 lg:gap-6 text-sm lg:text-base">

                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "px-3 py-2 font-semibold text-white"
                                : "px-3 py-2"
                        }
                    >
                        Start
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/crimeSearch"
                        className={({ isActive }) =>
                            isActive
                                ? "px-3 py-2 font-semibold text-white"
                                : "px-3 py-2"
                        }
                    >
                        Välj län
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                            isActive
                                ? "px-3 py-2 font-semibold text-white"
                                : "px-3 py-2"
                        }
                    >
                        Statistik
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;