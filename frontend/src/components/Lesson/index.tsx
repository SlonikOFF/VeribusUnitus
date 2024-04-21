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
          <div className='firstTime'>9:00</div>
          <div className='secondTime'>10:35</div>
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
