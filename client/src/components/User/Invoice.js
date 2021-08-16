import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

function Invoice() {
  return (
    <div className="col-lg-6 col-md-12">
      <ReactOwlCarousel
        loop
        autoplay
        autoplayHoverPause
        controls={false}
        responsive={{
          400: {
            items: 0,
          },
          750: {
            items: 1,
          },
          100: {
            items: 1,
          },
        }}
      >
        <div>
          <div className="dashboard-gravity-list invoices with-icons">
            <h4>Clients Invoices</h4>
            <ul>
              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>James Leo</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2565</li>
                  <li>Date: 01/06/2021</li>
                  <li>Country: Canada</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>King Elvis</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $1550</li>
                  <li>Date: 01/05/2021</li>
                  <li>Country: US</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Anthony Luke</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $549</li>
                  <li>Date: 01/06/2019</li>
                  <li>Country: Malta</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Lincon Wise</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $648</li>
                  <li>Date: 01/03/2021</li>
                  <li>Country: India</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Anthony Clem</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $547</li>
                  <li>Date: 01/04/2021</li>
                  <li>Country: US</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Laura Clier</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $260</li>
                  <li>Date: 01/03/2021</li>
                  <li>Country: Korea</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="dashboard-gravity-list invoices with-icons">
            <h4>Clients Invoices</h4>
            <ul>
              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Kelvin Kings</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $551</li>
                  <li>Date: 01/06/2021</li>
                  <li>country: UK</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Elina Jude</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2550</li>
                  <li>Date: 01/07/2021</li>
                  <li>Country: Finland</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Irina Kota</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2549</li>
                  <li>Date: 01/06/2019</li>
                  <li>Country: Ukraine</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Luke Adam</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Order: $20548</li>
                  <li>Date: 01/05/2021</li>
                  <li>Country: Nigeria</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Luise Jose</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2547</li>
                  <li>Date: 01/04/2019</li>
                  <li>Country: UAE</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Amina Clera</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2046</li>
                  <li>Date: 01/03/2021</li>
                  <li>Country: US</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="dashboard-gravity-list invoices with-icons">
            <h4>Clients Invoices</h4>
            <ul>
              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Kings Ezims</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $6551</li>
                  <li>Date: 01/08/2021</li>
                  <li>Country: Turkey</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>James Olia</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2550</li>
                  <li>Date: 01/07/2019</li>
                  <li>Country: Denmark</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Mike Monah</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Order: $2049</li>
                  <li>Date: 01/06/2021</li>
                  <li>Country: India</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Victoria Monah</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2048</li>
                  <li>Date: 01/05/2019</li>
                  <li>Date: Russia</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Elvis Donald</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2547</li>
                  <li>Date: 01/04/2019</li>
                  <li>country: Uk</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>

              <li>
                <i className="dash-icon-box ti-files text-success bg-light-success"></i>
                <strong>Irin Koti</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Amount: $2460</li>
                  <li>Date: 01/03/2019</li>
                  <li>Country: Mongolia</li>
                </ul>
                <div className="buttons-to-right"></div>
              </li>
            </ul>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  )
}

export default Invoice
