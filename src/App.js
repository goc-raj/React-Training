import './App.css';

// import Practice from './practice/PracticeMain';
//import Prods from './product_task/Home';
import BoxCompo from './chakra-components/Box';
import FlecCompo from './chakra-components/Flex';

function App() {
  return (
      <div className='App'>
        {/* <Practice /> */}
        {/* <Prods /> */}
        <BoxCompo />
        <FlecCompo />
      </div>
  );
}

export default App;
