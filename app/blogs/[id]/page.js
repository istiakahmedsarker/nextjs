import BlogDetails from '@/Components/BlogDetails/page';
import React from 'react';

const BlogsDetailsPage = async({ params }) => {
    const res = await fetch(`https://property-hunter-server.vercel.app/api/v1/blogs
    /${params.id}`)
    const blogs = await res.json()
    return (
        <div>
            <BlogDetails blogs = {blogs} />
        </div>
    );
};

export default BlogsDetailsPage;