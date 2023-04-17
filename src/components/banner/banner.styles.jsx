import styled from 'styled-components';

// Half Page Component
export const HalfPage = styled.div`
  display: flex;
  height: 100vh;
  padding:  3rem 3rem 0rem 3rem;
  
  @media (max-width: 550px) {
    height: 100vh;
    flex-direction: column;
  }
`;

// Info Component
export const Info = styled.div`
  width: 40%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 550px) {
    width: 50%
    height: 100vh;
    flex-direction: column;
    padding: 10px;
    font-size: 1.5rem;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const Bio = styled.p`
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
`;

// Photo Component
export const Photo = styled.div`
  width: 60%;
  height: 100%;
  background-image: url('https://source.unsplash.com/800x800/?portrait');
  background-size: cover;
  background-position: center;

  @media (max-width: 550px) {
    width: 50%
    height: 100vh;
    flex-direction: column;
  }
`;

