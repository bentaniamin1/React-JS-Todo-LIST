import React from 'react'
export default function Cards ({titre, tache}){
      return (
        <div className="card w-50">
              <div className="card-body">
                  <h5 className="card-title">{titre}</h5>
                  <p className="card-text">{tache}</p>
                  <a href="#" className="btn btn-warning">Delete</a>
              </div>
          </div>
      )
  }
