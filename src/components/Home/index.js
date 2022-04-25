import React from "react";
import prom from "../../assets/videos/prom.mp4";

export default function index() {
  return (
    <div className="main">
      <div class="fluid-jumbotron bg-blue p-5" id="jumbotron">
        <div className="container overlay text-dark align-center">
          <h5 class="display-5 fw-bold mb-0">
            Semua kebutuhan belajar <br />
            ada di AnakSekolah.ID
          </h5>
          <p class="card-text fw-bold py-3">
            Aplikasi Pembelajaran Online <br />
            Untuk anak Sekolah
          </p>
          <a href="" className="btn btn-md btn-primary  rounded-pill">
            Download Aplikasi
          </a>
        </div>
      </div>

      <div className="container my-3 bg-blue border-25">
        <div className="d-flex flex-row mx-4 py-3 text-center">
          <div className="col-md-4">
            <h4 className="m-4 text-white">Pilih Jenjang Pendidikan </h4>
          </div>
          <div className="col-md-2">
            <a
              href="/SD"
              className="btn btn-md m-4 w-75 rounded-pill bg-primary text-white"
            >
              SD
            </a>
          </div>
          <div className="col-md-2">
            <a className="btn btn-md m-4 w-75 rounded-pill bg-primary text-white">
              SMP
            </a>
          </div>
          <div className="col-md-2">
            <a className="btn btn-md m-4 w-75 rounded-pill bg-primary text-white">
              SMA
            </a>
          </div>
          <div className="col-md-2">
            <a className="btn btn-md m-4 w-75 rounded-pill bg-primary text-white">
              SMK
            </a>
          </div>
        </div>
        <div class="card-group mx-2 my-3 text-white">
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image">
              <div class="row d-flex justify-content-end">
                <a className="btn btn-sm bg-light m-3 rounded-pill w-50 fw-bold">
                  Promo
                </a>
              </div>
              <div className="row">
                <h5 className="fst-italic mx-3">
                  Paket Pembelajaran <br />
                  Kelas Sekolah Dasar
                </h5>
              </div>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <div className="col-md">
                <h6 className="fst-italic fw-bolder my-4 mx-2">
                  Rp 1.000.000
                </h6>
              </div>
              <div className="col-md">
                <a className="btn bg-warning rounded-pill btn-block fw-bolder my-3">Langganan</a>
              </div>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image">
              <div class="row d-flex justify-content-end">
                <a className="btn btn-sm bg-light m-3 rounded-pill w-50 fw-bold">
                  Promo
                </a>
              </div>
              <div className="row">
                <h5 className="fst-italic mx-3">
                  Paket Pembelajaran <br />
                  Kelas Sekolah Menengah Pertama
                </h5>
              </div>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <div className="col-md">
                <h6 className="fst-italic fw-bolder my-4 mx-2">
                  Rp 1.000.000
                </h6>
              </div>
              <div className="col-md">
                <a className="btn bg-warning rounded-pill btn-block fw-bolder my-3">Langganan</a>
              </div>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image">
              <div class="row d-flex justify-content-end">
                <a className="btn btn-sm bg-light m-3 rounded-pill w-50 fw-bold">Promo</a>
              </div>
              <div className="row">
                <h5 className="fst-italic mx-3">
                  Paket Pembelajaran <br />
                  Kelas Sekolah Menengah <br /> Atas
                </h5>
              </div>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <div className="col-md">
                <h6 className="fst-italic fw-bolder my-4 mx-2">Rp 1.000.000</h6>
              </div>
              <div className="col-md">
                <a className="btn bg-warning rounded-pill btn-block fw-bolder my-3">Langganan</a>
              </div>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image">
              <div class="row d-flex justify-content-end">
                <a className="btn btn-sm bg-light m-3 rounded-pill w-50 fw-bold">Promo</a>
              </div>
              <div className="row">
                <h5 className="fst-italic mx-3">
                  Paket Pembelajaran <br />
                  Kelas Sekolah Menengah <br /> Kejuruan
                </h5>
              </div>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <div className="col-md">
                <h6 className="fst-italic fw-bolder my-4 mx-2">Rp 1.000.000</h6>
              </div>
              <div className="col-md">
                <a className="btn bg-warning rounded-pill btn-block fw-bolder my-3">Langganan</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="jumbotron my-3">
        <h2 class="text-center py-3 fw-bolder fs-1">
          Kejar cita-citamu bersama AnakSekolah.ID
        </h2>
        <div class="container">
          <video class="w-100" controls src={prom}></video>
        </div>
      </div>

      <div className="container my-5">
        <div class="d-flex align-items-start mb-3">
          <div class="col mx-2">
            <div class="h-25">
              <h1 class="fw-bolder py-5 px-3">
                Apa saja yang bisa kamu dapatkan dalam AnakSekolah.id?
              </h1>
            </div>
            <div class="card bg-primary text-white box-border py-4 h-100">
              <div class="card-body rounded-end">
                <h4 class="card-title fw-bolder">Konten Belajar Berkualitas</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium dignissimos perspiciatis est. Hic accusamus vitae,
                  eaque, cupiditate neque accusantium commodi distinctio nulla
                  ullam soluta voluptates nesciunt nam, modi explicabo facere.
                </p>
                <br />
                <h5 class="fw-bolder">Apa saja konten belajarnya?</h5>
                <div className="row text-center">
                  <div className="col">
                    <img src="./img/icon/Video Playlist.png" alt="Video" />
                    <p>Video pembelajaran menarik</p>
                  </div>
                  <div className="col">
                    <img src="./img/icon/Test Passed.png" alt="Test" />
                    <p>Tugas di setiap Video</p>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <img
                      src="./img/icon/Spiral Bound Booklet.png"
                      alt="Booklet"
                    />
                    <p>Rangkuman dan Infografik</p>
                  </div>
                  <div className="col">
                    <img src="./img/icon/Exam.png" alt="" />
                    <p>Soal Latihan Berkualitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mx-2">
            <div class="box-border h-50 my-2">
              <h4 className="my-2">
                Ratusan ribu soal latihan <br /> untuk persiapan ujian
              </h4>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                repellendus rem voluptatem doloribus tempora commodi, magnam
                sunt earum optio expedita distinctio quaerat neque dolor ex,
                veritatis quod, deserunt reprehenderit iure.
              </p>
              <img className="w-100" src="./img/sec01.png" alt="section" />
            </div>
            <div class="card-body box-border h-50 my-2">
              <img
                className="w-100"
                src="./img/footersec02.png"
                alt="section"
              />
              <h4 className="my-4">
                Ratusan ribu soal latihan <br /> untuk persiapan ujian
              </h4>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                repellendus rem voluptatem doloribus tempora commodi, magnam
                sunt earum optio expedita distinctio quaerat neque dolor ex,
                veritatis quod, deserunt reprehenderit iure.
              </p>
            </div>
          </div>
          <div class="col mx-2">
            <div class="box-border h-50 my-2">
              <h4 className="my-2">
                Ratusan ribu soal latihan <br /> untuk persiapan ujian
              </h4>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                repellendus rem voluptatem doloribus tempora commodi, magnam
                sunt earum optio expedita distinctio quaerat neque dolor ex,
                veritatis quod, deserunt reprehenderit iure.
              </p>
              <img className="w-100" src="./img/sec03.png" alt="section" />
            </div>
            <div class="card-body box-border h-50 my-2">
              <img className="w-100" src="./img/sec04.png" alt="section" />
              <h4 className="my-4">
                Ratusan ribu soal latihan <br /> untuk persiapan ujian
              </h4>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                repellendus rem voluptatem doloribus tempora commodi, magnam
                sunt earum optio expedita distinctio quaerat neque dolor ex,
                veritatis quod, deserunt reprehenderit iure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div class="d-flex align-items-start my-5" style={{ height: 400 }}>
          <div className="col-6 bg-blue border-rd h-100">
            <h1 className="fs-1 text-white py-4 px-3 my-3 mx-4">
              Download AnakSekolah.ID <br />
              di HP
            </h1>
            <p className="text-white px-3 mx-4 my-4 fs-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              aspernatur. Sed unde aliquid, tempore, facere perspiciatis in
              obcaecati harum, voluptate ad deleniti expedita est porro commodi
              quis vel alias impedit.
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg px-5 my-5 mx-4 rounded-pill"
            >
              Download Aplikasi
            </a>
          </div>
          <div className="col-6 text-white mb-4">
            <img
              src="./img/Online robot.png"
              alt="robot"
              className="align-center justify-content-center w-auto"
            />
          </div>
        </div>
      </div>

      <div className="container my-4 p-3">
        <h3 className="fw-bolder m-3 p-3">Yang seru di AnakSekolah.ID</h3>
        <div className="row mx-2">
          <div className="col-4">
            <img src="./img/slide/1.png" className="w-100" />
          </div>
          <div className="col-4">
            <img src="./img/slide/2.png" className="w-100" />
          </div>
          <div className="col-4">
            <img src="./img/slide/3.png" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container my-4">
        <h3 className="fw-bolder m-3 p-3 text-center">
          Belajar bersama Guru ahli terbaik
        </h3>
        <div class="card-group mx-2 my-3 text-white">
          <div className="card mx-3 mb-5">
            <div class="card-body bg-image" id="T1"></div>
            <div className="card-footer bg-light text-dark">
              <p className="text-center fst-italic fw-bolder">
                Nama Guru
                <br />
                Mapel
              </p>
              <p className="m-5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae excepturi mollitia accusamus natus cumque,
                reprehenderit voluptates. Ducimus eveniet quos molestias iste
                unde iusto adipisci distinctio vero impedit saepe, modi officia?
              </p>
            </div>
          </div>
          <div className="card mx-3 mb-5 rounded-pill">
            <div class="card-body bg-image" id="T1"></div>
            <div className="card-footer bg-light text-dark">
              <p className="text-center fst-italic fw-bolder">
                Nama Guru
                <br />
                Mapel
              </p>
              <p className="m-5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae excepturi mollitia accusamus natus cumque,
                reprehenderit voluptates. Ducimus eveniet quos molestias iste
                unde iusto adipisci distinctio vero impedit saepe, modi officia?
              </p>
            </div>
          </div>
          <div className="card mx-3 mb-5 rounded-pill">
            <div class="card-body bg-image" id="T1"></div>
            <div className="card-footer bg-light text-dark">
              <p className="text-center fst-italic fw-bolder">
                Nama Guru
                <br />
                Mapel
              </p>
              <p className="m-5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae excepturi mollitia accusamus natus cumque,
                reprehenderit voluptates. Ducimus eveniet quos molestias iste
                unde iusto adipisci distinctio vero impedit saepe, modi officia?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-2 p-1">
        <h3 className="fw-bolder p-3 text-center">
          Paling baru di AnakSekolah.id
        </h3>
        <div class="d-flex align-items-start mb-3">
          <div className="col m-4 bg-image border-25" id="page-1"></div>
          <div className="col">
            <div className="col mx-4 mt-4 bg-image border-25" id="page-2"></div>
            <div className="col mx-4 bg-image border-25" id="page-3"></div>
          </div>
          <div className="col mx-2">
            <div className="col mx-4 mt-4 bg-image border-25" id="page-4"></div>
            <div className="col mx-4 bg-image border-25" id="page-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
