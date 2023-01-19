import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MobileBottomBar, MobileTopBar, SidebarLayout } from './components';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <BrowserRouter>
          <MobileTopBar />
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/friends' element={<div>friends</div>} />
            </Route>
          </Routes>
          <MobileBottomBar />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
