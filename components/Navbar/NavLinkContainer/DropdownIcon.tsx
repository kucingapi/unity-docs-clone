import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ViewGridIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faLink, faColumns, faUpload, faUserFriends, faCompass } from '@fortawesome/free-solid-svg-icons'
import Grid from '../../../public/grid.svg'


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
interface MenuItemProps {
  title: string;
  icon: any;
}

const MenuItem = ({title, icon}: MenuItemProps) => (
  <Menu.Item>
    {({ active }) => (
      <div
          className={classNames(
            active ? 'text-blue-500 fill-blue-500' : 'text-white',
            'flex px-4 py-2 text-sm font-medium transition-all ease-out delay-200 items-center gap-2'
          )}
      >
        <FontAwesomeIcon className='h-5' icon={icon} />
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
        <Menu.Button className="inline-flex justify-center w-full rounded-full shadow-sm p-2 bg-black text-sm font-medium hover:bg-gray-900 ">
          {({open}) => (
            <Grid 
              className={classNames(
                open ? 'fill-blue-500 ' : 'fill-white',
                'w-5'
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black border-gray-600 border ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem 
              title='Asset Store'
              icon={faShoppingBasket}
            />
            <MenuItem 
              title='Connect'
              icon={faLink}
            />
            <MenuItem 
              title='Dashboard'
              icon={faColumns}
            />
            <MenuItem 
              title='Distribute'
              icon={faUpload}
            />
            <MenuItem 
              title='Forum'
              icon={faUserFriends}
            />
            <MenuItem 
              title='Learn'
              icon={faCompass}
            />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
