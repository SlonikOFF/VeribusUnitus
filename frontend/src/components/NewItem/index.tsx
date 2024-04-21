import './style.css'

interface LessonProps {
  img: string
  title: string
  text: string
}

function New({img, title, text}: LessonProps) {
  return (
    <div className='new'>
      <img src={img} alt="" />
      <div className='info'>
        <div className='title'>{title}</div>
        <div className='text'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default New
