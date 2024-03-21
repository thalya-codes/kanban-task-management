import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from '.';

describe('Should verify if the Button component is working correctly', () => {
  it('should render Button component', () => {
    render(<Button>Add new</Button>);

    const button = screen.getByText('Add new');
    expect(button).toBeInTheDocument();
  });

  it('should call the function at the click in the button', async () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Button</Button>);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
