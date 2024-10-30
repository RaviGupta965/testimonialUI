import { reviews } from './data'
import './App.css'
import Testimonial from './components/testimonial'
function App() {

  return (
    <>
    <div className='flex flex-col bg-purple-300 h-[100vh] w-[100vw] items-center justify-center '>
        <div className='text-center'>
          <h1 className='font-semibold text-2xl'>
            Our Testimonial
            <div className='bg-violet-400 h-[4px] w-[70%] mx-auto mt-1 mb-3 '></div>
          </h1>
      </div>
        <div className='flex flex-col justify-center items-center border-2 rounded-md border-black bg-white hover:shadow-xl'>
          <Testimonial reviews={reviews}/>
        </div>
    </div>
    </>
  )
}

export default App
