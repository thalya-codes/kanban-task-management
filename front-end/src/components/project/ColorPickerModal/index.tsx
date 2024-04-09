import { Modal } from '@/components/library/Modal';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Button } from '../Button';

export function ColorPickerModal() {
  const [color, setColor] = useState('#000');

  return (
    <Modal.Root>
      <Modal.Trigger
        style={{ background: color }}
        className='w-4 h-4 sm:w-5 sm:h-5 rounded-full'
      />
      <Modal.Content className='flex flex-col justify-center !h-3/6 sm:max-w-[90vw]'>
        <HexColorPicker
          color={color}
          onChange={setColor}
          className='self-center !h-full !w-full'
        />

        <Modal.Footer className='w-full self-end'>
          <Button className='text-sm h-10'>Salvar</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
