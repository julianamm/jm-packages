import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid/index";
import Avatar from ".";

storiesOf("Components|Avatar/Basic", module)
  .add("Sizes", () => (
    <Row>
        <Avatar
          image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
          size={"xs"}
          onEvent={e => {}}
        />
        <Avatar
          image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
          size={"sm"}
        />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"md"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"xl"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"xxl"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"xxxl"}
      />
    </Row>
  ))
  .add("Border Type", () => (
    <Row>
        <Avatar
          image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
          borderType={"square"}
        />
        <Avatar
          image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
          borderType={"square"}
        />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        borderType={"squareRounded"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        borderType={"squareRounded"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        borderType={"round"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        borderType={"round"}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        borderType={"round"}
      />
    </Row>
  ))
  .add("Upload from 0% to 100%", () => (
    <Row>
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
        uploading={0}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
        uploading={50}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
        uploading={70}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
        uploading={80}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
        uploading={96}
      />
      <Avatar
        image={"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"}
        size={"lg"}
        uploading={100}
      />
    </Row>
  ))
