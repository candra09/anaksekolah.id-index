import React, { useState } from "react";
import logo from '../../assets/logo-180.png';
import '../../styles/Navbar.css';
import Login from "./Login";

function Navbar() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div class="container">
          <a className="navbar-brand" href="/"><img src={logo} alt="anaksekolah.id" width="128" height="80" /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Kelas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ekskul
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Promo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Testimoni
                </a>
              </li>
            </ul>
            <div className="buttons d-flex">
              <a href="" className="btn ms-2">
                <i class="fa fa-sign-in me-1"></i> Login
              </a>
              <a href="/regisrter_murid" className="btn btn-primary ms-2">
                <i class="fa fa-user-plus me-1"></i> Register
              </a>
            </div>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;

