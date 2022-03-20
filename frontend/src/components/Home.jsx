import React from 'react'
import Books from './Books'
import Sidebar from './Sidebar'
import '../styles/Home.css'
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {


    const [booksState, setBooksState] = useState();
    const [categoriesState, setCategoriesState] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:9000/", {
            })
            const data = await response.json();
            setBooksState(data)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const bookCategory = booksState?.map((book) => {
                return book.category;
            })
            setCategoriesState([...new Set(bookCategory)])
        })()
    }, [booksState])

    return (
        <div className='home'>
            {/* {console.log('in return', categoriesState)} */}
            <Sidebar categories={categoriesState} />
            <Books books={booksState} />
        </div>
    )
}

export default Home