import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MobileBottomBar, MobileTopBar, SidebarLayout } from './components';
import { Home, LoginPage } from './pages';

const App = () => {
  return (
    <>
      <main className='app-container'>
        <BrowserRouter>
          <MobileTopBar />
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/friends' element={<div>friends</div>} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          <MobileBottomBar />
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
