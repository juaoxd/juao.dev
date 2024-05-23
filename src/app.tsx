import { ThemeProvider } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'
import { ProfileInfo } from '@/components/profile-info'
import { Header } from '@/components/header'
import { Badge } from '@/components/ui/badge'

export function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Header />
      <Separator className='mb-3' />
      <ProfileInfo />
      <Separator className='max-w-[75%] lg:max-w-5xl my-3 mx-auto' />
      <div className='max-w-[75%] lg:max-w-5xl mx-auto'>
        <Badge className='mb-3'>Sobre mim</Badge>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam id reprehenderit aperiam atque
          tempora animi nostrum, dolores ex facilis autem recusandae quidem sit doloremque nobis earum ipsa numquam et!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque dolor distinctio velit dolore esse
          asperiores repellendus, ullam incidunt unde quas ad vel nam nostrum quis quisquam, accusantium ipsum quidem.
        </p>
      </div>
      <Separator className='max-w-[75%] lg:max-w-5xl my-3 mx-auto' />
    </ThemeProvider>
  )
}
