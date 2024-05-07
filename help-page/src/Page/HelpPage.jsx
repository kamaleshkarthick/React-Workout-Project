import rec from'../assets/react.svg'
import "./HomePg.css"

const HelpPage = () => {
  return (
      <>
          <main className="">
              <nav className="nav">
                  <div className=" nav-item1">
                      <img className="" src={rec} />
                      <h3> React</h3>
                      <h3>|</h3>
                      <h3>Help Center</h3>
                  </div> 

                  <div className="nav-item2">
                      <button className='' type="button">Submit a request</button>
                      <button className='' type="button">sign in</button>
                  </div>

              </nav>
              <section>
                  
              </section>
          </main>
      </>
  )
}

export default HelpPage