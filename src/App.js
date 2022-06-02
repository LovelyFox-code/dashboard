import "./App.css";
import BigBox from "./components/BigBox/BigBox";
import { Row, Div90, Container } from "./components/Grid/Grid";
import Navbar from "./components/Navbar/Navbar";
import SmallBox from "./components/SmallBox/SmallBox";
import {H1} from "./components/Typography/Typography"
import data from "./data/data.json";

function App() {
  const facebook = data[0].facebook;
  const twitter = data[0].twitter;
  const instagram = data[0].instagram;
  const youtube = data[0].youtube;
  return (
    <Container>
      <Navbar />
      <Row>
        <BigBox
          platform={facebook}
          user={facebook.user}
          followers={facebook.followers}
          changeToday={facebook.num}
          icon={facebook.icon}
          fill={facebook.fill}
        />
        <BigBox
          platform={twitter}
          user={twitter.user}
          followers={twitter.followers}
          changeToday={twitter.num}
          icon={twitter.icon}
          fill={twitter.fill}
        />
        <BigBox
          platform={instagram}
          user={instagram.user}
          followers={instagram.followers}
          changeToday={instagram.num}
          icon={instagram.icon}
          fill={instagram.fill}
        />
        <BigBox
          platform={youtube}
          user={youtube.user}
          followers={youtube.followers}
          changeToday={youtube.num}
          icon={youtube.icon}
          fill={youtube.fill}
        />
      </Row>
      <Div90>
      <H1>Overview - Today</H1>
      </Div90>
      <Row>
        <SmallBox
          name={facebook.viewName}
          number={facebook.viewNumber}
          percentage={facebook.viewPercentage}
          icon={facebook.icon}
          fill={facebook.fill}
        />
        <SmallBox
          name={facebook.name}
          number={facebook.number}
          percentage={facebook.percentage}
          icon={facebook.icon}
          fill={facebook.fill}
        />
        <SmallBox
          name={instagram.name}
          number={instagram.number}
          percentage={instagram.percentage}
          icon={instagram.icon}
          fill={instagram.fill}
        />
        <SmallBox
          name={instagram.viewName}
          number={instagram.viewNumber}
          percentage={instagram.viewPercentage}
          icon={instagram.icon}
          fill={instagram.fill}
        />
        <SmallBox
          name={twitter.viewName}
          number={twitter.viewNumber}
          percentage={twitter.viewPercentage}
          icon={twitter.icon}
          fill={twitter.fill}
        />
        <SmallBox
          name={twitter.name}
          number={twitter.number}
          percentage={twitter.percentage}
          icon={twitter.icon}
          fill={twitter.fill}
        />
        <SmallBox
          name={youtube.name}
          number={youtube.number}
          percentage={youtube.percentage}
          icon={youtube.icon}
          fill={youtube.fill}
        />
        <SmallBox
          name={youtube.viewName}
          number={youtube.viewNumber}
          percentage={youtube.viewPercentage}
          icon={youtube.icon}
          fill={youtube.fill}
        />
      </Row>
    </Container>
  );
}

export default App;
