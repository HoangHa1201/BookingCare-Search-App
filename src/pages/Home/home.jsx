import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/FontAwesome-6.2-PRO/css/all.css";

import SearchBar from "../../components/SearchBar/searchBar";
import styles from "./home.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function home() {
    return (
        <div className={`${cx("Home")} ${"grid"}`}>
            <div className={`${cx("Home__Header")} ${"row"}`}>
                <div className={`${cx("Home__Header--Icon")} ${"col l-3 m-3 c-3"}`}>
                    <a href="https://bookingcare.vn/" className="row">
                        <img src="https://bookingcare.vn/assets/icon/bookingcare-2020.svg" alt="" className="col l-10 m-10 c-10" />
                        <h4>Search App</h4>
                    </a>
                </div>
                <div className={`${cx("Home__Header--Title")} ${"col l-5 m-5 c-5"}`}>
                    <h1>Nền Tảng Y tế chăm sóc sức khỏe toàn diện</h1>
                </div>
                <div className={`${cx("Home__Header--Help")} ${"col l-2 m-2 c-2"}`}>
                    <a href="https://bookingcare.vn/hotro" className="row">
                        <i className="fa-solid fa-question"></i>
                        <p>Hỗ Trợ</p>
                    </a>
                </div>
            </div>
            <div className={`${cx("Home__Body")} ${"row"}`}>
                <div className={`${cx("Home__Body--Box")} ${"col l-12 m-12 c-12"}`}>
                    <SearchBar />
                </div>
            </div>
            <div className={`${cx("Home__Footer")} ${"row"}`}>
                <div className={`${cx("Footer__Content")} ${"col l-12 m-12 c-12"}`}>
                    Copyright &copy; 2023 - Created by <a href='https://hoangha-mycv.vercel.app/' target="_blank" rel="noreferrer">Nguyen Hoang Ha</a> Powered by <a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJS</a>
                </div>
            </div>
        </div>
    )
}

export default home