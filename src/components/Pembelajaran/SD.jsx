import React from "react";
import "../../styles/SD.css";

export default function SD() {
  return (
    <div className="main">
      <div class="fluid-jumbotron bg-blue p-5">
        <div className="container">
          <div className="overlay text-dark align-center">
            <h5 class="display-5 fw-bold my-3 text-center text-white">
              Temukan Keseruan <br />
              Pembelajaran Online <br />
              Yang Menarik
            </h5>
          </div>
        </div>
      </div>

      <div className="container my-3 bg-blue border-25">
        <div class="d-flex flex-row mx-4 py-3 text-center">
          <h3 className="my-3 text-white">Pilih Jenjang Pendidikan : </h3>
          <div className="col-md mx-3">
            <a
              href="../SD"
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SD
            </a>
          </div>
          <div className="col-md mx-3">
            <a
              href=""
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SMP
            </a>
          </div>
          <div className="col-md mx-3">
            <a
              href=""
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SMA
            </a>
          </div>
          <div className="col-md mx-3">
            <a
              href=""
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SMK
            </a>
          </div>
        </div>
        <div class="card-group mx-2 my-3 text-white">
          <div className="card mx-3 mb-5 bg-info bg-img border-25" id="Kelas1">
            <div class="card-body bg-image"></div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fw-bolder m-3 py-2 flex-grow-1 text-center fs-3">
                Pembelajaran Kelas 1
              </h6>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info bg-img" id="Kelas2">
            <div class="card-body bg-image"></div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fw-bolder m-3 py-2 flex-grow-1 text-center fs-3">
                Pembelajaran Kelas 2
              </h6>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info bg-img" id="Kelas3">
            <div class="card-body bg-image"></div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fw-bolder m-3 py-2 flex-grow-1 text-center fs-3">
                Pembelajaran Kelas 3
              </h6>
            </div>
          </div>
        </div>
        <div class="card-group mx-2 my-3 text-white">
          <div className="card mx-3 mb-5 bg-info bg-img" id="Kelas4">
            <div class="card-body bg-image"></div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fw-bolder m-3 py-2 flex-grow-1 text-center fs-3">
                Pembelajaran Kelas 4
              </h6>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info bg-img" id="Kelas5">
            <div class="card-body bg-image"></div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fw-bolder m-3 py-2 flex-grow-1 text-center fs-3">
                Pembelajaran Kelas 5
              </h6>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info bg-img" id="Kelas6">
            <div class="card-body bg-image"></div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fw-bolder m-3 py-2 flex-grow-1 text-center fs-3">
                Pembelajaran Kelas 6
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
