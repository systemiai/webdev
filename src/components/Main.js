import About from '../components/About';

import Contact from '../components/Contact';
import Services from './Services';
import Program from './Program';
import Careers from '../components/Careers';


function Main({clickState}) {
  console.log("Current click state:"+clickState);
  return (
    <>
      <main className="mainBody">
        {clickState === 'Home' &&
          <About />
        }
        {clickState === 'Services' &&
          <Services />
        }
        {clickState === 'Program' &&
          <Program />
        }
        {clickState === 'Careers' &&
          <Careers />
        }
        
        <Contact />
        
      </main>
    </>
  );
}
export default Main;
