import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react'

export function ProfileInfo() {
  return (
    <div className='flex justify-center lg:justify-start items-center gap-10 max-w-5xl mx-auto'>
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
  )
}
