import React, { useEffect } from 'react'
import { useState } from 'react'

const Box = ({ getWin }) => {
  //state for store X or O
  const [XorO, setXorO] = useState('X')
  //state for all value in box
  const [xoarr, setxoarr] = useState({
    boxval: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
  })

  //reset all value to undefined to restart the game
  const resetVal = () => {
    setxoarr({
      boxval: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    })
  }

  const swap = () => {
    if (XorO === 'X') {
      setXorO('O')
    } else {
      setXorO('X')
    }
  }

  useEffect(() => {
    const temp = xoarr.boxval
    //check for all possible to win
    if (
      (temp[0] === temp[1] && temp[0] === temp[2] && temp[0] !== undefined) ||
      (temp[3] === temp[4] && temp[3] === temp[5] && temp[3] !== undefined) ||
      (temp[6] === temp[7] && temp[6] === temp[8] && temp[6] !== undefined) ||
      (temp[0] === temp[3] && temp[0] === temp[6] && temp[0] !== undefined) ||
      (temp[1] === temp[4] && temp[1] === temp[7] && temp[1] !== undefined) ||
      (temp[2] === temp[5] && temp[2] === temp[8] && temp[2] !== undefined) ||
      (temp[0] === temp[4] && temp[0] === temp[8] && temp[0] !== undefined) ||
      (temp[2] === temp[4] && temp[2] === temp[6] && temp[2] !== undefined)
    ) {
      setTimeout(() => {
        getWin(XorO==='X'?'O':'X')
        //call reset in order to restart the game
        resetVal()
        setXorO('X')
      }, 500)
    } else if (
      temp.every((e) => {
        return e !== undefined
      })
    ) {
        getWin('No one')
        setXorO('X')
        resetVal()
    }
  }, [xoarr.boxval, getWin, XorO])

  //set value as x or y
  const setval = async (index) => {
    var temp = xoarr.boxval
    temp.forEach((e, i) => {
      if (index === i) {
        if (e === undefined) {
          temp[index] = XorO
          swap()
        }
      }
    })
    setxoarr({ boxval: temp })
  }

  return (
    <div className="outbox">
      {xoarr.boxval.map((e, i) => (
        <div className="inbox col-sm-4" key={i} onClick={() => setval(i)}>
          <span>{e}</span>
        </div>
      ))}
    </div>
  )
}

export default Box
