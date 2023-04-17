import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 20px;
  padding: 3rem;
 
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 5px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 3rem  3rem 3rem 6rem;
  }

  @media screen and (min-width: 1171px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 20px 5px 20px;

  @media screen and (max-width: 1170px) {
    margin: 5px;
    font-size: 0.75rem;
  }
`;

export const CardDescription = styled.h6`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 5px 20px 20px 20px;

  @media screen and (max-width: 1170px) {
    margin: 5px;
    font-size: 0.5rem;
  }
`;

export const ProjectPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

export const PhotoBanner = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;