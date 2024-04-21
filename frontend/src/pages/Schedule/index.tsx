import './style.css'
import shame from '../../../public/human/схема.svg'
import lessonPart from '../../../public/human/учебная часть.svg'
import shedulePrep from '../../../public/human/преподаватели.svg'

import pinW from '../../../public/ui/pin_white.svg'
import Lesson from '../../components/Lesson'
import Calendar from '../../components/Calendar'
// import pinB from '../../../public/pin_black.svg'

function Schedule() {

  return (
    <div className='shedule'>
      <div className='populars'>

        <div className='title'>Популярные сервисы </div>
        <div className='services'>

          <div className='populars-services'>
            <div className="title">Схема этажей</div>
            <img className="pin" src={pinW} alt="" />
            <img className="human" src={shame} alt="" />
          </div>

          <div className='populars-services'>
            <div className="title">Схема этажей</div>
            <img className="pin" src={pinW} alt="" />
            <img className="human" src={shedulePrep} alt="" />
          </div>

          <div className='populars-services'>
            <div className="title">Учебная часть</div>
            <img className="pin" src={pinW} alt="" />
            <img className="human" src={lessonPart} alt="" />
          </div>
        </div>

      </div>


      <div className='dates'>
        <div className='date'>
          <div className='months'>
            <div>май</div>
            <div>апрель</div>
            <div>март</div>
          </div>

            <Calendar />
        </div>
        <div className='lessons'>
          <Lesson number={1} name={'Молеку'} place={'5-14'} teacher={'Иван Иванов'} />
          <Lesson number={2} name={'Молеку'} place={'5-14'} teacher={'Иван Иванов'} />
        </div>
      </div>
    </div>
    // <></>
  )
}

export default Schedule
