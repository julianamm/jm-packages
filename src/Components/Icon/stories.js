import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row } from '../Grid';
import JMIcon from '.';

storiesOf('Components|Icon', module)

.add('Sizes', () => (
    <Row>
        <JMIcon 
            primary
            xs
            title="add"
            icon="add" 
        />
        <JMIcon 
            secondary
            sm
            title="add"
            icon="add" 
        />
        <JMIcon 
            danger
            md
            title="add"
            icon="add" 
        />
        <JMIcon 
            warning
            lg
            title="add"
            icon="add" 
        />
        <JMIcon 
            info
            xl
            title="add"
            icon="add" 
        />
        <JMIcon 
            color="Purple-200"
            xxl
            title="add"
            icon="add" 
        />
        <JMIcon 
            color="Orange-200"
            xxxl
            title="add"
            icon="add" 
        />
    </Row>
))

