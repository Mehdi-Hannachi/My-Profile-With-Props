import "./App.css";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import FullName from "./components/FullName/FullName";
import Adress from "./components/Adress/Adress";
import User from "./user.png";
function App() {
  const adress = "Bizerte";
  const fullname = "Mehdi Hannachi";
  const city = "Zarzouna";

  return (
    <div className="App">
      {/* <ProfilePhoto /> */}

      <ProfilePhoto>
        <img src={User} alt="user" />
      </ProfilePhoto>

      <FullName fullname={fullname} />

      <Adress adress={adress} city={city} />
    </div>
  );
}

export default App;
