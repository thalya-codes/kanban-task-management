import { Modal } from '@/components/library/Modal';
import { Typography } from '@/components/project/Typography';
import { Button } from '@/components/project/Button';
import { handleMultipleModalsVisibility } from '@/utils/handleMultipleModalsVisibility';
import { IModalDeleteProps } from './interface';

export function ModalDelete({
  title,
  description,
  open,
  setShow,
  setShowParentModal,
}: IModalDeleteProps) {
  return (
    <Modal.Root {...(open && setShow && { open, onOpenChange: setShow })}>
      <Modal.Content className='flex flex-col gap-7'>
        <Modal.Title asChild>
          <Typography as='h3' className='text-primary-red'>
            {title}
          </Typography>
        </Modal.Title>
        <Typography as='p' color='gray' size='sm' className='font-normal'>
          {description}
        </Typography>

        <Modal.Footer className='flex-row gap-3'>
          <Button
            variant='red'
            onClick={() =>
              handleMultipleModalsVisibility({
                setShowPrimary: setShow,
                setShowSecondary: setShowParentModal,
              })
            }
          >
            Delete
          </Button>
          <Button
            variant='light-purple'
            onClick={() =>
              handleMultipleModalsVisibility({
                setShowPrimary: setShow,
                setShowSecondary: setShowParentModal,
              })
            }
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
