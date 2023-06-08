import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />} {/* conditional output -> if right works then only left will work*/}
    </div>
  );
}
 
export default Home;