import React from 'react'
import SidebarOption from "./SidebarOption";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import booksContext from './context';
import { useContext } from 'react';

const Sidebar = () => {


    const allBooks = useContext(booksContext);
    const [categoriesState, setCategoriesState] = useState();


    useEffect(() => {
        (async () => {
            const bookCategory = allBooks?.map((book) => {
                return book.category;
            })
            setCategoriesState([...new Set(bookCategory)])
        })()
    }, [allBooks])

    return (
        <div className={'sidebar'}>
            <Link to='/'>
                <SidebarOption text="All Books" Icon={MenuBookIcon} active />
            </Link>
            {
                categoriesState?.map((category) => {
                    return (

                        <Link to={`/${category}`} key={category} >
                            <SidebarOption text={category} Icon={MenuBookIcon} />
                        </Link>


                    )
                })
            }
        </div>
    )
}

export default Sidebar
