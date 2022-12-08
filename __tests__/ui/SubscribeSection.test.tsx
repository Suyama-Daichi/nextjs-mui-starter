/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import SubscribeSection from '../../src/components/landing/SubscribeSection'
import userEvent from '@testing-library/user-event'

describe('A Subscribe Section', () => {
    it('renders', () => {
        const component = render(<SubscribeSection />)
        expect(component).toMatchSnapshot()
    })

    it('shows a message on button press', async () => {
        const component = render(<SubscribeSection />)
        const button = component.getByRole('button')
        await userEvent.click(button)
        const target = await component.findByText(
            'We need your consent to contact you'
        )
        expect(target).toMatchSnapshot()
    })
})
