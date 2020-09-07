import React from "react"

const FlashMessages = props => {
  return (
    <>
      {props.messages.map((msg, index) => {
        return (
          <div key={index} className="alert alert-warning alert-dismissible fade show" role="alert">
            {msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )
      })}
    </>
  )
}

export default FlashMessages
