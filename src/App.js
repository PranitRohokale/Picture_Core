import pic from "./images/home.svg";
import "./App.css";
import Post from "./layout/Post";
import "bootstrap/dist/css/bootstrap.css";
import p1 from "./images/crop.png";
import p2 from "./images/download.png";
import p3 from "./images/filter.png";
import p4 from "./images/resize.png";
import p5 from "./images/rotate.png";
import p6 from "./images/add-text.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="home_container">
        <div className="heading">
          <p className="title">Picture Core</p>
          <p className="subtitle">Best place to edit your images</p>
          <Link to="/editor">
            <div className="btnn">Go to Editor</div>
          </Link>
        </div>
        <div className="hello">
          <img
            className="home_img"
            src={pic}
            alt="Home"
            height="475"
            width="500"
          />
        </div>
      </div>

      <div className="card_container">
        <Post
          image={p1}
          desc="Crop"
          desc_text="Crop unwanted outer areas from a image. crop will  remove or adjust the outside edges of an image."
        />
        <Post
          image={p4}
          desc="Resize"
          desc_text="Resize images by defining new height and width pixels.Change image dimensions to save space."
        />
        <Post
          image={p5}
          desc="Rotate"
          desc_text="Rotate images with portrait or landscape orientation at once. Make them fun!"
        />
        <Post
          image={p3}
          desc="Filter"
          desc_text="Apply filters like saturation, brightness etc to your images, change their look on the go!
 "
        />
        <Post
          image={p6}
          desc="Add Text"
          desc_text="Add Text to your images and change its color."
        />
        <Post
          image={p2}
          desc="Download"
          desc_text="Download the edited image from the canvas into your system or mail it to any id of your choice"
        />
      </div>
    </div>
  );
}

// starting frontend

export default App;
