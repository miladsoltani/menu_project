import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../images/pic.jpg'
const Sidebar = () => {
    return (
        <div>
            <nav>
                <img src={pic} alt="amlak pic" />
                <h1>املاک هاشمی نسب</h1>
                <div>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                </div>
                <ul>
                    <li><Link to="/search">جستجو<span className='fa fa-search'></span></Link></li>
                    <li><Link to="/my-adv">آگهی های من<span className='fa fa-file-text-o'></span></Link></li>
                    <li><Link to="/agents">نماینده</Link></li>
                    <li><Link to="/profile">پروفایل</Link></li>
                    <li><Link to="/saved">ملک های ذخیره شده</Link></li>
                    <li><Link to="/recent-search">جستجوهای اخیر</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;