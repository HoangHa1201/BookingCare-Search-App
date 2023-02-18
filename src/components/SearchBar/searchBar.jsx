import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import styles from "./searchBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const URL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = process.env.REACT_APP_API_KEY;
const CSE_KEY = process.env.REACT_APP_CSE_KEY;

const SearchBar = () => {
    // Trạng thái search mặc định
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const [scrollPosition, setScrollPosition] = useState(0);
    const elementRef = useRef(null);

    // Xử lý trạng thái search
    const handleSearch = async () => {
        if (!query) {
            alert('Mày không nhập từ khóa à ?');
            return;
        }
        try {
            const requests = [];

            for (let i = 1; i <= 2; i++) {
                requests.push(
                    axios.get(URL, {
                        params: {
                            key: API_KEY,
                            cx: CSE_KEY,
                            q: query,
                            num: 10,
                            start: (i - 1) * 10 + 1,
                        },
                    })
                );
            }

            const responses = await Promise.all(requests);
            const results = responses.flatMap((response) => response.data.items);
            setResults(results);
        } catch (error) {
            console.error(error);
        }
    };

    // Xử lý trạng thái input
    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        setResults([]);
    };

    // 
    useEffect(() => {
        const handleScroll = async () => {
            const element = elementRef.current;
            if (element) {
                const scrollHeight = element.scrollHeight - element.clientHeight;
                const currentPosition = element.scrollTop;
                if (currentPosition === scrollHeight) {
                    try {
                        const start = results.length/10 + 1;
                        const response = await axios.get(URL, {
                            params: {
                                key: API_KEY,
                                cx: CSE_KEY,
                                q: query,
                                num: 10,
                                start,
                            },
                        });
                        // console.log(start);
                        const newResults = response.data.items;
                        setResults([...results, ...newResults]);
                    } catch (error) {
                        console.log(error);
                    }
                }
                setScrollPosition(currentPosition);
            }
        };

        const element = elementRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, [scrollPosition]);

    return (
        <div className={`${cx("Search__Bar")} ${"row"}`}>
            <div className={`${cx("Search__Bar--Box")} ${"col l-12 m-12 c-12"}`}>
                <div className={`${cx("Search__Bar--Box-Input")} ${"row"}`}>
                    <input type="text" onChange={handleChange} placeholder="Tìm kiếm với từ khóa" />
                    <button onClick={handleSearch}>
                        <i className="fa-brands fa-searchengin" ></i>
                    </button>
                </div>
                <div className={`${cx("Search__Bar--Box-Output")} ${"row"}`} >
                    <div className="col l-8 m-10 c-12 l-o-2 m-o-1">
                        <div className={`${cx("Search__Bar--Box-Output_Detail")} ${"row"}`} ref={elementRef}>
                            <ul>
                                {results.map((result, index) => (
                                    result === undefined
                                        ? <div key={index} className={`${cx("Search__Bar--Box-Output_False")} ${"col l-12 m-12 c-12"}`}>Không có kết quả</div>
                                        : <div key={index} className={`${cx("Search__Bar--Box-Output_True")} ${" col l-12 m-12 c-12"}`} >
                                            <li className='row' key={result.cacheId}>
                                                <a className='col l-3 m-3 c-3' href={result.link}>{result.title}</a>
                                                <img className='col l-3 m-3 c-3' src={
                                                    result.pagemap !== undefined ? (
                                                        result.pagemap.cse_image !== undefined ? (
                                                            result.pagemap.cse_image[0] !== undefined ? (
                                                                result.pagemap.cse_image[0].src !== undefined ? (
                                                                    result.pagemap.cse_image[0].src.startsWith("http") ? (
                                                                        result.pagemap.cse_image[0].src
                                                                    ) : ""
                                                                ) : ""
                                                            ) : ""
                                                        ) : ""
                                                    ) : ''
                                                } alt="Chưa có hình ảnh" />
                                                <p className='col l-4 m-4 c-4'>{
                                                    result.pagemap !== undefined ? (
                                                        result.pagemap.metatags !== undefined ? (
                                                            result.pagemap.metatags[0] !== undefined ? (
                                                                result.pagemap.metatags[0]["og:description"] !== undefined ? (
                                                                    result.pagemap.metatags[0]["og:description"]
                                                                ) : ""
                                                            )
                                                                : ""
                                                        )
                                                            : ""
                                                    ) : ""
                                                }</p>
                                            </li>
                                        </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
