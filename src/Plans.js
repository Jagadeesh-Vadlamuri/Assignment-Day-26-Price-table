import React from 'react';

export default function Plans({ header, price, features}) {
    return(
        <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{header}</h5>
                  <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                  <hr/>
                  <ul className="fa-ul">
                      {
                          features.map((value)=>{
                              return(
                                <li className={!value.enabled ? "text-muted" : ""}><span className="fa-li"><i className={value.enabled ? "fas fa-check" : "fas fa-times"}></i></span>{value.name}</li>
                              )
                          })
                      }
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
    )
}