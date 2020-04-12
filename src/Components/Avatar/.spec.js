import React from 'react'
import { render } from '../../../test.setup'
import renderer from 'react-test-renderer'

import Avatar from '.'

describe('Avatar', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<Avatar>Text 2</Avatar>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})