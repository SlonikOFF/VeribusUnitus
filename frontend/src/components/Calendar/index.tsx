import './style.css'
// import man from '../../../public/man.svg'

function Calendar() {



  let newArr: any[][] = [[]]
  let arrayIndex = 0;

  for (let i = 1; i < 117; i++) {
    const date = new Date(2024, 0, i)
    if (+date%7 === 0) {
      newArr.push([date.getDate()])
      arrayIndex++;
    } else {
      newArr[arrayIndex].push(date.getDate());
    }
  }

  for (let i = 0; i < 7-(newArr[0].length - 2); i++) {
    newArr[0].unshift(0)
  }
  for (let i = 0; i < 7-newArr.at(-1)!.length ; i++) {
    newArr.at(-1)!.push(0)
  }

  newArr.unshift(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
  console.log(newArr)

  /*const newArr = [0,1,2,3,4,5,6,7,8,9].reduce((final, curr, i) => {
    if (i%2 === 0) {
      final.push([curr])
      arrayIndex++;
    } else {
      final[arrayIndex].push(curr);
    }
    return final;
  }, []);*/

  return (
    <div className='calendar'>
      <table>
          {newArr.map((el,i) => {
            return (
              <tr>
                <td className='week'>{i+1}</td>
                {el.map((el, i) => {
                  return (
                    <td className= 'day'>
                      <div 
                        style={{
                            color: (i+1) %6 == 0 || (i+1) % 7 == 0 
                            ? '#17A1FA;' 
                            : 'black'
                        }}>
                          {el == 0 ? ' ' : el}
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
      </table>
    </div>
  )
}

export default Calendar
