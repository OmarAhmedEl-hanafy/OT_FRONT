import HighLight from "../HighLight/HighLight";

import blogImg1 from "../../assets/images/blogs/blog-1.png";
import blogImg2 from "../../assets/images/blogs/blog-2.png";
import blogImg3 from "../../assets/images/blogs/blog-3.png";
import BlogBox from "./BlogBox";

function Blogs() {
  const blogs = [
    {
      img: blogImg1,
      date: "20 July, 2024",
      userName: "Admin",
      post: "Stop Ignoring these 7 inspiring . how to be .........",
      link:'/'
    },
    {
      img: blogImg2,
      date: "20 July, 2024",
      userName: "Admin",
      post: "To carry our put into performto Implement a plan",
      link:'/'
    },
    {
      img: blogImg3,
      date: "20 July, 2024",
      userName: "Admin",
      post: "It involves Handing over to customer passing",
      link:'/'
    },
  ];

  return (
    <section className="my-[50px]">
      <div className="container">
        <div className="max-w-max mx-auto">
          <HighLight text="Insight & Blogs" />
        </div>
        <h2 className="font-poppins font-bold text-2xl text-center">
          Our Latest Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 p-5">
          {blogs.map((blog, index) => (
            <div key={index} className="">
              <BlogBox blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;

