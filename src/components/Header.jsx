import Typed from 'react-typed';
import myCV from '../fakecv.pdf'
const Header = _ => {
  return (
    
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web development and Website services</h1>
        <Typed
              className='typed-text'
                strings={[
                    'Microsoft Technology Associate',
                    'Microsoft Azure Fundamentals',
                    'Microsoft Azure Developing Solutions Associate']}
                    typeSpeed={90}
                    backSpeed={100}
                    loop >
                    
                </Typed>

                <a href={myCV} className='downloadcv' download>Download CV</a>
      </div>
    </div>



  )
}

export default Header