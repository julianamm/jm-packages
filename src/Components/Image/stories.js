import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row } from "../Grid";
import Img from '.';

storiesOf('Components|Img', module)
.add('Sizes', () => (
    <Row>
        <Row padding={10}>
            <Img
                width={18}
                height={18}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={24}
                height={24}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={32}
                height={32}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={48}
                height={48}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={72}
                height={72}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={100}
                height={100}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={150}
                height={150}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
        <Row padding={10}>
            <Img
                width={200}
                height={200}
                title="image"
                src="http://via.placeholder.com/200x200"
            />
        </Row>
    </Row>
))



