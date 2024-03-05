import React from 'react'
type Props={
    name2:string
}
export default function Childrent(props:Props) {
    const {name2}= props
  return (
    <>
    <div>Childrent11111</div>
    <p> Name : {name2}</p>
    </>
  )
}
