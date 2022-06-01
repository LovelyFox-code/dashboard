import "./App.css";
import BigBox from "./components/BigBox/BigBox";
import { Row } from "./components/Grid/Grid";
import Navbar from "./components/Navbar/Navbar";
import SmallBox from "./components/SmallBox/SmallBox";
import data from "./data/data.json";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Row>
        <BigBox
          platform={data[0].facebook}
          user={data[0].facebook.user}
          followers={data[0].facebook.followers}
          changeToday={data[0].facebook.num}
          icon={data[0].facebook.icon}
          fill={data[0].facebook.fill}
        />
        <BigBox
          platform={data[0].twitter}
          user={data[0].twitter.user}
          followers={data[0].twitter.followers}
          changeToday={data[0].twitter.num}
          icon={data[0].twitter.icon}
          fill={data[0].twitter.fill}
        />
        <BigBox
          platform={data[0].instagram}
          user={data[0].instagram.user}
          followers={data[0].instagram.followers}
          changeToday={data[0].instagram.num}
          icon={data[0].instagram.icon}
          fill={data[0].instagram.fill}
        />
        <BigBox
          platform={data[0].youtube}
          user={data[0].youtube.user}
          followers={data[0].youtube.followers}
          changeToday={data[0].youtube.num}
          icon={data[0].youtube.icon}
          fill={data[0].youtube.fill}
        />
      </Row>
      <h1>Overview - Today</h1>
      <Row>
      <SmallBox         
          name = {data[1].facebookView.name}
          number = {data[1].facebookView.number}
          percentage ={data[1].facebookView.percentage}
          icon={data[0].facebook.icon}
          fill={data[0].facebook.fill}/>
          <SmallBox         
          name = {data[1].facebook.name}
          number = {data[1].facebook.number}
          percentage ={data[1].facebook.percentage}
          icon={data[0].facebook.icon}
          fill={data[0].facebook.fill}/>
          <SmallBox         
          name = {data[1].instagram.name}
          number = {data[1].instagram.number}
          percentage ={data[1].instagram.percentage}
          icon={data[0].instagram.icon}
          fill={data[0].instagram.fill}/>
          <SmallBox         
          name = {data[1].instagramView.name}
          number = {data[1].instagramView.number}
          percentage ={data[1].instagramView.percentage}
          icon={data[0].instagram.icon}
          fill={data[0].instagram.fill}/>
          <SmallBox         
          name = {data[1].twitterView.name}
          number = {data[1].twitterView.number}
          percentage ={data[1].twitterView.percentage}
          icon={data[0].twitter.icon}
          fill={data[0].twitter.fill}/>
          <SmallBox         
          name = {data[1].twitter.name}
          number = {data[1].twitter.number}
          percentage ={data[1].twitter.percentage}
          icon={data[0].twitter.icon}
          fill={data[0].twitter.fill}/>
          <SmallBox         
          name = {data[1].youtube.name}
          number = {data[1].youtube.number}
          percentage ={data[1].youtube.percentage}
          icon={data[0].youtube.icon}
          fill={data[0].youtube.fill}/>
          <SmallBox         
          name = {data[1].youtubeView.name}
          number = {data[1].youtubeView.number}
          percentage ={data[1].youtubeView.percentage}
          icon={data[0].youtube.icon}
          fill={data[0].youtube.fill}/>
      </Row>
    </div>
  );
}

export default App;
