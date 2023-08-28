import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const numColors = 18;


const randomColor = () => {
  const letters = '0123456789ABCDEF';
  const colorsItem = []
  for(let i = 0;i< numColors;i++)
  {
    let color = '#';
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorsItem.push(color);
  }
    return colorsItem;
};


function App() {
  // useEffect(() => {
  //   const preventContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener('contextmenu', preventContextMenu);

  //   return () => {
  //     document.removeEventListener('contextmenu', preventContextMenu);
  //   };
  // }, []);
  const [light, setLight] = useState(true)
  const [color, setColor] = useState([]);
  const [Refresh, setRefresh] = useState(true)
  useEffect(()=>{
    const colors = randomColor();
    setColor(colors)
  },[Refresh])
  // #A95BE4
  return (
    <div className="App" style={{backgroundColor: light?"#e3f2fd": "#000"}}>
      <div className='container'>
        {
          color.map((item,index)=>{
            return(
              <div className='element' style={{ backgroundColor: light ? '#fff' : '#333333' }}>
              <div className='body-color'  style={{backgroundColor : item}} onClick={()=>{
                navigator.clipboard.writeText(item)
                toast('🦄 Copied Successfully!', {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  });
              }}>
              </div>
              <span className='hex-value' style={{color: light?"#001" : "#fff"}}>{item}</span>
            </div>
            )
          })
        }
      </div>
      <button className='btn' onClick={()=>{
        setRefresh(!Refresh)
      }}>Refresh colors</button>
       <button className='toggle-btn'
        onClick={()=>{
        setLight(!light)
      }}
      >{light?"Dark-":"Light-"}Mode</button>
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
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
