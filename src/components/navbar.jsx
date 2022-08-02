import { React } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        // Link - when we use <NavLink> tag, the entire html and the bundle is downloaded again and again everytime the user navigates from one page to another. To overcome
        // this issue, we use <Link>. This reloads the page without reloading all its assets. Link prevents a full reload.
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/movies">Movies</NavLink>
                        <NavLink className="nav-link" to="/customers">Customers</NavLink>
                        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;


