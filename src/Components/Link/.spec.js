import React from 'react';
import { render } from '../../../../test.setup';
import renderer from 'react-test-renderer';

import Link from '.';

describe('Link', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<Link>Text 2</Link>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})