import Header from './components/Header';
import { useState } from 'react';
import './App.css';
import Trendingsec from "./components/Trendingsec"
import News from './components/News';
import Cat from './components/Cat';
import Cot from './components/Cot';
import LoginModal from './components/LoginModal';



function App() {

  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState("");
  
  const openModal = () => {
    setShowModal(!showModal)
  }

  // const handleScroll = (event) => {
  //   if (user) {
  //     setBgColor("white");
  //   } else {
  //     if (event.currentTarget.scrollTop >= 600) {
  //       setBgColor("white");
  //     } else {
  //       setBgColor("#ffc017");
  //     }
  //   }
  // };

  const onLogin = (username, password) => {
    if (username == "moog" && password == "moog") {
      setShowModal(false);
      setUser(username);
    } else {
      alert("Your username or password is wrong. Please try again.");
    }
  };
  return (
    <section>
      <Header
      onLogin = {onLogin}
      user={user}
      setUser={setUser}
      showModal={showModal}
      openModal={openModal}
      
      />
      <Trendingsec />
      <div className=' container lol'>
        <News />
        <div className='pine'>
          <Cat />
          <Cot />
        </div>
      </div>
    </section>
  );
}

export default App;
