import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid';
import HeaderFont from '../Typography/Header';
import BodyFont from '../Typography/Body';
import Input from ".";

storiesOf("Components|Input", module)
  .add("Default", () => (
    <Container>
      <Row>
        <Column full width={900}>
          <Input
            value=""
            data={{User: { id: 1}}}
            placeholder="Input"
            onEvent={e => {
              console.log(e)
            }}
          />
        </Column>
      </Row>
    </Container>
  ))
  .add("Variations", () => (
    <Container padding={24}>
      <Row paddingBottom={24}>
        <Column>
          <HeaderFont h3 color={"Blue-Grey-700"} label={"Controlled Inputs"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont h3 color={"Blue-Grey-200"} label={"No Validation"} />
        </Column>
      </Row>
      <Row>
        <Column full paddingBottom={24}>
          <Input value="" placeholder="Simple Input" onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row>
        <Column full>
          <HeaderFont h3 color={"Blue-Grey-700"} label={"Prioritizing component validation"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <BodyFont color={"Blue-Grey-200"} label={"Regex /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"}/>
        </Column>
        <Column full>
          <BodyFont color={"Blue-Grey-200"} label={"Regex /^\d*$/"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={24}>
          <Input
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value=""
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
        <Column full paddingBottom={24}>
        <Input
            test={/^\d*$/}
            testMessage={"Not a number"}
            value=""
            placeholder="Type a number"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h3  color={"Red-400"}  label={"Prioritizing Server Validation"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <BodyFont color={"Blue-Grey-200"} label={"Regex /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"} />
        </Column>
        <Column full>
          <BodyFont color={"Blue-Grey-200"} label={"Regex /^\d*$/"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={24}>
          <Input
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            error="Server Error 503"
            value="xxx@xxx.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
        <Column full paddingBottom={24}>
        <Input
            test={/^\d*$/}
            testMessage={"Not a number"}
            value="zxczx"
            placeholder="Type a number"
            error="Server Error 400"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h3  color={"Blue-400"}  label={"Loading"} />
        </Column>
      </Row>
      <Row>
        <Column full paddingBottom={24}>
          <Input loading value="Simple Input loading" placeholder="Simple Input loading" onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h3  color={"Green-400"}  label={"Success"} />
        </Column>
      </Row>
      <Row>
        <Column full paddingBottom={24}>
          <Input success value="Simple Input success" placeholder="Simple Input success" onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>

      <Row >
        <Column full>
          <HeaderFont h3 color={"Blue-Grey-200"}  label={"Disabled"} />
        </Column>
      </Row>
      <Row>
        <Column full>
          <Input disabled value="Simple Input disabled" placeholder="Simple Input disabled" onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
    </Container>
  ))