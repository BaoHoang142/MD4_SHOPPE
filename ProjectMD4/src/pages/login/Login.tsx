import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <>
      <div id="container">
        <div className="header">
            <div className="header__logo">
                <div className="header__logo--img">
                    <img src="https://logospng.org/download/shopee/logo-shopee-icon-1024.png" alt="" />
                </div>
                <div className="header__logo--text">
                    <p>Shoppe</p>
                </div>
                <div className='header__logo--loginText'>
                    <p>Đăng nhập</p>

                </div>
            </div>
            <div className="header__help">
                <a href="">Bạn cần giúp đỡ?</a>
            </div>
        </div>
        <div className="main">
            <div className='background__image'>
                <div className='form__login'>
                    <div className='form__login--text'>
                        <p>Đăng nhập</p>
                    </div>
                    <div className='form__login--input'>
                        <div className='form__login--input--email input' >
                            <input type="text" placeholder='Email/Số điện thoại/Tên đăng nhập' className='input__Email'/>
                        </div>
                        <div className='form__login--input--password input'>
                            <input type="text" placeholder='Mật khẩu' className='input__Password' />
                        </div>
                        <div className='form__login--input--button'>
                            <button className='btn'>Đăng nhập</button>
                        </div>

                    </div>
                    <div className='form__login--register'>
                        <a href="">Quên mật khẩu</a>
                        <a href="">Đăng nhập với sms</a>
                    </div>
                    <div className='form__login--Or'>
                        <div className='line'></div>
                        <span className='OrMid'>Hoặc</span>
                        <div className='line'></div>
                    </div>
                    <div className='form__login--social'>
                        <div className='form__login--social--facebook'>
                            <div className='logo__facebook'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt="" />
                            </div>
                            <div className='fabebook__text'>
                                <p>Facebook</p>
                            </div>

                        </div>
                        <div className='form__login--social--gmail'>
                            <div className='logo__google'>
                                <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" />
                            </div>
                            <div className='google__text'>
                                <p>Google</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='form__login--linkRegister'>
                        <p className='form__login--register__text'>Bạn mới biết đến Shoppe?</p>
                        <a href="" className='form__login--register__link'>Đăng ký</a>

                    </div>

                </div>

            </div>

        </div>

      </div>

    </>
  )
}

export default Login