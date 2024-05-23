import { ModeToggle } from '@/components/mode-toggle'
import { SquareTerminal } from 'lucide-react'

export function Header() {
  return (
    <div className='flex justify-between items-center py-2 px-3 max-w-5xl mx-auto'>
      <div className='flex gap-2'>
        <SquareTerminal />
        <h1>juao.dev</h1>
      </div>
      <ModeToggle />
    </div>
  )
}
