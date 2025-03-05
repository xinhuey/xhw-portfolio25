// pages/gallery.jsx
"use client"
import React from 'react';
import Header from "../components/header"
import TrackVisibility from "react-on-screen";
import 'animate.css';
import { PicSnaps } from '../components/pic-snap';
import {Container, Row, Col, Tab} from "react-bootstrap";

export default function Gallery() {
  const images = [
    {
        title: "Geomagnetic Illuminations",
        date: "May 2024",
        location: "Stratford, ON",
        imgUrl: "/images/aurora24.jpg" 
        
    },
    {
      title: "Big Dipper",
      date: "May 2024",
      location: "Waterloo, ON",
      imgUrl: "/images/bdp.jpg" 
      
    },
    {
      title: "Gibous",
      date: "May 2024",
      location: "Waterloo, ON",
      imgUrl: "/images/moon.JPG" 
      
    },
    {
      title: "An Autumn Afternoon",
      date: "October 2024",
      location: "Kitchener, ON",
      imgUrl: "/images/fall2.JPG" 
      
    },
    {
      title: "Asakusa",
      date: "December 2023",
      location: "Tokyo, Japan",
      imgUrl: "/images/asks.JPG" 
      
    },
    {
      title: "Evening Street",
      date: "December 2023",
      location: "Tokyo, Japan",
      imgUrl: "/images/jpnst.JPG" 
      
    },
    {
      title: "Shibuya from the Skies",
      date: "December 2023",
      location: "Tokyo, Japan",
      imgUrl: "/images/ssky.JPG" 
      
    },
    {
      title: "Bustling Dotonbori",
      date: "December 2024",
      location: "Osaka, Japan",
      imgUrl: "/images/dbc.JPG" 
      
    },
    {
      title: "A Tranquil Corner in Venice",
      date: "August 2024",
      location: "Venice, Italy",
      imgUrl: "/images/venice1.JPG" 
      
    },
    {
      title: "Other side of the Rialto",
      date: "August 2024",
      location: "Venice, Italy",
      imgUrl: "/images/venice2.JPG" 
    },
    {
      title: "The Grand Canal",
      date: "August 2024",
      location: "Venice, Italy",
      imgUrl: "/images/venice3.JPG" 
    },
    {
      title: "Awaiting Gondolas",
      date: "August 2024",
      location: "Venice, Italy",
      imgUrl: "/images/venice4.JPG" 
    },
    {
      title: "Love from Capri #1",
      date: "August 2024",
      location: "Capri, Italy",
      imgUrl: "/images/capri1.JPG" 
    },
    {
      title: "Love from Capri #2",
      date: "August 2024",
      location: "Capri, Italy",
      imgUrl: "/images/capri2.JPG" 
    },
    {
      title: "Sakura Sweetness",
      date: "April 2024",
      location: "Toronto, ON",
      imgUrl: "/images/sakura.JPG" 
    },
    {
      title: "Wishes",
      date: "May 2024",
      location: "Waterloo, ON",
      imgUrl: "/images/ddl.JPG" 
    },
    {
      title: "Bubble Universe",
      date: "December 2024",
      location: "TeamLabs Borderless, Tokyo",
      imgUrl: "/images/tlb.JPG" 
    },
    {
      title: "Miracle Season",
      date: "December 2023",
      location: "Toronto, ON",
      imgUrl: "/images/xmasm1.JPG" 
    },
    {
      title: "Ocean Jellies",
      date: "December 2024",
      location: "Sumida Aquarium, Tokyo",
      imgUrl: "/images/jlyfsh.JPG" 
    },
    {
      title: "A structure of History",
      date: "January 2024",
      location: "Penang, Malaysia",
      imgUrl: "/images/kks.JPG" 
    },
    {
      title: "Twinning & Towering",
      date: "January 2024",
      location: "Kuala Lumpur, Malaysia",
      imgUrl: "/images/klcc.JPG" 
    },
    {
      title: "Time for Tea?",
      date: "August 2024",
      location: "London, UK",
      imgUrl: "/images/bben.JPG" 
    },
    {
      title: "Simply Magnificent",
      date: "August 2024",
      location: "London, UK",
      imgUrl: "/images/wma.JPG" 
    },
    {
      title: "Frosty?",
      date: "December 2023",
      location: "Waterloo, ON",
      imgUrl: "/images/snowman.JPG" 
    },
    
]
return (
  <div className="min-h-screen bg-background p-6">
    <Header/>
    <Container>
                <Row>
                    <Col>
                      <TrackVisibility>
                        {({ isVisible }) =>
                        <div className ={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                        <h2>Captured moments! (From my IPhone :p)</h2>
                        </div>}
                        </TrackVisibility>
                        <Tab.Content>
                            
                        <div className="grid-container mt-5"> {/* CSS Grid container */}
                          {images.map((image, index) => (
                         <TrackVisibility key={index} partialVisibility> 
                         {({ isVisible }) => (
                           <div className={isVisible ? "animate__animated animate__slideInUp" : ""}> 
                             <PicSnaps {...image} />
                           </div>
                         )}
                       </TrackVisibility>
                         ))}
                        </div>
                           
                        </Tab.Content>
                    </Col>
                </Row>
            </Container>
  </div>
);
}
