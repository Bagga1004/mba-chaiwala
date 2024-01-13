
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import freshTopicImg from "./assets/academy.png";
import data from "./data/data.json";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiwalaImg from "./assets/image3.png";
import Footer from "./components/Footer";
import Misc from "./components/Misc";
// import Router from "./config/Router";


import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";
import { useEffect } from "react";



const yellow = "#fff100",pink ="#ed1e79", white= "#fff", brown= "#6d3d0f"

function App() {

  const{freshTopic , freshTopic2 , tedTalks , franchise,map,courses,album,barat,chaiwala} = data;           //de-structuring of data

const dotCursor = (e)=>{
  const cursor= document.querySelector(".cursor")
  // console.log(e);
  cursor.style.top=`${e.pageY - 14}px`;
  cursor.style.left=`${e.pageX - 14}px`;

  const element = e.target;
  if(element.getAttribute("data-cursorpointer")){
   cursor.classList.add("cursorHover")
  }
  else if(element.getAttribute("data-cursorpointermini")){
    cursor.classList.add("cursorHoverMini")
  }
  else{
    cursor.classList.remove("cursorHover")
  }
}

  useEffect(()=>{
     window.addEventListener("mousemove", dotCursor);

     return ()=>{
      window.removeEventListener("mousemove", dotCursor);
     }
   
  },[])

  return (
    <>
    {/* <Router/> */}
     <IntroVideo/>
     {/* <Section/> */}
     <Section
      h3={freshTopic.heading}
       text={freshTopic.text}
       btnText={freshTopic.btn}
     imgSrc={freshTopicImg}
    backgroundColor= {pink}
     headingColor= {yellow}
      textColor = {yellow}
      btnBgColor = {yellow}
       btnColor= {pink}
     />
     <Section           //fresh topic 2
      h3={freshTopic2.heading}
       text={freshTopic2.text}
       btnText={freshTopic2.btn}
     imgSrc={freshTopic2Img}
    backgroundColor= {pink}
     headingColor= {yellow}
      textColor = {yellow}
      btnBgColor = {yellow}
       btnColor= {pink}
     />
     <Section           //ted -talk
      h3={tedTalks.heading}
       text={tedTalks.text}
       btnText={tedTalks.btn}
     imgSrc={tedTalksImg}
    backgroundColor= {yellow}
     headingColor= {pink}
      textColor = {pink}
      btnBgColor = {pink}
       btnColor= {yellow}
     />
     <Section           //ted -talk
      h3={franchise.heading}
       text={franchise.text}
       btnText={franchise.btn}
     imgSrc={franchiseImg}
    backgroundColor= {white}
     headingColor= {pink}
      textColor = {brown}
      btnBgColor = {brown}
       btnColor= {yellow}
     />
     <Section           //ted -talk
      h3={map.heading}
       text={map.text}
      //  btnText={map.btn}
     imgSrc={mapImg}
    backgroundColor= {pink}
     headingColor= {yellow}
      textColor = {yellow}
      btnBgColor = {brown}
       btnColor= {yellow}
       hasBtn = {false}
     />
     <Section           //ted -talk
      h3={courses.heading}
       text={courses.text}
       btnText={courses.btn}
     imgSrc={coursesImg}
     imgSize={"30%"}
    backgroundColor= {yellow}
     headingColor= {pink}
      textColor = {pink}
      btnBgColor = {pink}
       btnColor= {yellow}
     />
     <Section           //ted -talk
      h3={album.heading}
       text={album.text}
       btnText={album.btn}
     imgSrc={albumImg}
    backgroundColor= {white}
     headingColor= {pink}
      textColor = {brown}
      btnBgColor = {brown}
       btnColor= {yellow}
     />
     <Section           //ted -talk
      h3={barat.heading}
       text={barat.text}
       btnText={barat.btn}
     imgSrc={baratImg}
    backgroundColor= {pink}
     headingColor= {yellow}
      textColor = {yellow}
      btnBgColor = {yellow}
       btnColor= {pink}
     />
     <Section           //ted -talk
      h3={chaiwala.heading}
       text={chaiwala.text}
       btnText={chaiwala.btn}
     imgSrc={chaiwalaImg}
    backgroundColor= {white}
     headingColor= {pink}
      textColor = {brown}
      btnBgColor = {brown}
       btnColor= {yellow}
     />
     <Footer/>
     <Misc/>
    </>
  )
}

export default App
