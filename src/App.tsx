import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button variant='Secondary' text='Share LinkNote' StartIcon={PlusIcon("size-5")}></Button>

      <Button variant='Primary' text='Add content' StartIcon={PlusIcon("size-5")}></Button>
    
      <Card></Card>
    </>
  )
}

export default App
