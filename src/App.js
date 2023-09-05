import React, { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const numColors = 18;

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  const colorsItem = [];
  for (let i = 0; i < numColors; i++) {
    let color = '#';
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorsItem.push(color);
  }
  return colorsItem;
};

function App() {
  const [light, setLight] = useState(true);
  const [color, setColor] = useState([]);
  const [Refresh, setRefresh] = useState(true);

  const numbers = [
    11, 12, 24, 10, 14, 23, 24, 10, 14, 23,
    18, 16, 19, 20, 22, 25, 18, 21, 15, 13,
    26, 17, 11, 13, 28, 11, 12, 24, 10, 14, 23, 24, 10, 14, 23,
    18, 16, 19, 20,
  ];

  useEffect(() => {
    const colors = randomColor();
    setColor(colors);
  }, [Refresh]);
// style={{ backgroundColor: light ? '#e3f2fd' : '#000' }} =- app
  return (
    <div className="App" style={{ backgroundColor: light ? '#e3f2fd' : '#000' }}>
      <div className="container">
      <div className="bubbles">
          {numbers.map((number, index) => (
            <span
              key={index}
              style={{ '--i': number }}
              className={index % 2 === 0 ? 'even' : ''}
            ></span>
          ))}
        </div>
        <div className="data">
          {color.map((item, index) => (
            <div className="element" style={{ backgroundColor: light ? '#fff' : '#333333' }} key={index}>
              <div
                className="body-color"
                style={{ backgroundColor: item }}
                onClick={() => {
                  navigator.clipboard.writeText(item);
                  toast('🦄 Copied Successfully!', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                  });
                }}
              ></div>
              
              <span className="hex-value" style={{ color: light ? '#001' : '#fff' }} >
                {item}
              </span>
            </div>
          ))}
        </div>
        
      </div>
      <button className="btn" onClick={() => setRefresh(!Refresh)}>
        Refresh colors
      </button>
      <button
        className="toggle-btn"
        onClick={() => {
          setLight(!light);
        }}
      >
        {light ? 'Dark-' : 'Light-'}Mode
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
