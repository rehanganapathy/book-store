import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowType }) => {
  const handleShowType = (type) => {
    setShowType(type);
  };

  return (
    <AppBar position="static" style={{ background: '#1976D2' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" onClick={() => handleShowType('table')} style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" style={{ fontWeight: 'bold', marginRight: '10px', fontFamily: 'Montserrat, sans-serif' }}>
            Quill and Thrill
          </Typography>
        </Link>

        <Link to="/books/create" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', fontSize: '1.2rem', transition: 'color 0.3s' }} className="hover:text-gray-300">
          <MdOutlineAddBox style={{ fontSize: '2rem', marginRight: '5px' }} />
          Add Book
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
