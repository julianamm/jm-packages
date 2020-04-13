import React from 'react';
import { render } from '../../../test.setup';
import renderer from 'react-test-renderer';

import ImgBackground from '.';

describe('ImgBackground', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<ImgBackground>Text 2</ImgBackground>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})