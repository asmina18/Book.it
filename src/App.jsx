import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage";
import { BookingPage } from "./Pages/BookingPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
// import { UserContextProvider } from "./context/UserContext";
// import { UserPostsPage } from "./Pages/UserPostsPage";
import { OpretNyPage } from "./Pages/OpretNyPage";
import { LoadingPage } from "./Pages/LoadingPage";
import { LoginPage } from "./Pages/LoginPage";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage t />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/opretny" element={<OpretNyPage />} />
            {/* <Route path="/userposts" element={<UserPostsPage title="POSTS"/>}/> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}
export default App;
