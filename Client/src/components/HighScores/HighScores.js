import React, {useState} from "react";
import API from "../../utils/API.js";

// class Scores extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
    
//   }
//     getScores(){
//         API.getHighScores().then((res) => {
//             this.setState({data: res.data[0]})
//         })
//     }
  

//   render() {
//       this.getScores();
//     return (
//       <>
//        test
//      {this.data.fullName}: {this.data.score}
       
//       </>
//     );
//   }
// }

const Scores = () => {
  const [data, setData] = useState([]);

  API.getHighScores().then((res) => {
    console.log(res.data[0])
    setData(res.data[0]);
  })

  return (
    <>
    {data.fullName}: {data.score}
    </>
  );
}

export default Scores;