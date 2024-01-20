import BlogCard from '@/Components/BlogCard/BlogCard';
import BlogPost from '@/Components/BlogPost/BlogPost';
import React from 'react';

const blogs = async () => {
    const res = await fetch('https://property-hunter-server.vercel.app/api/v1/blogs');
    const blogsData = await res.json()
    const blogs = blogsData.data.blogs
    // console.log(blogs)
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-36">
                {/* <BlogPost/> */}
                <div className="col-span-2">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                        {
                            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
                        }
                    </div>
                </div>
                <div className="">
                    Featured Blogs
                </div>
            </div>
        </div>
    );
};

export default blogs;
