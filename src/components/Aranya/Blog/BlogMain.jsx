import HeroSection from "./BlogHero";
import RecentPosts from "./BlogRecent";
import Sidebar from "./BlogSidebar";
import "./BlogSection.css";
import Header from "../HeaderSection/Header";
import Footer from "../FooterSection/Footer";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="blog-page mt-5">
        <HeroSection />

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <RecentPosts />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;
