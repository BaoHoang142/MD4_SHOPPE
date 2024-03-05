import React from 'react'
import './Header.css'
type Props = {}

const Header:React.FC<Props> = (props: Props) => {
  return (
    <>
       <div className='header'>
        <div className='header__navbar'>
          <div className='header__navbar--left'>
              <div className='nav__left textNav textNavShop'>
                <p>Kênh Người Bán</p>
              </div>
              <div className='nav__left textNav textNavBecameShop'>
                <p>Trở thành Người bán Shoppe</p>
              </div>
              <div className='nav__left textNav textNavDown'>
                <p>Tải ứng dụng</p>
              </div>
              <div className='nav__left textNav textNavConnect'>
                <p>Kết nối</p>
              </div>
          </div>
          <div className='header__navbar--right'>
              <div className='nav__right textNav textNavNoti'>
                <p>Thông báo</p>
              </div>
              <div className='nav__right textNav textNavSupport'>
                <p>Hỗ trợ</p>
              </div>
              <div className='nav__right textNav textNavLanguage'>
                <p>Tiếng việt</p>
              </div>
              <div className='nav__right textNav textNavRegister'>
                <p>Đăng ký </p>
              </div>
              <div className='nav__right textNav textNavLogin'>
                <p>Đăng nhập </p>
              </div>
          </div>
            
          </div>
       </div>

    </>
  )
}

export default Header