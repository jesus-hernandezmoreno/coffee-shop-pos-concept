import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* Layout */
import Main from './Layout/Main';
/* Component */
import POS from './Views/POS';

const App = () => {
  return (
    <div>
      <Main>
        <POS />
      </Main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        transition={Zoom}
      />
    </div>
  );
};

export default App;
