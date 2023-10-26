import './Home.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const url = "https://dummyjson.com/products?limit=10";
    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        return await axios.get(url).then((res) => setData(res.data.products));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <>
            <table className="prodcts">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td><button class="actionButtons"><i class="material-icons">update</i></button></td>
                                <td><button class="actionButtons"><i class="material-icons actionButtons">delete</i></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div class="pagination-container">
                <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
                    &lt;
                </button>
                <div id="pageNumbers">
                    <button className='pagination-number'>1</button>
                </div>
                <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page">
                    &gt;
                </button>
            </div>
        </>
    );
}
