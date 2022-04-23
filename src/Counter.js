import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);

  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <IconButton onClick={() => setLike(like + 1)}>
        {" "}
        <Badge badgeContent={like} color="primary">
          {" "}
          <ThumbUpOffAltIcon />{" "}
        </Badge>{" "}
      </IconButton>
      <IconButton onClick={() => setDisLike(disLike + 1)}>
        {" "}
        <Badge badgeContent={disLike} color="error">
          {" "}
          <ThumbDownOffAltIcon />{" "}
        </Badge>{" "}
      </IconButton>
    </div>
  );
}
