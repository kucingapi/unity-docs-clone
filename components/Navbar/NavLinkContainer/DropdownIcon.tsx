import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Grid from '../../../public/grid.svg';
import Compass from '../../../public/compass.svg';
import FileUpload from '../../../public/fileupload.svg';
import Template from '../../../public/template.svg';
import People from '../../../public/people.svg';
import Connect from '../../../public/connect.svg';
import Shop from '../../../public/shop.svg';



function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
interface MenuItemProps {
  title: string;
  children: any;
}

const MenuItem = ({title, children }: MenuItemProps) => (
  <Menu.Item>
    {({ active }) => (
      <div
          className={classNames(
            active ? 'text-secondary fill-secondary' : 'text-white fill-white',
            'flex px-4 py-2 text-sm font-medium transition-all ease-out delay-200 items-center gap-2'
          )}
      >
        <span className="w-6 flex items-center justify-center">{children}</span>
        <a
          href="#"
        >
          {title}
        </a>
      </div>
    )}
  </Menu.Item>
)

export default function DropdownIcon() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full shadow-sm p-2 bg-black text-sm font-normal hover:bg-gray-900 ">
          {({open}) => (
            <Grid 
              className={classNames(
                open ? 'fill-secondary ' : 'fill-white'
              )}
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="md:w-52 xs:w-screen sm:w-screen py-3 origin-top-right translate-y-3 translate-x-1 flex flex-col gap-4 absolute right-0 mt-2 shadow-lg bg-black border-gray-600 border ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem
            title='Asset Store'
          >
            <Shop 
            />
          </MenuItem>
          <MenuItem 
            title='Connect'
          >
            <Connect 
            />
          </MenuItem>
          <MenuItem 
            title='Dashboard'
          >
            <Template 
            />
          </MenuItem>
          <MenuItem 
            title='Distribute'
          >
            <FileUpload 
            />
          </MenuItem>
          <MenuItem 
            title='Forum'
          >
            <People 
            />
          </MenuItem>
          <MenuItem 
            title='Learn'
          >
            <Compass 
            />
          </MenuItem>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
