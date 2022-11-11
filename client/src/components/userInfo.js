import React from "react";

const styles = {
  phoneButton: {
    padding: 16,
  },

  phoneButtonEl: {
    color: "#fff",
    width: 12,
    height: 12,
  },

  userCard: {
    border: "2px solid black",
    padding: 20,
  },

  userDetail: {
    margin: "24px 0",
  },
};

const UserInfo = (props) => {
  return (
    <div className="flex flex-row justify-center">
      <div style={styles.userCard}
        className="flex flex-col justify-center align-center user-card">
        <p style={styles.userDetail}>{props.profileInfo.firstName}</p>
        <p style={styles.userDetail}>{props.profileInfo.lastName}</p>
        <p style={styles.userDetail}>{props.profileInfo.email}</p>
        <p style={styles.userDetail}>{props.profileInfo.homePoints}</p>
      </div>
    </div>
  );
};

export default UserInfo;
