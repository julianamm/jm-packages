import React from 'react';
import { storiesOf } from '@storybook/react';
import Container, { Row, Column} from '.';

storiesOf('Grid|Flexbox', module)

.add('Default', () => (
  <Container padding={24}>
    <Row spaceBetween>
      <Column>space between</Column>
      <Column>space between</Column>
    </Row>
    <Row spaceAround color="Indigo-50">
      <Column>space around</Column>
      <Column>space around</Column>
    </Row>
    <Row justifyCenter>
      <Column>justify center</Column>
    </Row>
    <Row justifyRight color="Indigo-50">
      <Column>justify right</Column>
    </Row>
    <Row justifyLeft>
      <Column>justify left</Column>
    </Row>
    <Column alignCenter color="Indigo-50"> 
      <Column>column align center</Column>
    </Column>
    <Column alignRight>
      <Column>column align Right</Column>
    </Column>
    <Column alignLeft color="Indigo-50">
      <Column>column align Left</Column>
    </Column>
  </Container>
))


.add('FullHeight', () => (
  <Container fullHeight color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Justify Content Center', () => (
  <Container fullHeight justifyCenter color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Align Items Center', () => (
  <Container fullHeight alignCenter color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Justify Content End and Align Items center', () => (
  <Container fullHeight justifyRight alignCenter color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Justify Content End', () => (
  <Container fullHeight justifyRight color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container LG', () => (
  <Container lg color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container MD', () => (
  <Container md color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container SM', () => (
  <Container sm color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container XS', () => (
  <Container xs color="Indigo-50">
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))
