import React from "react";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import img from '../image/resto.jpg'
import './design.css'

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-light text-dark" id="navp">
      <nav class="navbar navbar-expand-lg text-dark " id="navp">
        <div class="container-fluid">
          <NavLink class="navbar-brand" href="#">
            <img
              src={img}
              alt="Logo"
              width="250"
              height="80"
              class="d-inline-block align-text-top"
            />
          </NavLink>
          <a class="navbar-brand text-dark m-3" href="#">
            Le Bon Restaurant
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="navbar-nav" id="nav1">
              <NavLink className="nav-link text-dark m-3" to="/restaurant">
                Restaurant
              </NavLink>
              <NavLink className="nav-link text-dark m-3" to="/villes">
                Villes
              </NavLink>
              <NavLink className="nav-link text-dark m-3" to="/zones">
                Zones
              </NavLink>
              <NavLink className="nav-link text-dark m-3" to="/series">
                Series
              </NavLink>
              <NavLink className="nav-link text-dark m-3" to="/specialites">
                Specialite
              </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <div>
      <footer
        class="text-center text-lg-start bg-light text-dark fixed-bottom"
        style={{ bottom: 0, position: "fixed" }}
      >
        
          <div class="container text-center">
            <div class="row mt-3">
              <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mt-5">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 "></i>Localistation des Restaurants
                </h6>
                <p>
                  Bienvenu dans votre site pour la localisation des Restaurrants
                </p>
              </div>
              <div class="col-md-4 col-lg-2 col-xl-2 mb-4 mt-5">
                <h6 class="text-uppercase fw-bold mb-4">Liens</h6>
                <p>
                  <NavLink className="nav-link text-dark" to="/Restaurant ">
                    Restaurant
                  </NavLink>
                </p>
                <p>
                  <NavLink className="nav-link text-dark" to="/zones">
                    Zone
                  </NavLink>
                </p>
                <p>
                  <NavLink className="nav-link text-dark" to="/villes">
                    Villes
                  </NavLink>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                <h6 class="text-uppercase fw-bold mb-4 mt-2 mt-5">Contact</h6>
                <p>
                  <i class="fas fa-home me-1"></i> Marrakech, Azzouzia 40000, Marrakech
                </p>
                <p>
                  <i class="fas fa-envelope me-1"></i>
                  Kourdi@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-1"></i> + 212 678906455
                </p>
              </div>
            </div>
          </div>
        <div
          class="text-center p-4 mt-5"
          style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright :
          <a class="text-reset fw-bold" href="#">
            {" "}
            Le Bon Restaurant
          </a>
        </div>
      </footer>
    </div>
  );
};

export { Header, Footer };
