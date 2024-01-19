//import React from "react";
import { Grid, Card, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksCard = ({ books }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {books.map((item) => (
        <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
          <Card variant="outlined" style={{ borderRadius: 8, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <CardContent style={{ padding: "16px", backgroundColor: "#f8f8f8", border: "1px solid #ddd" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <PiBookOpenTextLight style={{ fontSize: "2rem", marginRight: "10px", color: "#1976D2" }} />
                <Typography variant="h6" noWrap style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
                  {item.title}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <BiUserCircle style={{ fontSize: "1.5rem", marginRight: "10px", color: "#4CAF50" }} />
                <Typography variant="subtitle1" noWrap style={{ fontSize: "1rem", color: "#555" }}>
                  {item.author}
                </Typography>
              </div>

            </CardContent>
            <CardActions>
              <Link to={`/books/details/${item._id}`} style={{ textDecoration: "none", color: "#1976D2" }}>
                <IconButton aria-label="Detail" color="primary">
                  <BsInfoCircle style={{ color: "#607D8B" }} />
                </IconButton>
              </Link>
              <Link to={`/books/edit/${item._id}`} style={{ textDecoration: "none", color: "#1976D2" }}>
                <IconButton aria-label="Edit" color="primary">
                  <AiOutlineEdit style={{ color: "#607D8B" }} />
                </IconButton>
              </Link>
              <Link to={`/books/delete/${item._id}`} style={{ textDecoration: "none", color: "#1976D2" }}>
                <IconButton aria-label="Delete" color="primary">
                  <MdOutlineDelete style={{ color: "#F44336" }} />
                </IconButton>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BooksCard;
