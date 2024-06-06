import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Github, Globe, LucideIcon } from 'lucide-react'
import React from 'react'

interface ProjectProps {
  title: string
  logo: LucideIcon
  description: string
  imagePath: string
  projectUrl: string
  githubUrl: string
}

export function Project({ title, logo, description, imagePath, projectUrl, githubUrl }: ProjectProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='max-w-64 hover:cursor-pointer hover:scale-110 duration-100 mt-1'>
          <CardHeader>
            <div className='flex gap-3'>
              {React.createElement(logo)}
              <CardTitle>{title}</CardTitle>
            </div>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <img src={imagePath} alt='' />
        <DialogFooter>
          <div className='flex justify-end w-full gap-2'>
            <a href={projectUrl} target='_blank' rel='noopener noreferrer'>
              <Badge className='flex gap-1'>
                Link
                <Globe />
              </Badge>
            </a>
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              <Badge className='flex gap-1'>
                Código
                <Github />
              </Badge>
            </a>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
