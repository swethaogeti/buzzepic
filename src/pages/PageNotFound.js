import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img src="https://cdn.dribbble.com/users/460298/screenshots/3471002/juggler.gif"></img>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
