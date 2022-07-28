import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <li><NavLink 
                    style={({isActive})=>{
                        return {color:isActive ? 'black' : 'white' , backgroundColor:isActive ? 'white' : 'transparent' , borderRadius:isActive? '0px 50px 50px 0':''}
                    }} 
                    to="/search" className='fa fa-search'> جستجو</NavLink></li>
                    <li><NavLink 
                    style={({isActive})=>{
                        return {color:isActive ? 'black' : 'white' , backgroundColor:isActive ? 'white' : 'transparent' , borderRadius:isActive? '0px 50px 50px 0':''}
                    }} 
                    to="/my-adv" className='fa fa-file-text-o'> آگهی های من</NavLink></li>
                    <li><NavLink 
                    style={({isActive})=>{
                        return {color:isActive ? 'black' : 'white' , backgroundColor:isActive ? 'white' : 'transparent' , borderRadius:isActive? '0px 50px 50px 0':''}
                    }} 
                    to="/agents" className='fa fa-users'> نماینده</NavLink></li>
                    <li><NavLink 
                    style={({isActive})=>{
                        return {color:isActive ? 'black' : 'white' , backgroundColor:isActive ? 'white' : 'transparent' , borderRadius:isActive? '0px 50px 50px 0':''}
                    }} 
                    to="/profile" className='fa fa-user-o'> پروفایل</NavLink></li>
                    <li><NavLink 
                    style={({isActive})=>{
                        return {color:isActive ? 'black' : 'white' , backgroundColor:isActive ? 'white' : 'transparent' , borderRadius:isActive? '0px 50px 50px 0':''}
                    }} 
                    to="/saved" className='fa fa-bookmark-o'> ملک های ذخیره شده</NavLink></li>
                    <li><NavLink 
                    style={({isActive})=>{
                        return {color:isActive ? 'black' : 'white' , backgroundColor:isActive ? 'white' : 'transparent' , borderRadius:isActive? '0px 50px 50px 0':''}
                    }} 
                    to="/recent-search" className='fa fa-book'> جستجوهای اخیر</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;



// padding: 1rem 0.5rem 1rem 7.5rem;
    // margin: 0rem 2.5rem 0rem 0.5rem;
    // border-radius: 0px 50px 50px 0;