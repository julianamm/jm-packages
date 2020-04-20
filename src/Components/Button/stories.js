import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column } from '../Grid';
import JMButton from '.';

storiesOf('Components|Button/Types', module)
  .add('Default', () => (
      <Column alignCenter>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Loading" 
                loading
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default" 
                outlined
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Primary" 
                primary
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Secondary" 
                secondary
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Disabled" 
                disabled
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Outline" 
                outline
            />
          </Column>
      </Column>
  ))
  .add('Sizes', () => (
      <Column alignCenter>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default xs" 
                outlined
                size={'xs'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default sm" 
                outlined
                size={'sm'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default md" 
                outlined
                size={'md'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default lg" 
                outlined
                size={'lg'}
            />
          </Column>
          <Column padding={10} height={200} style={{width: '300px'}}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Fill" 
                outlined
                fill
            />
          </Column>
      </Column>
  ))
  .add('Border Types', () => (
      <Column alignCenter>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default xs square" 
                outlined
                size={'xs'}
                borderType={'square'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default sm squareRounded" 
                outlined
                size={'sm'}
                borderType={'squareRounded'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default md round" 
                outlined
                size={'md'}
                borderType={'round'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Default lg round no border" 
                size={'lg'}
                borderType={'round'}
                noBorder
            />
          </Column>
      </Column>
  ))
  .add('Colored', () => (
      <Column alignCenter>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Colored" 
                borderType={'round'}
                colored
                bgColor={'Deep-Purple-A200'}
                textColor={'Lime-A400'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Colored" 
                borderType={'round'}
                colored
                bgColor={'Indigo-300'}
                textColor={'Blue-Grey-900'}
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Colored" 
                borderType={'round'}
                textColor={'Indigo-500'}
                colored
                bgColor={'Lime-A400'}
                bgColorHover={'Lime-A400'}
            />
          </Column>
          <Column padding={10} width={'100%'}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                label="Colored" 
                borderType={'round'}
                textColor={'Indigo-500'}
                colored
                bgColor={'Lime-A400'}
                bgColorHover={'Lime-A400'}
                fill
            />
          </Column>
      </Column>
  ))
  .add('Icon Plan', () => (
      <Column alignCenter>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'sm'}
                borderType={'circle'}
                iconPlan
                smIcon
                icon="add"
                colorIcon="White"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'md'}
                borderType={'circle'}
                colored
                noHover
                bgColor={'Deep-Purple-A200'}
                iconPlan
                mdIcon
                icon="add"
                colorIcon="White"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'lg'}
                borderType={'circle'}
                colored
                noHover
                bgColor={'Lime-A400'}
                iconPlan
                lgIcon
                icon="add"
                colorIcon="Indigo-500"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'lg'}
                borderType={'circle'}
                secondary
                outlined
                iconPlan
                lgIcon
                icon="add"
                colorIcon="Lime-A400"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'lg'}
                borderType={'circle'}
                outlined
                iconPlan
                lgIcon
                icon="add"
                colorIcon="Black-Blue-700"
            />
          </Column>
      </Column>
  ))
  .add('Icon Label', () => (
      <Column alignCenter>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'sm'}
                borderType={'round'}
                colored
                bgColor={'Deep-Purple-A200'}
                textColor={'Lime-A400'}
                label='Add'
                iconLabel
                smIcon
                icon="add"
                colorIcon="Lime-A400"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'lg'}
                borderType={'squareRounded'}
                bgColor={'Deep-Purple-A400'}
                label='Add'
                iconLabel
                mdIcon
                icon="add"
                colorIcon="White"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'xl'}
                borderType={'square'}
                label='Add'
                bgColor={'Lime-A400'}
                textColor={'Indigo-500'}
                iconLabel
                lgIcon
                icon="add"
                colorIcon="Indigo-500"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'xs'}
                borderType={'round'}
                secondary
                textColor={'Indigo-500'}
                label='Add a label here'
                iconLabel
                smIcon
                icon="add"
                colorIcon="Indigo-500"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'xs'}
                borderType={'round'}
                outlined
                textColor={'Cyan-900'}
                bgColor={'Purple-A400'}
                label='Add another label here'
                iconLabel
                smIcon
                icon="add"
                colorIcon="Cyan-900"
            />
          </Column>
          <Column padding={10}>
            <JMButton 
                onEvent={e => {console.log(e)}} 
                size={'xl'}
                borderType={'round'}
                label='Add'
                iconLabel
                lgIcon
                icon="add"
                colorIcon="White"
            />
          </Column>
      </Column>
  ))
