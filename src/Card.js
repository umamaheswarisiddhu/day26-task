import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'



function Menu(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.card.head}</h5>
          <h6 className="card-price text-center">${props.card.price}<span className="period">/{props.card.month}</span></h6>
          <hr />
          <ul className="fa-ul">
            {props.card.description.map((describe) => {
              return <li className={`${describe.bold ? "fw-bold" : ""} ${describe.mute ? "text-muted" : ""} `}><span className="fa-li"><FontAwesomeIcon icon={describe.mute ? faTimes : faCheck} /></span>
                <span className={describe.bolder ? "fw-bold":""}> {describe.unlimited} </span>{describe.content}
              </li>
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;