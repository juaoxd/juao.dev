import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { Instagram, Twitter, Github, Linkedin, SquareTerminal } from 'lucide-react'

export function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex justify-between items-center py-2 px-3 max-w-5xl mx-auto'>
        <div className='flex gap-2'>
          <SquareTerminal />
          <h1>juao.dev</h1>
        </div>
        <ModeToggle />
      </div>
      <Separator className='' />
      <div className='flex justify-start items-center gap-10 pt-3 max-w-5xl mx-auto'>
        <div>
          <Avatar className='size-36 m-auto border'>
            <AvatarImage src='https://github.com/juaoxd.png' />
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex-col text-center '>
          <h1 className='font-medium text-xl pt-3'>João Gabriel Livio</h1>
          <p className='text-gray-500'>Software Developer</p>
          <div className='flex items-center justify-center gap-2 p-3'>
            <a href='https://instagram.com/juaoxd_' target='_blank' rel='noopener noreferrer'>
              <Instagram />
            </a>
            <a href='https://twitter.com/juaoxd_' target='_blank' rel='noopener noreferrer'>
              <Twitter />
            </a>
            <a href='https://github.com/juaoxd' target='_blank' rel='noopener noreferrer'>
              <Github />
            </a>
            <a href='https://linkedin.com/in/joaogabriellivio' target='_blank' rel='noopener noreferrer'>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
