import React from "react";
import { storiesOf } from "@storybook/react";
import { Column, Row } from '../Grid';
import JMNav from ".";

const items = [
    {
        label: 'Home',
        to: '#',
        color: 'Pink-200',
        sm: false,
        md:false,
        lg:false,
        noUnderscore: false,
        reverse:false,
    },
    {
        label: 'About',
        to: '#',
        color: 'Pink-200',
        sm: false,
        md:false,
        lg:false,
        noUnderscore: false,
        reverse:false,
    },
    {
        label: 'Work',
        to: '#',
        color: 'Pink-200',
        sm: false,
        md:false,
        lg:false,
        noUnderscore: false,
        reverse:false,
    },
    {
        label: 'Contact',
        to: '#',
        color: 'Pink-200',
        sm: false,
        md:false,
        lg:false,
        noUnderscore: false,
        reverse:false,
    },
];

storiesOf("Components|Nav", module)

.add("Desktop", () => (
  <Column padding={24}>
      <JMNav
        navBgColor='Grey-100'
        logo="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
        items={items}
      />
  </Column>
))
