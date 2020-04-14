import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column } from '../Grid';
import Button from '.';

storiesOf('Components|Button/Types', module)
  .add('Default', () => (
      <Column alignCenter>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Loading" 
                loading
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default" 
                outlined
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Primary" 
                primary
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Secondary" 
                secondary
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Disabled" 
                disabled
            />
          </Column>
          <Column padding={10}>
            <Button 
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
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default xs" 
                outlined
                size={'xs'}
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default sm" 
                outlined
                size={'sm'}
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default md" 
                outlined
                size={'md'}
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default lg" 
                outlined
                size={'lg'}
            />
          </Column>
      </Column>
  ))
  .add('Border Types', () => (
      <Column alignCenter>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default xs square" 
                outlined
                size={'xs'}
                borderType={'square'}
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default sm squareRounded" 
                outlined
                size={'sm'}
                borderType={'squareRounded'}
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Default md round" 
                outlined
                size={'md'}
                borderType={'round'}
            />
          </Column>
          <Column padding={10}>
            <Button 
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
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Colored" 
                borderType={'round'}
                colored
                bgColor={'Deep-Purple-A200'}
                textColor={'Lime-A400'}
            />
          </Column>
          <Column padding={10}>
            <Button 
                onEvent={e => {console.log(e)}} 
                label="Colored" 
                borderType={'round'}
                colored
                bgColor={'Indigo-300'}
                textColor={'Blue-Grey-900'}
            />
          </Column>
          <Column padding={10}>
            <Button 
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
            <Button 
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
