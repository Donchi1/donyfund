import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Breadcrumb, Spinner } from 'react-bootstrap'
import CountryDropdown from '../general/CountryDropdown'

function Checkout() {
  const [openAlert, setOpenAlert] = useState({
    success: false,
    error: false,
    message: '',
  })
  const [btcProve, setBtcProve] = useState('')
  const [btnState, setBtnState] = useState({
    loading: false,
    disableBtn: false,
  })

  const [userBillDetails, setUserBillDetails] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    zipcode: '',
    street: '',
    town: '',
    state: '',
  })

  const [debitDetails, setDebitDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  })

  const handleUserBillDetails = (e) => {
    setUserBillDetails({ ...userBillDetails, [e.target.id]: e.target.value })
  }

  const handleUserDebitPay = (e) => {
    setDebitDetails({ ...debitDetails, [e.target.id]: e.target.value })
  }

  const handleBtcProve = (e) => {
    e.preventDefault()

    setBtnState({ ...btnState, loading: true, disableBtn: true })

    //server btcProve

    axios
      .post(
        `${process.env.REACT_APP_API_REQUEST_URL}/transactions/paymentprove`,
        btcProve,
      )
      .then((res) => {
        setOpenAlert({
          ...openAlert,
          success: true,
          message: res.data,
        })
        setBtnState({ ...btnState, loading: false, disableBtn: false })
      })

    setBtcProve('')
  }

  const handleUserBilling = (e) => {
    e.preventDefault()

    // send to server userBillDetails  debitDetails
    const billData = { userBillDetails, debitDetails }

    axios
      .post(
        `${process.env.REACT_APP_API_REQUEST_URL}/api/transactions/payments`,
        billData,
      )
      .then((res) => {
        const data = res.data

        setOpenAlert({ ...openAlert, success: true, message: data })
      })
      .catch((error) => {
        setOpenAlert({
          ...openAlert,
          error: true,
          message: error.response.data.message,
        })
      })

    setDebitDetails({
      ...debitDetails,
      cardHolderName: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvv: '',
    })

    setUserBillDetails({
      ...userBillDetails,
      name: '',
      email: '',
      phone: '',
      country: '',
      zipcode: '',
      street: '',
      town: '',
      state: '',
    })
  }

  return (
    <>
      <div id="main-wrapper">
        {/* Start Navigation */}

        {/* ============================ Page Title Start================================== */}
        <div className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2 className="ipt-title">Withdrawal Activation</h2>
                <span className="ipn-subtitle">Billing & Payment Page</span>
              </div>
            </div>
            <Breadcrumb variant="primary">
              <Breadcrumb.Item href="/user/dashboard">
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/user/joblist">Works</Breadcrumb.Item>
              <Breadcrumb.Item active>Activation</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* ============================ Page Title End ================================== */}

        {/* ============================ Main Section Start ================================== */}
        <section className="gray-light min-sec">
          <div className="container">
            <div className="row form-submit">
              <div className="col-lg-8 col-md-12 col-sm-12">
                {/* row */}
                <Alert
                  as="h4"
                  variant="success"
                  dismissible
                  show={openAlert.success}
                  onClose={() => setOpenAlert({ ...openAlert, success: false })}
                >
                  {openAlert.message}
                </Alert>
                <Alert
                  as="h4"
                  variant="danger"
                  dismissible
                  show={openAlert.error}
                  onClose={() => setOpenAlert({ ...openAlert, error: false })}
                >
                  {openAlert.message}
                </Alert>
                <div className="row m-0">
                  <div className="billing_page mb-4">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3>Billing Detail</h3>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="name">
                            Name<i className="req">*</i>
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="form-control with-light"
                            value={userBillDetails.name}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="email">
                            Email<i className="req">*</i>
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control with-light"
                            value={userBillDetails.email}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group with-light">
                          <label htmlFor="country">
                            Country<i className="req">*</i>
                          </label>
                          <CountryDropdown
                            state={userBillDetails}
                            setState={setUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="street">
                            Street<i className="req">*</i>
                          </label>
                          <input
                            type="text"
                            className="form-control with-light"
                            id="street"
                            value={userBillDetails.street}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="state">State</label>
                          <input
                            type="text"
                            id="state"
                            className="form-control with-light"
                            value={userBillDetails.state}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="town">
                            Town/City<i className="req">*</i>
                          </label>
                          <input
                            type="text"
                            id="town"
                            className="form-control with-light"
                            value={userBillDetails.town}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="phone">
                            Phone<i className="req">*</i>
                          </label>
                          <input
                            type="text"
                            className="form-control with-light"
                            id="phone"
                            value={userBillDetails.phone}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="zipcode">
                            Postcode/Zip<i className="req">*</i>
                          </label>
                          <input
                            type="text"
                            className="form-control with-light"
                            id="zipcode"
                            value={userBillDetails.zipcode}
                            onChange={handleUserBillDetails}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            id="a-2"
                            className="checkbox-custom"
                            name="a-2"
                            type="checkbox"
                          />
                          <label
                            htmlFor="a-2"
                            className="checkbox-custom-label"
                          >
                            By clicking you agreed to our conditions
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel-group pay_opy980" id="payaccordion">
                    {/* Pay By Paypal */}
                    <div className="panel panel-default">
                      <div className="panel-heading" id="pay">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            role="button"
                            data-parent="#payaccordion"
                            href="#payPal"
                            aria-expanded="false"
                            aria-controls="payPal"
                            className="collapsed"
                          >
                            PayPal
                            <img
                              src="https://themezhub.net/workoo-demo/workoo/assets/img/paypal.png"
                              className="img-fluid"
                              alt="paypal"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="payPal"
                        className="panel-collapse collapse"
                        aria-labelledby="pay"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn dark-2 btm-md full-width"
                              >
                                Pay 500.00 USD
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Pay By Strip */}
                    <div className="panel panel-default">
                      <div className="panel-heading" id="stripes">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            role="button"
                            data-parent="#payaccordion"
                            href="#stripePay"
                            aria-expanded="false"
                            aria-controls="stripePay"
                            className="collapsed"
                          >
                            Stripe
                            <img
                              src="https://themezhub.net/workoo-demo/workoo/assets/img/strip.png"
                              className="img-fluid"
                              alt="strip"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="stripePay"
                        className="collapse"
                        aria-labelledby="stripes"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group text-center">
                                  <button
                                    onClick={() => {}}
                                    className="btn dark-2 full-width"
                                  >
                                    Pay 500 USD
                                  </button>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <input
                                    id="ct-1"
                                    className="checkbox-custom"
                                    name="ct-1"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="ct-1"
                                    className="checkbox-custom-label"
                                  >
                                    By Continuing, you agree to our conditions
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pay By Debit or credtit */}
                    <div className="panel panel-default">
                      <div className="panel-heading" id="dabit">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            role="button"
                            href="#payaccordion"
                            data-target="#debitPay"
                            aria-expanded="false"
                            aria-controls="debitPay"
                            className="collapsed"
                          >
                            Debit Or Credit
                            <img
                              src="https://themezhub.net/workoo-demo/workoo/assets/img/debit.png"
                              className="img-fluid"
                              alt="debit-card"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="debitPay"
                        className="panel-collapse collapse"
                        aria-labelledby="dabit"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form onSubmit={handleUserBilling}>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="cardholderName">
                                    Card Holder Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    id="cardHolderName"
                                    value={debitDetails.cardHolderName}
                                    required
                                    onChange={handleUserDebitPay}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="cardNumber">
                                    Card Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    id="cardNumber"
                                    required
                                    value={debitDetails.cardNumber}
                                    onChange={handleUserDebitPay}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="form-group">
                                  <label htmlFor="expMonth">Expire Month</label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    id="expMonth"
                                    required
                                    value={debitDetails.expMonth}
                                    onChange={handleUserDebitPay}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="form-group">
                                  <label htmlFor="expYear">Expire Year</label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    id="expYear"
                                    required
                                    value={debitDetails.expYear}
                                    onChange={handleUserDebitPay}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="cvv">CVC</label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    id="cvv"
                                    required
                                    value={debitDetails.cvv}
                                    onChange={handleUserDebitPay}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <input
                                    id="ct-2"
                                    className="checkbox-custom"
                                    name="ct-2"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="ct-2"
                                    className="checkbox-custom-label"
                                  >
                                    By Continuing, you ar'e agree to conditions
                                  </label>
                                </div>
                              </div>

                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group text-center">
                                  <button
                                    type="submit"
                                    className="btn dark-2 full-width"
                                  >
                                    Pay 202.00 USD
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* Pay By Debit or credtit */}
                    <div className="panel panel-default">
                      <div className="panel-heading" id="btc">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            role="button"
                            href="#payaccordion"
                            data-target="#bitcoin"
                            aria-expanded="false"
                            aria-controls="debitPay"
                            className="collapsed"
                          >
                            Bitcoin
                            <img
                              src="https://themezhub.net/workoo-demo/workoo/assets/img/debit.png"
                              className="img-fluid"
                              alt=" Bitcoin"
                            />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="bitcoin"
                        className="panel-collapse collapse"
                        aria-labelledby="btc"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form onSubmit={handleBtcProve}>
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group text-center">
                                  <h4>
                                    Make payment with the above btc wallet and
                                    upload Prove
                                  </h4>
                                  <div>
                                    <img
                                      src="/assets/qrcode1.png"
                                      width="300px"
                                      alt="Code"
                                    />
                                    <p>36nxqxLUnYQZ8cNTKVbQFND2Bpi3bHopE3</p>
                                  </div>
                                </div>

                                <div className="form-group ">
                                  <div className="custom-file ">
                                    <label
                                      htmlFor="prove"
                                      className="custom-file-label"
                                    >
                                      Upload Prove
                                    </label>
                                    <input
                                      className="custom-file-input  with-light"
                                      type="file"
                                      required
                                      onChange={(e) =>
                                        setBtcProve(e.target.files[0])
                                      }
                                    />
                                  </div>
                                  <div className="form-group ">
                                    <button
                                      type="submit"
                                      className="btn dark-2 full-width mt-3"
                                      disabled={btnState.disableBtn}
                                    >
                                      {btnState.loading ? (
                                        <>
                                          <Spinner
                                            animation="border"
                                            role="status"
                                            aria-hidden="true"
                                            as="span"
                                            variant="success"
                                            className="mr-2 d-inline-block"
                                          />
                                          <span className="visually-hidden ">
                                            Loading...
                                          </span>
                                        </>
                                      ) : (
                                        'Upload'
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/row */}
              </div>

              {/* Col-lg 4 */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="product-wrap">
                      <h5>Actitation Summary</h5>
                      <ul>
                        <li>
                          <strong>Total</strong>$500
                        </li>
                        <li>
                          <strong>Gateway</strong>$200
                        </li>

                        <li>
                          <strong>Total</strong>$500
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /col-lg-4 */}
            </div>
          </div>
        </section>
        {/* ============================ Main Section End ================================== */}
      </div>
    </>
  )
}

export default Checkout
