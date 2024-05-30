export function InputErrorMsg({ message }: { message: string | undefined }) {
  return <span className='text-xs text-red-500 flex-2 pr-3'>{message}</span>;
}
