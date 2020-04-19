import React from 'react';
import { render } from '../../../../test.setup';
import renderer from 'react-test-renderer';

import JMIcon from '.'

describe('Icon', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<JMIcon>Text 2</JMIcon>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})