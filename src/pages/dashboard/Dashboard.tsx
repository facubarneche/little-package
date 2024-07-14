import { Button } from '@mui/material';
import logo from '../../logo.png';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('sticker-album')
  }

  return (
    <>
      <header>
        <img className="app-logo" src={logo} alt="Logo Little Package" />
        {/* <a href="http://localhost:3000/"></a> */}
      </header>
      <h1>Little Package</h1>
      <Button variant="contained" onClick={redirect}>Album</Button>
    </>
  )
}
