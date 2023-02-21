import { Alert } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const Notification = ({ notification }) => {
  if (!notification) {
    return null;
  }

  return (
    <Alert severity={notification.severity}>{notification.notification}</Alert>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(Notification);
