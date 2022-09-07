import "./header.css";
//import "./images";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleup">DEKHA HOBE</span>
        <span className="headerTitleSm">COLLEGE OF ENGINEERING AND MANAGEMENT</span>
        <span className="headerTitleLg">, KOLAGHAT</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      
      <img
        className="kolaghat"
        src="https://www.dropbox.com/s/9xailjrcci8xw2s/Screenshot%20%2870%29.jpg"
        alt=""
      />
    </div>
  );
}