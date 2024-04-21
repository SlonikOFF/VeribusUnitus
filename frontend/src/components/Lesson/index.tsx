import './style.css'
import prepIMG from '../../../public/ui/prep.svg'
import placeIMG from '../../../public/ui/place.svg'


interface LessonProps {
  number: number
  name: string
  place: string
  teacher: string
}

function Lesson({number, name, place, teacher}: LessonProps) {
  return (
    <div className='lesson'>
      <div className='numberClass'>{number} пара</div>
      <div className='class'>
        <div className='time'>
          <div className='firstTime'>{number === 1 ? "9:00" : "10:50"}</div>
          <div className='secondTime'>{number === 1 ? "10:35" : "12:25"}</div>
        </div>

        <div className='info'>
          <div className='name'>{name}</div>
          <div className='bottom'>
            <div className='place'>
              <img src={placeIMG} alt="" />
              <div className='number'>{place}</div>
            </div>
            <div className='teacher'>
              <img src={prepIMG} alt="" />
              <div className='name'>{teacher}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lesson
