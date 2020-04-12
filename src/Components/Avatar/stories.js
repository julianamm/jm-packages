import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from ".";

storiesOf("Components|Avatar", module)
  .add("Avatar cursor pointer", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"md"}
      onEvent={e => {}}
    />
  ))
  .add("Avatar cursor default", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"md"}
    />
  ))
  .add("Avatar sm", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"sm"}
    />
  ))
  .add("Avatar md", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"md"}
    />
  ))
  .add("Avatar lg", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"lg"}
    />
  ))
  .add("Avatar xs", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"xs"}
    />
  ))
  .add("Avatar xl", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"xl"}
    />
  ))
  .add("Avatar xxl", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"xxl"}
    />
  ))
  .add("Avatar lg uploading 0%", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"lg"}
      uploading={0}
    />
  ))
  .add("Avatar lg uploading 50%", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"lg"}
      uploading={50}
    />
  ))

  .add("Avatar lg uploading 96%", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"lg"}
      uploading={96}
    />
  ))

  .add("Avatar lg uploading 100%", () => (
    <Avatar
      image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
      size={"lg"}
      uploading={100}
    />
  ))
