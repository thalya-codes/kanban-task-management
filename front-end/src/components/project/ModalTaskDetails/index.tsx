import { useState } from 'react';
import EllipsisIcon from '@/assets/ellipsis-vertical.svg?react';
import { IModalTaskDetailsProps } from './interface';
import { Modal } from '@/components/library/Modal';
import { Dropdown } from '@/components/library/Dropdown';
import { Select } from '@/components/library/Select';
import { FieldContainer } from '@/components/project/FieldContainer';
import { Checkbox } from '@/components/project/Checkbox';
import { Typography } from '@/components/project/Typography';
import { Button } from '@/components/project/Button';
import { ModalCreateEdit } from '@/components/project/ModalCreateEdit';
import { ModalDelete } from '@/components/project/ModalDelete';
import { handleMultipleModalsVisibility } from '@/utils/handleMultipleModalsVisibility';

export function ModalTaskDetails({
  name,
  description,
  totalSubtasksQtd,
  completedSubtasksQtd,
  children,
}: IModalTaskDetailsProps) {
  const [showMainModal, setShowMainModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section>
      <Modal.Root open={showMainModal} onOpenChange={setShowMainModal}>
        {children}

        <Modal.Content className='flex flex-col gap-6'>
          <section className='flex justify-between'>
            <Modal.Title>{name}</Modal.Title>

            <Dropdown.Root>
              <Dropdown.Trigger>
                <EllipsisIcon />
              </Dropdown.Trigger>

              <Dropdown.Content className='w-[180px]'>
                <Button
                  variant='link-medium-gray'
                  className='w-max'
                  onClick={() =>
                    handleMultipleModalsVisibility({
                      setShowPrimary: setShowMainModal,
                      setShowSecondary: setShowEditModal,
                      openSecondary: true,
                    })
                  }
                >
                  Edit task
                </Button>

                <Button
                  variant='link-red'
                  className='w-max'
                  onClick={() =>
                    handleMultipleModalsVisibility({
                      setShowPrimary: setShowMainModal,
                      setShowSecondary: setShowDeleteModal,
                      openSecondary: true,
                    })
                  }
                >
                  Delete task
                </Button>
              </Dropdown.Content>
            </Dropdown.Root>
          </section>

          <div className='flex flex-col gap-1'>
            {description && (
              <p className='text-neutral-medium-gray text-sm'>{description}</p>
            )}

            {totalSubtasksQtd && completedSubtasksQtd && (
              <p className='text-neutral-medium-gray text-xs font-bold'>
                Substasks: ({completedSubtasksQtd} of {totalSubtasksQtd})
              </p>
            )}
          </div>

          <div className='w-full flex gap-4 items-center rounded-md py-3 px-4 bg-neutral-light-gray hover:bg-primary-extra-light-purple group'>
            <Checkbox id='task-1' className='peer' />
            <Typography
              as='label'
              color='black'
              size='sm'
              htmlFor='task-1'
              className='peer-checked:line-through peer-checked:text-neutral-medium-gray group-hover:!text-black'
            >
              Tarefa 1
            </Typography>
          </div>

          <FieldContainer text='Estado atual'>
            <Select.Root>
              <Select.Trigger>
                <Select.SelectedValue />
              </Select.Trigger>

              <Select.Content>
                <Select.Item value='item-1'>Item 1</Select.Item>
                <Select.Item value='item-2'>Item 2</Select.Item>
              </Select.Content>
            </Select.Root>
          </FieldContainer>
        </Modal.Content>
      </Modal.Root>

      <ModalCreateEdit
        type='board'
        title='Editar board'
        finishActionText='Salvar alterações'
        open={showEditModal}
        setShow={setShowEditModal}
      />

      <ModalDelete
        title='Delete this board?'
        description={
          <>
            Are you sure you want to delete the <strong>‘HEY HEY’ board</strong>
            ? This action will remove all columns and tasks and cannot be
            reversed.'
          </>
        }
        open={showDeleteModal}
        setShow={setShowDeleteModal}
        setShowParentModal={setShowMainModal}
      />
    </section>
  );
}
