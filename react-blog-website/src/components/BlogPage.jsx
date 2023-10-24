import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1)
    const pageSize = 12
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

            // FILTER BY CATEGORY
            if(selectedCategory) {
                url += `&category=${selectedCategory}`
            }
            const res = await fetch(url);
            const data = await res.json();

            setBlogs(data)
        }

        fetchBlogs();
    }, [currentPage,selectedCategory,pageSize])

    // PAGE CHANGING BTN
    const handlePageChange = (pageNumber) => {
        SetCurrentPage(pageNumber)
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        SetCurrentPage(1)
        setActiveCategory(category)
    }

  return (
    <div> 
        {/* CATEGORY SECTION */}
        <div>
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>

        {/* BLOG CARD SECTION */}
        <div className='flex flex-col lg:flex-row gap-12'>
            {/* BLOG CARDS COMPONENT */}
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

            {/* SIDEBAR COMPONENT */}
            <div>
                <SideBar/>
            </div>
        </div>

        {/* PAGINATION SECTION */}
        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
        </div>
    </div>
  )
}

export default BlogPage