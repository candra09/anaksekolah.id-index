import React from "react";
import "../../App.css";
import mtk from "../../assets/img/IconMTK.png";
import user from "../../assets/icon/user.png";

export default function Silabus() {
    return (
        <div className="container">
            <div className="col my-5 border-25">
                <div className="row bg-dblue">
                    <h1 className="my-3 mx-5 p-3 text-white">Matematika</h1>
                </div>
                <div className="row d-flex bg-blue">
                    <div className="col-md-3 d-lg-inline-flex p-5">
                        <img src={mtk} alt="" className="w-75 mx-5" />
                    </div>
                    <div className="col-md-9 d-lg-inline-flex">
                        <div className="mt-5 mx-5 text-white">
                            <h1 className="fw-bolder">Matematika kelas 3</h1>
                            <br />
                            <p className="fs-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Aliquid corrupti autem repellat magni consectetur dicta officiis
                                facilis dolores quia fugit! Laudantium, illum totam reiciendis
                                possimus minima corporis dolorum autem beatae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comment */}
            <div className="col my-5 border-25">
                <div className="row bg-dblue">
                    <nav class="navbar navbar-expand-lg bg-dblue navbar-dark">
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav mx-3">
                                <li class="nav-item active">
                                    <a class="nav-link" href="../Silabus">
                                        Silabus
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="../Tugas">
                                        Tugas
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Soal">
                                        Soal
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/Diskusi">
                                        Diskusi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="row row-cols-1 bg-blue px-5">
                    <div className="row my-3 py-3 bg-lblue border-25">
                        <div className="col-md-2">
                            <img src={user} alt="" className="w-75 py-3 mx-3" />
                        </div>
                        <div className="col-md-10">
                            <p className="fs-5 py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                vitae est eligendi dolore unde saepe magnam earum quos! Nam
                                suscipit ducimus expedita quod doloremque rem earum repellendus
                                fugit neque molestias. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta, adipisci temporibus placeat dolorum
                                rerum est ex atque quasi earum aspernatur, nesciunt repellat
                                beatae molestias inventore rem exercitationem assumenda nihil
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div className="row my-3 py-3 bg-lblue border-25">
                        <div className="col-md-2">
                            <img src={user} alt="" className="w-75 py-3 mx-3" />
                        </div>
                        <div className="col-md-10">
                            <p className="fs-5 py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                vitae est eligendi dolore unde saepe magnam earum quos! Nam
                                suscipit ducimus expedita quod doloremque rem earum repellendus
                                fugit neque molestias. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta, adipisci temporibus placeat dolorum
                                rerum est ex atque quasi earum aspernatur, nesciunt repellat
                                beatae molestias inventore rem exercitationem assumenda nihil
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div className="row my-3 py-3 bg-lblue border-25">
                        <div className="col-md-2">
                            <img src={user} alt="" className="w-75 py-3 mx-3" />
                        </div>
                        <div className="col-md-10">
                            <p className="fs-5 py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                vitae est eligendi dolore unde saepe magnam earum quos! Nam
                                suscipit ducimus expedita quod doloremque rem earum repellendus
                                fugit neque molestias. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta, adipisci temporibus placeat dolorum
                                rerum est ex atque quasi earum aspernatur, nesciunt repellat
                                beatae molestias inventore rem exercitationem assumenda nihil
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div className="row my-5 py-3 bg-lblue border-25">
                        <div className="col-md-11 justify-content-md-center">
                            <textarea className="w-100 px-3 rounded-pill" placeholder="Ketik Pesan">
                            </textarea>
                        </div>
                        <div className="col-md-1">
                            <button type="submit" className="btn btn-md w-100 m-1">
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
