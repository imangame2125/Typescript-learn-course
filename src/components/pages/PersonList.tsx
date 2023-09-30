import React from 'react'
import { Name } from '../types/PersonLIstProps'

type PersonsListProps = {
  names:Name[]
}

const PersonList = ({names}:PersonsListProps) => {
  return (
    <div>
        {names.map((name)=>{
            return(
                <h2 key={name.firstName}>{name.firstName} {name.lastName}</h2>
            )
        })}
    </div>
  )
}

export default PersonList