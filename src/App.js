import './App.css';
import Profile from './profil/Profile';
import img_Video from './profil/img_Video/2.jpg'

function App() {
    const fullname="Urbain Diagne"
    const bio="Je suis un passionné des nouvelles technologie et j'aime les challenges"
    const profession="Full-Stack JavaScript Developer"

    const handleName = () => {
          alert (fullname)
  }

  return (
    <div>
      <Profile fullname={fullname} bio={bio} profession={profession} handleName={handleName}>
        <img style={{width:200,height:200,position:'absolute', top:22, left:20}} src={img_Video} alt='Mypic'/>
        </Profile>
    </div>
  );
}

export default App;