import './App.css';
import { useState } from 'react';
var m = "";
var n="";
var sign ="";
function App() {
  const [num, setNum] = useState("")
  function add1 (){
    setNum(m= num+"1")
  }
  function add2 (){
    setNum(m= num+"2")
  }
  function add3 (){
    setNum(m= num+"3")
  }
  function add4 (){
    setNum(m= num+"4")
  }
  function add5 (){
    setNum(m= num+"5")
  }
  function add6 (){
    setNum(m= num+"6")
  }
  function add7 (){
    setNum(m= num+"7")
  }
  function add8 (){
    setNum(m= num+"8")
  }
  function add9 (){
    setNum(m= num+"9")
  }
  function add0 (){
    setNum(m = num+"0")
  }
  function sum()
  {
    n=m;
    sign = "+"
    setNum(m="")
  }
  function subt ()
  {
    n=m;
    sign = "-"
    setNum(m="")
  }
  function mult ()
  {
    n=m;
    sign = "*"
    setNum(m="")
  }
  function devid ()
  {
    n=m;
    sign = "/"
    setNum(m="")
  }
  function equal()
  {
    if(sign==="+")
    {
    m=parseInt(m)+parseInt(n);
    }
    if(sign==="-")
    {
    m=parseInt(n)-parseInt(m);
    }
    if(sign==="*")
    {
    m=parseInt(n)*parseInt(m);
    }
    if(sign==="/")
    {
    m=parseInt(n)/parseInt(m);
    }
    setNum(m)
  }
  function erase()
  {
    m="";
    setNum(m);
  }
  return (
    <div className="App">
      <div className='hed'>
        <h1>Calculator app</h1>
      </div>
      <header className="App-header">
        <div className='calcWrap'>
        <div className="Calc">
          <input type = "text" value={m}/>
          <div className='row'>
        <button className ="button1" onClick={add1}>1</button>
        <button className ="button2" onClick={add2}>2</button>
        <button className ="button3" onClick={add3}>3</button>
        <button className ="buttonC" onClick={erase}>C</button>
        </div>
        <div className='row'>
        <button className ="button4" onClick={add4}>4</button>
        <button className ="button5" onClick={add5}>5</button>
        <button className ="button6" onClick={add6}>6</button>
        <button className ="buttonPlus" onClick={sum}>+</button>
        </div>
        <div className='row'>
        <button className ="button7" onClick={add7}>7</button>
        <button className ="button8" onClick={add8}>8</button>
        <button className ="button9" onClick={add9}>9</button>
        <button className ="buttonMin" onClick={subt}>-</button>
        </div>
        <div className='row'>
        <button className ="buttonMult" onClick={mult}>*</button>
        <button className ="button0" onClick={add0}>0</button>
        <button className ="buttonDevid" onClick={devid}>/</button>
        <button className ="buttonE" onClick={equal}>=</button>
        </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
