import pic from './home.svg';
import './App.css';
import Post from './layout/Post';
import 'bootstrap/dist/css/bootstrap.css';
import p1 from './crop.png';
import p2 from './download.png';
import p3 from './filter.png';
import p4 from'./resize.png';
import p5 from './rotate.png';
import p6 from './add-text.png';


function App() {
  return (
    <div >
      <div className="home_container" >
        <div className="heading">
          <p className="title">Picture Core</p>
          <p className="subtitle">Best place to edit your images</p>
          <div className="btnn" >Go to Editor</div>
        </div> 
        <div>
          <img className="home_img" src={pic} alt="Home" height="475" width="500" />
        </div>
      </div>

      <div className="card_container" >
        <Post image={p1}/>
        <Post image={p2}/>
        <Post image={p3}/>
        <Post image={p4}/>
        <Post image={p5}/>
        <Post image={p6}/>
        
      </div>

    </div>
  );
}

// starting frontend

export default App;
