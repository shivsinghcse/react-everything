import Card from "./components/card";
import 'remixicon/fonts/remixicon.css'
import {data} from "./utils/data";
const App = () => {
  // console.log(data);
  return (
    <>
      <div className="parent">
        <h1>Current Job Openings</h1>
        <div className="container">
          {
            data.map((company, index) => {
              return (
                  <Card key={index} data={company}/>
              )
            })
          }
          
        </div>
      </div>
    </>
  )
}

export default App;