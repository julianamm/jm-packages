import React from "react";
import { storiesOf } from "@storybook/react";
import AvatarStacked from ".";

const data = {
  items: [
    {
      id: 0,
      name: "user1",
      email: "user1@gmail.com",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
      id: 1,
      name: "user2",
      email: "user2@gmail.com",
      avatar:"https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 2,
      name: "user3",
      email: "user3@gmail.com",
      avatar:"https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
    },
    {
      id: 3,
      name: "user4",
      email: "user4@gmail.com",
      avatar:"https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: 4,
      name: "user5",
      email: "user5@gmail.com",
      avatar:"https://gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80",
    },
    {
      id: 4,
      name: "user5",
      email: "user5@gmail.com",
      avatar:"https://gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80",
    },
    {
      id: 4,
      name: "user5",
      email: "user5@gmail.com",
      avatar:"https://gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80",
    },
  ]
};

storiesOf("Components|Avatar|Stacked", module).add("Stacked", () => (
  <div style={{ width: "300px", padding: "60px 24px 24px 24px", height: "450px" }}>
    <AvatarStacked 
        items={data.items} 
        onEvent={event => console.log(event)} 
    />
  </div>
));
