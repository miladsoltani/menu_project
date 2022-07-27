import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/pic.jpg'
import styles from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={styles.Container}>
            <nav>
                <img src={pic} alt="amlak pic" />
                <h1>املاک هاشمی نسب</h1>
                <hr />
                <div>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star' id={styles.fill}></span>
                    <span className='fa fa-star' id={styles.fill}></span>
                    <span className='fa fa-star' id={styles.fill}></span>
                </div>
                <ul>
                    <li><Link to="/search" className='fa fa-search'> جستجو</Link></li>
                    <li><Link to="/my-adv" className='fa fa-file-text-o'> آگهی های من</Link></li>
                    <li><Link to="/agents" className='fa fa-users'> نماینده</Link></li>
                    <li><Link to="/profile" className='fa fa-user-o'> پروفایل</Link></li>
                    <li><Link to="/saved" className='fa fa-bookmark-o'> ملک های ذخیره شده</Link></li>
                    <li><Link to="/recent-search" className='fa fa-book'> جستجوهای اخیر</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;