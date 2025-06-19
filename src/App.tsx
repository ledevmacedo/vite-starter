import './App.css'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './components/mode-toggle'

function App() {
  return (
    <>
      <div className="flex min-h-svh space-y-10 flex-col items-center justify-center">
        <h1 className='text-6xl font-bold'>VITE STARTER</h1>
        <p className='text-xl text-muted-foreground'>
          This is a simple vite project containing tailwind.css and Shadcn/Ui.
        </p>
        <div className='flex  items-center gap-2'>
          <Button>Click me</Button>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default App
