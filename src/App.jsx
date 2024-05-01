import { useState } from 'react'
import './App.css'
import Quotedb from "./db/quote.json"
import { getRandom } from './utils/random.js'

const bgDatab = ["fondo1","fondo2","fondo3","fondo4"]

function App() {

 
const [quote , setQuote] = useState(getRandom(Quotedb))
  // console.log(Quotedb);
  // console.log(quote);
  
const [bg, setBg] = useState(getRandom(bgDatab))

const hadleQuotes = () =>{
  setQuote(getRandom(Quotedb))
  setBg(getRandom(bgDatab))
}

  return (
    <>

    <main className={bg}>
      <div className="main">
      <h1>FORTUNE COOKIES</h1>
       <div className="button"><button onClick={hadleQuotes}>Try my luck</button></div>
      <div className="thoughtContent">
        <div className="quote_text">
          {quote.phrase}
        </div>
      </div>
      <footer><h3>Author: {quote.author}</h3></footer>
      </div>
    </main>
    </>
  )
}

export default App
