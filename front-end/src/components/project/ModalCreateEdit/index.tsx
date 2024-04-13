import { IModalCreateEditProps } from './interfaces';
import CloseIcon from '@/assets/icon-close.svg?react';
import { Modal } from '@/components/library/Modal';
import { Select } from '@/components/library/Select';
import { Textarea } from '@/components/project/Textarea';
import { Button } from '@/components/project/Button';
import { Input } from '@/components/project/Input';
import { FieldContainer } from '@/components/project/FieldContainer';

export function ModalCreateEdit({
  type = 'task',
  children,
  title,
  finishActionText,
  open,
  setShow,
}: IModalCreateEditProps) {
  return (
    <Modal.Root {...(open && setShow && { open, onOpenChange: setShow })}>
      {children}
      <Modal.Content>
        <Modal.Title>{title}</Modal.Title>

        <FieldContainer text='Nome da tarefa'>
          <Input.Field placeholder='Nome da tarefa' />
        </FieldContainer>

        {type === 'task' && (
          <FieldContainer text='Description'>
            <Textarea placeholder='Sua descrição' className='text-sm' />
          </FieldContainer>
        )}

        <ul className='flex flex-col gap-4 max-h-[170px] overflow-y-auto'>
          <li className='flex gap-3 items-center'>
            <Input.Field />
            <button aria-label='Excluir subtask'>
              <CloseIcon className='w-5 text-neutral-medium-gray' />
            </button>
          </li>
        </ul>

        <Button variant='light-purple' className='text-sm'>
          {type === 'task' ? 'Adicionar nova subtask' : 'Adicionar nova coluna'}
        </Button>

        {type === 'task' && (
          <Select.Root>
            <Select.Trigger>
              <Select.SelectedValue />
            </Select.Trigger>

            <Select.Content>
              <Select.Item value='item-1'>Item 1</Select.Item>
              <Select.Item value='item-2'>Item 2</Select.Item>
            </Select.Content>
          </Select.Root>
        )}

        <Button className='text-sm' onClick={() => setShow(false)}>
          {finishActionText}
        </Button>
      </Modal.Content>
    </Modal.Root>
  );
}
