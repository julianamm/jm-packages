import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from '.';

storiesOf('Components|ImgBg', module)
.add('Background', () => (
    <Img
        image="http://via.placeholder.com/900x900"
    />
))



