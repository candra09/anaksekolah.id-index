import Navbar from "../Navbar";
import React, { Component } from 'react';

function index() {
    return (
      <div className="jumbotron bg-blue">
      <div className="container d-flex pb-5">
          <div className="col-6">
              <h3 className='display-4 pt-5 pb-3 text-white'>Daftar Akun</h3>
              <form action="" className='form'>
                  <input className='row' type="text" name="nama" id="" placeholder=' Nama Lengkap ' />
                  <input className='row' type="email" name="email" id="" placeholder=' Email ' />
                  <input className='row' type="text" name="telp" id="" placeholder=' Nomor Telepon ' />
                  <input className='row' type="password" name="nama" id="" placeholder=' Password ' />
                  <input className='row' type="password" name="nama" id="" placeholder=' Confirm Password ' />
                  <input className='row' type="text" name="nama" id="" placeholder=' Status' />
                  <div className="row px-2 reg">
                      <select class="form-control form-control-mg" name="Status" style={{height: 35}}>
                          <option>Status</option>
                          <option>Guru</option>
                          <option>Murid</option>
                      </select>
                  </div>
                  <div className="row px-2 reg">
                      <select class="form-control form-control-mg" name="Guru" style={{height: 35}}>
                          <option>Tingkat Pendidikan</option>
                          <option>SD</option>
                          <option>SMP</option>
                          <option>SMA</option>
                      </select>
                  </div>
                  <div className="row px-2 reg">
                      <select class="form-control form-control-mg" name="Guru" style={{height: 35}}>
                          <option>Mengajar Kelas</option>
                          <option>Kelas 1</option>
                          <option>Kelas 2</option>
                          <option>Kelas 3</option>
                          <option>Kelas 4</option>
                          <option>Kelas 5</option>
                          <option>Kelas 6</option>
                      </select>
                  </div>                    </form>
              <button className='btn btn-md bg-primary w-25 p-2'>Daftar</button>
          </div>
          <div className="col-6">
              <img src={Icon} alt="" id='icon' />
          </div>
      </div>
  </div>
    )
}

export default Register;
