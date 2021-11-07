import { useState } from 'react';
import sideHustle from './img/sideLogo.png';
import './App.css';

function App() {
  const [textLogo, setText] =  useState({value: ''});

  const handleChange = (e) => setText({value: e.target.value})
  function changeText() {
    return textLogo.value === '' ? {__html:  `<img id = 'logo_image' src = ${sideHustle} alt='logo here'/>`} :  {__html: textLogo.value}
  }
  return (
    <div class = 'container'>
      <div 
          dangerouslySetInnerHTML={changeText()}
        />
      <form name="google" action="#" method="POST"><br/>
				<input onChange = {handleChange} type="search" class="search"/><br/>
				<input type="submit" class="button" name="submit" value="Google Search" disabled />
				<input type="submit" class="button" name="lucky" value="I'm Feeling Lucky" disabled/>
			</form>
    </div>  
  );
}

export default App;