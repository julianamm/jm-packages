import React from 'react';
import { render } from '../../../../test.setup';
import renderer from 'react-test-renderer';

import Button from '.';

describe('Button', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<Button>Text 2</Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})