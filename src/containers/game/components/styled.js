import styled from 'styled-components';

export const Card = styled.li`
  color: #fff;
  background: #7d12ff;
  margin:15px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;
  height: 200px;

  backdrop-filter: blur(5px);
  border: 4px solid #ab20fd;
  box-shadow: 0 10px 25px #ab20fd;

  :hover {
    @media only screen and (min-width: 600px) {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  section {
    header {
      padding: 5px 0 10px 10px;

      h1 {
        span {
          background: rgba(33, 216, 255, 0.8);
          color: #fff;
          border-radius: 3px;
          padding: 0 6px;
        }
      }

      h3 {
        color: #fff;
        margin-top: 5px;
      }
    }
  }
  ul {
    opacity: ${props => (props.displayEpisodes ? 1 : 0)};
    top: 0;
    right: 0;
    height: 82%;
    width: 98%;
    position: absolute;
    overflow-y: ${props => (props.displayEpisodes ? 'auto' : 'hidden')};
    transition: opacity 150ms ease-in-out;

    &::-webkit-scrollbar {
      display: none;
    }

    p {
      background: #7159c1;
      font-weight: bold;
      border-radius: 5px;
      padding: 5px;
      margin: 5px 2px 5px 2px;
      width: 30%;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    li {
      background: #7159c1;
      font-weight: bold;
      width: 9%;
      border-radius: 50%;
      margin: 2px;
      padding: 5px;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;

export const CardGrid = styled.ul`
  display: ${({ loading }) => (loading ? 'block' : 'grid')};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;


