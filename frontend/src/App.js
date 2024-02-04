import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Layout } from "antd";
import open from "./data/navopen.png"
import close from "./data/navclosed.png"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Navbar, Sidebar } from "./components";
import { Assignments, BundlePackages, Calendar, CourseContent, CourseDetail, Dashboard, Library, MyCourses, PaymentConfirmation, ProfilePage, Quiz, Quizzes } from "./pages";
import "./App.css";
import PaymentCourse from "./pages/PaymentCourse";
const { Header } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex relative">
        <div className="fixed sidebar bg-white ">
          <Sidebar />
        </div>
        <div className="bg-white min-h-screen md:ml-[15rem] w-full  ">
          <div className="flex">
            <div className="bg-white">
              <Layout className="hover:cursor-pointer">
                <Header style={{ padding: 0, backgroundColor: 'white', paddingLeft: 36 , paddingTop: 6}}>
                  <Button
                    type="text"
                    className="bg-white"
                    onClick={() => setCollapsed(!collapsed)}
                    icon={
                      collapsed ? <img src={close} alt=""/> : <img src={open} alt="" className="mt-3" />
                    }
                  />
                </Header>
              </Layout>
            </div>
            <div className="fixed md:static bg-white navbar w-full ">
              <Navbar />
            </div>
          </div>
          <div className="bg-white">
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Dashboard />} />

              {/* pages  */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/mycourses" element={<MyCourses />} />
              <Route path="/course" element={<CourseContent />} />
              <Route path="/assignment" element={<Assignments />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/library" element={<Library />} />            
              <Route path="/coursedetail" element={<CourseDetail />} />         
              <Route path="/paymentcourse" element={<PaymentCourse />} />               
              <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />        
              <Route path="/calendar" element={<Calendar/>} />               
              <Route path="/bundlepackages" element={<BundlePackages />} />               
       
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
