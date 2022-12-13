import Header from "./components/Header"
import Search from "./components/Search"
import Card from "./components/Card"
import './App.css';
import Germanya from "./assets/Images/german.png";
import Usa from "./assets/Images/usa.png";
import Brazil from "./assets/Images/brasil.png";
import Iceland from "./assets/Images/ice.png";
import Afghanistan from "./assets/Images/afg.png";
import Åland from "./assets/Images/alan.png";
import Albania from "./assets/Images/alban.png";
import Algeria from "./assets/Images/alger.png";

function App() {
  
  return (
    <div>
      <Header />
      <Search />
      <div className="container">
      <ul className="country__list">
       <Card img ={Germanya} name="Germany" popul={81770900} region="Europe" capital="Berlin" />
       <Card img ={Usa} name="United States of America" popul={323947000} region="Americas" capital="Washington, D.C." />
       <Card img ={Brazil} name="Brazil" popul={206135893} region="Americas" capital="Brasília" />
       <Card img ={Iceland} name="Iceland" popul={334300} region="Europe" capital="Reykjavík" />
       <Card img ={Afghanistan} name="Afghanistan" popul={27657145} region="Asia" capital="Kabul" />
       <Card img ={Åland} name="Åland Islands" popul={28875} region="Europe" capital="Mariehamn" />
       <Card img ={Albania} name="Albania" popul={2886026} region="Europe" capital="Tirana" />
       <Card img ={Algeria} name="Algeria" popul={40400000} region="Africa" capital="Algiers" />
      </ul>
      </div>
    </div>
  );
}

export default App;
