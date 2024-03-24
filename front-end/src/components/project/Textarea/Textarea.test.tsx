import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Textarea } from '.';
import { userEvent } from '@testing-library/user-event';

test('Should typing some text into field', async () => {
  render(<Textarea />);

  const textarea = screen.getByTestId('textarea');
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  await userEvent.type(textarea, text);

  expect(textarea).toHaveValue(text);
});
