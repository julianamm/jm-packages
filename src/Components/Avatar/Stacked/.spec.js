import React from 'react'
import { render } from '../../../../test.setup'
import renderer from 'react-test-renderer'

import AvatarStacked from '.'

describe('AvatarStacked', () => {
    it('Rendering component without crashing', () => {
        const tree = renderer.create(<AvatarStacked>Text 2</AvatarStacked>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})