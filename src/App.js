import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity1 from "./pages/activity1";
import Layout from "./Layouts";
import Timer from "./pages/timer";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Activity1 />} />
          <Route path="timer" element={<Timer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
