import React from 'react';
import { render } from '../../../../test.setup';
import renderer from 'react-test-renderer';

import JMCardBase from '.';

describe('Card Base', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<JMCardBase>Text 2</JMCardBase>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})