import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from './components/pages/home';
import { CoursePage } from './components/pages/coursePage';
import { CourseDetail } from './components/pages/courseDetail';
import { TeacherDetail } from './components/pages/teacher';
import { TestSeriesPage } from './components/pages/TestSeries/testSeriesPage';
import { Freebeis } from './components/pages/Freebies/freebeis';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/course' element={<CoursePage />} />
          <Route path='/teachers/:id' element={<TeacherDetail />} />
          <Route path='/course/course-detail/:id' element={<CourseDetail />} />
          <Route path='/testseries' element={<TestSeriesPage />} />
          <Route path='/freebeis' element={<Freebeis />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
