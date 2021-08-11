import './App.css';
import {fiveStars} from './Characters.js'
import{useState} from 'react'
import dilucImg from './images/fiveStars/diluc.jpg';
import keqingImg from './images/fiveStars/keqing.jpg';
import jeanImg from './images/fiveStars/jean.jpg';
import monaImg from './images/fiveStars/mona.jpg';
import qiqiImg from './images/fiveStars/qiqi.jpg';
import debateClubImg from './images/threeStars/debateClub.png';

function App() {
  const [counter, setCounter] = useState(0);
  const [listValues, setListValues] = useState([fiveStars.diluc, fiveStars.keqing, fiveStars.jean, fiveStars.mona, fiveStars.qiqi]);
  const [characterNames, setCharacterNames] = useState([]);
  const [imgPool, setImgPool] = useState([]);

  function getRandom(max){
    return(
      Math.floor(Math.random() * max)
    )
  }

  function getSummon(props){
  setCounter(counter + props);
  setCharacterNames([]);
  setImgPool([]);
  for(var x = 0; x < props; x++){
    var result = getRandom(100);
    if(result < 80){
      getThreeStar();
    }
    else if (result > 79 && result < 95){
      getFourStar();
    }
    else if (result > 94){
      getFiveStar();
    }
    console.log(result);
    setListValues([fiveStars.diluc, fiveStars.keqing, fiveStars.jean, fiveStars.mona, fiveStars.qiqi]);
    }

  }

  function getThreeStar(){
    
  }
  function getFourStar(){

  }
  function getFiveStar(){
    var num = Object.keys(fiveStars)[getRandom(5)];
    if(num === 'diluc'){
      fiveStars.diluc+=1;
      setCharacterNames(characterNames => [...characterNames, 'Diluc '])
      setImgPool(imgPool => [...imgPool, {src: dilucImg}])
    }
    else if(num === 'keqing'){
      fiveStars.keqing+=1;
      setCharacterNames(characterNames => [...characterNames, 'Keqing '])
      setImgPool(imgPool => [...imgPool, {src: keqingImg}])
    }
    else if(num === 'jean'){
      fiveStars.jean+=1;
      setCharacterNames(characterNames => [...characterNames, 'Jean '])
      setImgPool(imgPool => [...imgPool, {src: jeanImg}])
    }
    else if(num === 'mona'){
      fiveStars.mona+=1;
      setCharacterNames(characterNames => [...characterNames, 'Mona '])
      setImgPool(imgPool => [...imgPool, {src: monaImg}])
    }
    else{
      fiveStars.qiqi+=1;
      setCharacterNames(characterNames => [...characterNames, 'Qiqi '])
      setImgPool(imgPool => [...imgPool, {src: qiqiImg}])
    }
  }

  return(
    <div>
      <h1> Genshin Wish Simulator </h1>
      <div className='container'>
        <img className='size' src={debateClubImg} alt=''/>
        {/* how do i apply a class/id to a map function VVV */}
        {imgPool.map((imgSrc, index) => (<img src={imgSrc.src} key={index} alt=''/>))}
      </div>
      <div className='buttons'>
        <button onClick={() => getSummon(1)}> Single Summon </button>
        <button onClick={() => getSummon(10)}> Ten Summon </button>
      </div>
      <h2> {'Five Stars:'} {characterNames} </h2>
      <h2> Diluc: {listValues[0]} Keqing: {listValues[1]} Jean:{listValues[2]} Mona:{listValues[3]} Qiqi:{listValues[4]} </h2>
      <h2> Total Summons: {counter} </h2>
    </div>
  )
}
export default App;
