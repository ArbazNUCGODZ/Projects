
import './App.css';
// import Ex1 from './hooks/Ex1';
// import Ex2 from './hooks/Ex2';
// import Ex3 from './hooks/Ex3';
// import Prop from './hooks/Prop';
// import Childprop from './hooks/Childprop';
// import Counter from './hooks/Counter';
// import Usecallback from './hooks/Usecallback';
// import Usememo from './hooks/Usememo';
import UseFetch from './hooks/UseFetch';
import ThemeContext from './hooks/ThemeContext';
import Themetoggle from './hooks/Themetoggle';


function App() {
  return (

    <>
   <ThemeContext>
    <Themetoggle/>

   </ThemeContext>

    {/* <Counter/> */}
    {/* <Usecallback/> */}
    {/* <Usememo/> */}
    {/* <UseFetch/> */}
    </>
  );
}

export default App;


  {/* {/* <Prop>
      <Childprop/>
      </Prop>    </> */}
    // <><Ex1/>
    
    // <Ex2/>
    // <Ex3/></> */}