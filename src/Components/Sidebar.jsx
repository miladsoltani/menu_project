import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <nav>
                <img src="" alt="" />
                <h1>املاک هاشمی نسب</h1>
                <div>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                </div>
                <ul>
                    <li><Link to="/search">جستجو</Link></li>
                    <li><Link to="/my-adv">آگهی های من</Link></li>
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