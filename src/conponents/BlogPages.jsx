import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorSelection from './CategorSelection';
import SideBar from './SideBar';

const BlogPages = () => {
    const [blogs, setBlogs ] = useState([]);
    const [ currentPage, setcurrentPage] = useState(1);
    const pageSize = 12 // blogs per pages
    const [selectedCategory, setselectedCategory] = useState(null);
    const [activeCategory,setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs()  {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            
            // filter by categroy
            if(selectedCategory){
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    // page changing
    const handlePageChange = (pageNumber) =>{
        setcurrentPage(pageNumber);
    }
     const handleCategoryChange = (category) =>{
        setselectedCategory(category);
        setcurrentPage(1);
        setActiveCategory(category);
     }
  return (
    <div>
     {/* category section */}
     <div>
        <CategorSelection onSelectCategory={handleCategoryChange}  selectedCategory = {selectedCategory}
        activeCategory = {activeCategory}/>
     </div>
     {/* blogCards  section */}
     <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCard blogs = {blogs} currentPage= {currentPage} selectedCategory= {selectedCategory} pageSize={pageSize} />
        {  /*siderBar component */  }
        <div>
            <SideBar/>
        </div>
     </div>
     {/* pagination section */}
     <div>
     <Pagination onPageChange= {handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
     </div>
    </div>
  )
}

export default BlogPages
