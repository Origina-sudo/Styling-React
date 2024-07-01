import logo from '../assets/logo.png';
// import classes from './Header.module.css'
// import styled from 'styled-components';


export default function Header() {
  return (
    <header className=''>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p  >A community of artists and art-lovers.</p>
    </header>
  );
}
