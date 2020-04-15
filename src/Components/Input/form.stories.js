import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'
import Button from '../Button'
import Input from ".";


storiesOf("Components|Input/Usage/Forms", module)
  .add("Login", () => (
    <Container sm>
      <Row>
        <Column full paddingBottom={24}>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 label={"Full name"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Username"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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
  .add("Check for username on server", () => (
    <Container sm>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont h1 color={"Blue-Grey-700"} label={"Login form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Username"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                loading
                value="juju.morais"
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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
  .add("Username success", () => (
    <Container sm>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont h1 color={"Blue-Grey-700"} label={"Login form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Green-500"} label={"Username"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                success
                value="juju.morais"
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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

  .add("Username error", () => (
    <Container sm>
      <Row >
        <Column full paddingBottom={24}>
          <HeaderFont h1 color={"Blue-Grey-700"} label={"Login form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Red-500"} label={"Username"}/>
            </Column>
          </Row>
          <Row >
            <Column full paddingBottom={21}>
              <Input
                error={"Username already exists"}
                value="juju.morais"
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full paddingBottom={21}>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Pink-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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