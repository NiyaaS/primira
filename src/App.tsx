import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-customBeige">
        <div className="text-center text-customBrown">
          <h1 className="font-header text-6xl font-bold tracking-wide mb-4">PRIMIRA</h1>
          <h2 className="font-header text-5xl font-light mb-6">Launching soon!</h2>
          <p className="font-body text-lg mb-8">We are currently making some improvements to our website!</p>
          <button className="text-customBrown bg-gray-200 hover:bg-gray-300 font-body font-bold py-2 px-4 rounded-full mb-4">
            NOTIFY ME
          </button>
          <div className="flex justify-center">
            <a href="https://facebook.com/" className="mx-2 text-gray-800 hover:text-gray-600 text-customBrown text-3xl">
              <FontAwesomeIcon icon={faFacebookF} size="lg"/>
            </a>
            <a href="https://instagram.com/" className="mx-2 text-gray-800 hover:text-gray-600 text-customBrown text-3xl">
              <FontAwesomeIcon icon={faInstagram} size="lg"/>
            </a>
            <a href="https://twitter.com/" className="mx-2 text-gray-800 hover:text-gray-600 text-customBrown text-3xl">
              <FontAwesomeIcon icon={faTwitter} size="lg"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
