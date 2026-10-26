// pages/gallery.jsx
"use client"
import React from 'react';
import Header from "../components/header"
import TrackVisibility from "react-on-screen";
import 'animate.css';
import { PicSnaps } from '../components/pic-snap';
import {Container, Row, Col, Tab} from "react-bootstrap";
import type { Photo} from '@/lib/gallery';

export default function Gallery({extraPhotos = [] }:{ extraPhotos?:Photo[]}) {
  
return (
  <div className="min-h-screen bg-background p-6">
    <Header/>
    <Container>
                <Row>
                    <Col>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                        <div className ={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                        <h2>Captured moments! (From my IPhone :p)</h2>
                        </div>}
                        </TrackVisibility>
                        <Tab.Content>
                            
                        <div className="grid-container mt-5"> 
                          {[...extraPhotos].map((image, index) => (
                         <TrackVisibility key={index} once partialVisibility> 
                         {({ isVisible }) => (
                           <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
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
