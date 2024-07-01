import logo from '../assets/logo.png';
// import classes from './Header.module.css'
// import styled from 'styled-components';


export default function Header() {
  return (
    <header className='flex-col items-center mt-8 mb-16'>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p  >A community of artists and art-lovers.</p>
    </header>
  );
}
