
import Navbar from "./Components/Navbar.jsx"
import Page from "./Components/Page.jsx"
import Page2 from "./Components/Page2.jsx"
import Page3 from "./Components/Page3.jsx"
import Lastpage from "./Components/Lastpage.jsx"

function App() {
  

  return (
    <body className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
     <Navbar/>
     <Page/>
     <Page2/>
     <Page3/>
     <Lastpage/>
    </body>
  )
}

export default App
