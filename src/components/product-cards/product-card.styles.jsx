import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 40px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 20px;
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
`;