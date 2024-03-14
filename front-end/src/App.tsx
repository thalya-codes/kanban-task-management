import { Modal } from './components/library/Modal/dialog';

function App() {
  return (
    <>
      <h1>Kanban Task Management</h1>
      return (
      <Modal.Dialog>
        <Modal.Trigger asChild>
          <button>Edit Profile</button>
        </Modal.Trigger>
        <Modal.Content className='sm:max-w-[425px]'>
          <Modal.Header>
            <Modal.Title>Edit profile</Modal.Title>
            <Modal.Description>
              Make changes to your profile here. Click save when you're done.
            </Modal.Description>
          </Modal.Header>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <label htmlFor='name' className='text-right'>
                Name
              </label>
              <input id='name' value='Pedro Duarte' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <label htmlFor='username' className='text-right'>
                Username
              </label>
              <input id='username' value='@peduarte' className='col-span-3' />
            </div>
          </div>
          <Modal.Footer>
            <button type='submit'>Save changes</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Dialog>
      )
    </>
  );
}

export default App;
