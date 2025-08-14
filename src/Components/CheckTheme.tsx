import  { useEffect, useState } from 'react';  
import './App.css';

function CheckTheme() {  
  const [theme, setTheme] = useState('light');  

  useEffect(() => {   
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  

     
    if (prefersDark) {  
      setTheme('dark');  
    } else {  
      setTheme('light');  
    }  
  
    const handleChange = (e : any) => {  
      setTheme(e.matches ? 'dark' : 'light');  
    };  

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');  
    mediaQuery.addEventListener('change', handleChange);  
 
    return () => {  
      mediaQuery.removeEventListener('change', handleChange);  
    };  
  }, []);  

  return (  
    <div className={theme}>  
      <h1>Hello, this is {theme} mode!</h1>  
    </div>  
  );  
};  

export default CheckTheme;  