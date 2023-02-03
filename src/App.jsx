import React from 'react';
import { Routes, Route} from "react-router-dom"
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/BlogDetails';
import ComposeBlog from './Pages/Blog/ComposeBlog';
import EditBlog from './Pages/Blog/EditBlog';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes> 
          <Route>
            <Route path="/" element={<Home />} />
						<Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="addblog" element={<ComposeBlog />} />
            <Route path="editblog/:id" element={<EditBlog />} />
            {/* <Route path="about" element={<AboutUs />} /> 
            <Route path="contact" element={<ContactUs />} /> */}
          </Route>

        </Routes>
      <Footer />
    </div>
  );
}

export default App;
