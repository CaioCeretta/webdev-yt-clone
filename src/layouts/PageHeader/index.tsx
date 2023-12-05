import { Menu } from 'lucide-react'
import logo from '../../assets/Logo.png'
import Button from '../../components/Button'

export function PageHeader() {
  return (
    <div className="flex flex-row gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant={'ghost'} size={'icon'} className='p-10'>
          <Menu /> 
        </Button>
        <a href="/">
          <img src={logo} alt="Logo" className='h-10' />
        </a>
      </div>
  
    </div>
  )
}