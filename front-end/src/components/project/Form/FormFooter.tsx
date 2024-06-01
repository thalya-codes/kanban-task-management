import { Link } from 'react-router-dom';
import { IFormFooterProps } from './interface';

export function FormFooter({ link, linkText, message }: IFormFooterProps) {
  return (
    <footer>
      <p className='text-center'>
        {message} &nbsp;
        <Link
          to={link}
          className='text-primary-purple font-medium hover:underline hover:underline-offset-2'
        >
          {linkText}
        </Link>
      </p>
    </footer>
  );
}
