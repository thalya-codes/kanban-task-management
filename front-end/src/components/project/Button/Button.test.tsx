import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Button } from '.';

describe('Should verify if the Button component is working correctly', () => {
  it('should render Button component', () => {
    render(<Button>Add new</Button>);

    const button = screen.getByText('Add new');
    expect(button).toBeInTheDocument();
  });
});
