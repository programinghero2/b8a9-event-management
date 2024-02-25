import { useLoaderData } from "react-router-dom";
import Blog from "../../Components/blog/blog";

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className="my-10 w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {
                    blogs?.map(blogInfo => <Blog key={blogInfo.id} blogInfo={blogInfo}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;