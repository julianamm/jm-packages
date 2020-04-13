import React from 'react';
import { render } from '../../../../test.setup';
import renderer from 'react-test-renderer';

import Image from '.';

describe('Image', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<Image>Text 2</Image>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})