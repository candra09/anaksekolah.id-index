import React from 'react';
import '../../styles/Register.css';
import Icon from '../../assets/img/register.png';

export default function Register() {
    return (
        <div className="jumbotron bg-blue">
            <div className="container d-flex">
                <div className="col-6">
                    <h3 className='display-4 pt-5 pb-3 text-white'>Daftar Akun</h3>
                    <form action="" className='form'>
                        <input className='row' type="text" name="nama" id="" placeholder=' Nama Lengkap ' />
                        <input className='row' type="email" name="email" id="" placeholder=' Email ' />
                        <input className='row' type="text" name="telp" id="" placeholder=' Nomor Telepon ' />
                        <input className='row' type="password" name="nama" id="" placeholder=' Password ' />
                        <input className='row' type="password" name="nama" id="" placeholder=' Confirm Password ' />
                        <div className="row px-2 reg">
                            <select class="form-control form-control-mg" name="Status" style={{height: 35}}>
                                <option>Status</option>
                                <option>Guru</option>
                                <option>Murid</option>
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
