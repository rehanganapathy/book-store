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
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="flex justify-between items-center">
        <Link to="/" onClick={() => handleShowType('table')} className="flex items-center">
          <Typography variant="h6" component="div" className="text-white mx-4">
            Quill and Thrill
          </Typography>
        </Link>

        <Link to="/books/create" className="text-white hover:text-gray-300">
          <MdOutlineAddBox className="text-4xl" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
