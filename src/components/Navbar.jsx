import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SearchBar } from "./";
import { PrimaryColor } from "../utils/constants";
// import { useEffect, useState } from "react";
// import { auth } from "../firebase/firebase";


const Navbar = () => {
  // const [current_user,setCurrent_user] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () =>{
    window.localStorage.removeItem("alreadyLoggedIn")
    navigate("/Login")
  }

  // useEffect(()=>{
  //   const data = auth.currentUser;
  //   setCurrent_user(data);
  //   console.log(data) 
  // },[])

  return(
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#DBD7D2",
          top: 0,
          justifyContent: "space-around",
          zIndex:99
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <YouTubeIcon sx={{ fontSize: "50px", color: `${PrimaryColor}`, backgroundColor:'white', borderRadius:'30%', paddingX:'8px',  marginRight:'5px' }} />
          <span style={{ color: " black", fontWeight: "bold", fontSize: "25px" }} className="app_title">
            WeTube
          </span>
        </Link>
        <SearchBar />
        {/* <div className="user_name">
          Hey,
          <span>
            {current_user?.displayName}
          </span>
        </div> */}
        <button
          style={{
            color: "white",
            fontSize: "15px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: `${PrimaryColor}`,
            cursor:'pointer'
          }}
          onClick={handleLogout}
        >
          LogOut
        </button>
      </Stack>
      <div
        style={{ color: "white", backgroundColor: "gray", height: "2px" }}
      ></div>
    </>
  );
}

export default Navbar;
