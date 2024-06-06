import { ThemeProvider } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'
import { ProfileInfo } from '@/components/profile-info'
import { Header } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Project } from '@/components/project'
import { SquareTerminal } from 'lucide-react'

export function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Header />
      <Separator className='mb-3' />
      <ProfileInfo />
      <Separator className='max-w-[75%] lg:max-w-5xl my-3 mx-auto' />
      <div className='max-w-[75%] lg:max-w-5xl mx-auto'>
        <Badge className='mb-3'>Sobre mim</Badge>
        <p className='mb-3'>
          Desenvolvedor de software, apaixonado por resolver problemas através da tecnologia. Estou cursando o 5º
          semestre de Sistemas de Informação na FHO - Uniararas.
        </p>
        <p>
          Atualmente, estou concentrando meus estudos no desenvolvimento para web e estou aberto a novas oportunidades
          de trabalho.
        </p>
      </div>
      <Separator className='max-w-[75%] lg:max-w-5xl my-3 mx-auto' />
      <div className='max-w-[75%] lg:max-w-5xl mx-auto my-3'>
        <Badge className='mb-3'>Projetos</Badge>
        <Project
          title={'juao.dev'}
          logo={SquareTerminal}
          description={'Meu portfólio pessoal, a página que você esta acessando no momento :D'}
          imagePath={'/portfolio.png'}
          projectUrl={'https://juao.dev'}
          githubUrl={'https://github.com/juaoxd/juao.dev'}
        />
      </div>
    </ThemeProvider>
  )
}
