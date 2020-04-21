import React from 'react';
import { render } from '../../../../test.setup';
import renderer from 'react-test-renderer';

import JMNav from '.';

describe('Nav', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<JMNav>Text 2</JMNav>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})