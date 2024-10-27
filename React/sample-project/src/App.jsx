import Navbar from "./components/Navbar"

const App = () => {
    const data={
        appname:"MyApp"
    }
    const logodata="mylogo"
    const test="HelloWorld\t"
    const Myname="shailu\n\n\n"

  return (
    
    <>  

        {Myname}
        <p className="text-red-700">{test}</p>
        <Navbar appdata={data} logo={logodata} />
    </>
  )

}
export default App