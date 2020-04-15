import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'
import Button from '../Button'
import Input from ".";


storiesOf("Components|Input/Usage/Login", module)
  .add("Default", () => (
    <Container xs>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
          <Input
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value=""
            type="email"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Pink-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
        <Input
            value=""
            type="password"
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          onEvent={ e => {
              console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"} />
        </Column>
      </Row>
    </Container>
  ))
  .add("Loading", () => (
    <Container xs>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
          <Input
              disabled
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value="xxxx@ggg.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Pink-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
        <Input
            disabled
            type={"password"}
            value="asdasas"
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          loading
          onEvent={ e => {
              console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"}
          loadingLabel={"Wait..."} />
        </Column>
      </Row>
    </Container>
  ))
  .add("Check for email in realtime", () => (
    <Container xs>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
          <Input
            loading
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value="xxxx@ggg.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Pink-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
        <Input
            type={"password"}
            value=""
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          onEvent={ e => {
            console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"} />
        </Column>
      </Row>
    </Container>
  ))
  .add("Error", () => (
    <Container xs>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
          <Input
            error='Real-time:: The server is busy'
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value="xxxx@ggg.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Pink-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
        <Input
            type={"password"}
            value=""
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          onEvent={ e => {
            console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"} />
        </Column>
      </Row>
    </Container>
  ))