import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Accordion from '../components/accordion/accordion';

describe('Accordion', () => {
  it('opens accordion', async () => {
    render(<Accordion name="Testing Accordion" text="Accordion testing content" />);
    
    const triggerButton = screen.getByRole('button');
    await userEvent.click(triggerButton);

    expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
  });
});