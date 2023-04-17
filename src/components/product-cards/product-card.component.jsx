import React, { useState } from "react";
import { Container, PhotoBanner, Grid, Card, CardImg, CardTitle, ProjectPhoto } from "./product-card.styles";
import { PROJECTS_DATA } from "../../projects-data.js";
import defaultBanner from "../../assets/default-banner.jpg";

const Projects = () => {
  const imgUrl = defaultBanner;
  const [showPhoto, setShowPhoto] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  
  const handleMouseEnter = (imageUrl) => {
    setPhotoUrl(imageUrl);
    setShowPhoto(true);
  };

  const handleMouseLeave = () => {
    setShowPhoto(false);
  };

  return (
    <>
      <Container>
        <Grid>
          {PROJECTS_DATA.map((project) => (
            <Card
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.imageUrl)}
              onMouseLeave={handleMouseLeave}
            >
              <CardImg src={project.imageUrl} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
            </Card>
          ))}
        </Grid>
        <PhotoBanner show={imgUrl} imageUrl={showPhoto ? photoUrl : defaultBanner} />
      </Container>
    </>
  );
}; 

export default Projects;