import React, { useEffect } from 'react';
import { fetchData } from '../store/fetchAPI'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Swapi () {
  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  console.log(characters)
  return (
    <div className="container">
      <div className="row">
        <Link to="/" type="button" className="btn btn-dark form-control mb-3" style={{borderRadius: '0', fontFamily: 'Gugi, cursive'}}>Back</Link>
          {
            characters.map(character => {
              return (
                <div className="col-md-2">
                  <div className="card p-0 mb-4" style={{border: '0', maxHeight: '14rem'}}>
                    <img className="card-img-top" src={character.image} style={{objectFit: 'cover', height: '12rem', objectPosition: '0% 0%'}}/>
                    <div className="card-body py-2 px-2" style={{fontFamily: 'Gugi, cursive', height: '4rem', padding: '0'}}>
                        <h5 className="card-title text-left">{character.name}</h5>
                    </div>
                  </div>
                </div>
            )})
          }
      </div>
    </div>
  )
}