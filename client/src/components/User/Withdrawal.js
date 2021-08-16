import React, { useState } from 'react'

import * as Icons from 'react-bootstrap-icons'
import {
  Alert,
  Breadcrumb,
  Button,
  ButtonGroup,
  Modal,
  Spinner,
} from 'react-bootstrap'
import axios from 'axios'

function Withdrawal() {
  ///states
  const [openAlert, setOpenAlert] = useState({
    success: false,
    error: false,
    warning: true,
  })
  const [paypalW, setPaypalW] = useState({
    email: '',
    amount: '',
    wallet: 'Default',
    type: 'Paypal',
  })
  const [btcW, setBtcW] = useState({
    wallet: '',
    amount: '',
    email: 'Default',
    type: 'Bitcoins',
  })
  const [litcoinW, setLitcoinW] = useState({
    wallet: '',
    amount: '',
    type: 'Litcoins',
    email: 'Default',
  })
  const [etheW, setEtheW] = useState({
    wallet: '',
    amount: '',
    email: 'Default',
    type: 'Etherium',
  })

  const [fullData, setFullData] = useState({
    data: { amount: '0000', type: 'All', email: 'Default', wallet: '12345' },
    open: false,
    message: '',
  })

  const [btnState, setBtnState] = useState({
    withdrawBtnDontShow: false,
    finalBtnDontShow: true,
    loading: false,
  })

  //handlers

  const handleSubmit = () => {
    if (fullData.data === null) return

    setBtnState({
      ...setBtnState,
      loading: true,
      withdrawBtnDontShow: true,
      finalBtnDontShow: true,
    })

    axios
      .post(
        `${process.env.REACT_APP_API_REQUEST_URL}/api/transactions/withdrawals`,
        fullData.data,
      )
      .then((res) => {
        setBtnState({ ...btnState, loading: false })
        setFullData({ ...fullData, message: res.data })
        setOpenAlert({ ...openAlert, success: true })
      })
      .catch((error) => {
        setBtnState({ ...btnState, loading: false })
        setFullData({ ...fullData, message: error.response.data.message })
        setOpenAlert({ ...openAlert, success: true })
      })
  }

  const handlePaypal = (e) => {
    e.preventDefault()

    setFullData({ ...fullData, data: paypalW, open: true })
    setPaypalW({ ...paypalW, email: '', amount: '' })
  }
  const handleBitcoins = (e) => {
    e.preventDefault()
    setFullData({ ...fullData, data: btcW, open: true })
    setBtcW({ ...btcW, amount: '', wallet: '' })
  }
  const handleEtherium = (e) => {
    e.preventDefault()
    setFullData({ ...fullData, data: etheW, open: true })
    setEtheW({ ...etheW, amount: '', wallet: '' })
  }
  const handleLitcoins = (e) => {
    e.preventDefault()
    setFullData({ ...fullData, data: litcoinW, open: true })
    setLitcoinW({ ...litcoinW, amount: '', wallet: '' })
  }

  const handleBtnStates = () => {
    setFullData({ ...fullData, open: !fullData.open })
    setBtnState({
      ...btnState,
      withdrawBtnDontShow: !btnState.withdrawDontBtnShow,
      finalBtnDontShow: !btnState.finalBtnDontShow,
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
                <h2 className="ipt-title">Withdrawal Page</h2>
                <span className="ipn-subtitle">Instant Withdrawals</span>
              </div>
            </div>
            <Breadcrumb>
              <Breadcrumb.Item href="/user/dashboard">
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/user/joblist">Works</Breadcrumb.Item>
              <Breadcrumb.Item active>Withdrawal</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* ============================ Page Title End ================================== */}

        {/* ============================ Main Section Start ================================== */}
        <section className="gray-light min-sec">
          <Modal
            size="lg"
            centered
            aria-describedby="info"
            show={fullData.open}
            onHide={() => setFullData({ ...fullData, open: !fullData.open })}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-warning" id="info">
                Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Confirm Withdrawal</h4>
              <p>
                Are you sure you want to withdraw $
                {fullData.data.amount && fullData.data.amount}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <ButtonGroup>
                <Button
                  className="bg-danger border-0"
                  onClick={() =>
                    setFullData({ ...fullData, open: !fullData.open })
                  }
                >
                  Cancel
                </Button>
                <Button
                  className="bg-success ml-3 border-0"
                  onClick={handleBtnStates}
                >
                  Confirm
                </Button>
              </ButtonGroup>
            </Modal.Footer>
          </Modal>
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
                  {fullData.message}
                </Alert>
                <Alert
                  as="h4"
                  variant="danger"
                  dismissible
                  show={openAlert.error}
                  onClose={() => setOpenAlert({ ...openAlert, error: false })}
                >
                  {fullData.message}
                </Alert>
                <Alert
                  as="h4"
                  variant="danger"
                  dismissible
                  show={openAlert.warning}
                  onClose={() => setOpenAlert({ ...openAlert, warning: false })}
                >
                  Beware Withdrawal cannot be canceled
                </Alert>
                <div className="row m-0">
                  <div className="panel-group pay_opy980" id="payaccordion">
                    {/* Pay By Paypal */}
                    <div className="panel panel-default">
                      <div className="panel-heading" id="pay">
                        <a
                          data-toggle="collapse"
                          role="button"
                          data-parent="#payaccordion"
                          href="#payPal"
                          aria-expanded="false"
                          aria-controls="payPal"
                          className="collapsed"
                        >
                          <h4 className="panel-title">
                            PayPal
                            <Icons.CurrencyBitcoin
                              size="24px"
                              style={{
                                position: 'absolute',
                                right: '15',
                              }}
                            />
                          </h4>
                        </a>
                      </div>
                      <div
                        id="payPal"
                        className="panel-collapse collapse"
                        aria-labelledby="pay"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form onSubmit={handlePaypal}>
                            <div className="form-row">
                              <div className="form-group col-sm-12 col-md-12 col-lg-6 ">
                                <label className="active" htmlFor="email">
                                  PayPal Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="form-control  with-light"
                                  placeholder="paypal@gmail.com"
                                  required
                                  value={paypalW.email}
                                  onChange={(e) =>
                                    setPaypalW({
                                      ...paypalW,
                                      email: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                <label className="active">Amount</label>
                                <input
                                  type="text"
                                  className="form-control  with-light"
                                  placeholder="$0000"
                                  required
                                  value={paypalW.amount}
                                  onChange={(e) =>
                                    setPaypalW({
                                      ...paypalW,
                                      amount: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="
                                       
                                     btn dark-2 btm-md full-width"
                                disabled={btnState.withdrawBtnDontShow}
                              >
                                Withdraw
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Pay By Strip */}
                    <div className="panel panel-default">
                      <div className="panel-heading" id="btc">
                        <a
                          data-toggle="collapse"
                          role="button"
                          data-parent="#payaccordion"
                          href="#btcwith"
                          aria-expanded="false"
                          aria-controls="stripePay"
                          className="collapsed"
                        >
                          <h4 className="panel-title">
                            Bitcoin
                            <Icons.CurrencyBitcoin
                              size="24px"
                              style={{
                                position: 'absolute',
                                right: '15',
                              }}
                            />
                          </h4>
                        </a>
                      </div>
                      <div
                        id="btcwith"
                        className="collapse"
                        aria-labelledby="btc"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form onSubmit={handleBitcoins}>
                            <div className="form-row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="wallet">Wallet Address</label>
                                  <input
                                    type="text"
                                    id="wallet"
                                    className="form-control with-light"
                                    value={btcW.wallet}
                                    onChange={(e) =>
                                      setBtcW({
                                        ...btcW,
                                        wallet: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="amount">Amount</label>
                                  <input
                                    type="text"
                                    id="amount"
                                    className="form-control with-light"
                                    required
                                    value={btcW.amount}
                                    onChange={(e) =>
                                      setBtcW({
                                        ...btcW,
                                        amount: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group text-center">
                                  <button
                                    type="submit"
                                    className="
                                       
                                     btn dark-2 btm-md full-width"
                                    disabled={btnState.withdrawBtnDontShow}
                                  >
                                    Withdraw
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" id="ethe">
                        <a
                          data-toggle="collapse"
                          role="button"
                          data-parent="#payaccordion"
                          href="#ethewith"
                          aria-expanded="false"
                          aria-controls="stripePay"
                          className="collapsed"
                        >
                          <h4 className="panel-title ">
                            Etherium
                            <Icons.CurrencyBitcoin
                              size="24px"
                              style={{
                                position: 'absolute',
                                right: '15',
                              }}
                            />
                          </h4>
                        </a>
                      </div>
                      <div
                        id="ethewith"
                        className="collapse"
                        aria-labelledby="ethe"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form onSubmit={handleEtherium}>
                            <div className="form-row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="wallet">Wallet Address</label>
                                  <input
                                    type="text"
                                    id="wallet"
                                    className="form-control with-light"
                                    required
                                    value={etheW.wallet}
                                    onChange={(e) =>
                                      setEtheW({
                                        ...etheW,
                                        wallet: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="amount">Amount</label>
                                  <input
                                    type="text"
                                    id="amount"
                                    className="form-control with-light"
                                    required
                                    value={etheW.amount}
                                    onChange={(e) =>
                                      setEtheW({
                                        ...etheW,
                                        amount: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group text-center">
                                  <button
                                    type="submit"
                                    className="
                                       
                                     btn dark-2 btm-md full-width"
                                    disabled={btnState.withdrawBtnDontShow}
                                  >
                                    Withdraw
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" id="lit">
                        <a
                          data-toggle="collapse"
                          role="button"
                          data-parent="#payaccordion"
                          href="#litwith"
                          aria-expanded="false"
                          aria-controls="stripePay"
                          className="collapsed "
                        >
                          <h4 className="panel-title">
                            Litcoin
                            <Icons.CurrencyBitcoin
                              size="24px"
                              style={{
                                position: 'absolute',
                                right: '15',
                              }}
                            />
                          </h4>
                        </a>
                      </div>
                      <div
                        id="litwith"
                        className="collapse"
                        aria-labelledby="lit"
                        data-parent="#payaccordion"
                      >
                        <div className="panel-body">
                          <form onSubmit={handleLitcoins}>
                            <div className="form-row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="wallet">Wallet Address</label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    required
                                    id="wallet"
                                    value={litcoinW.wallet}
                                    onChange={(e) =>
                                      setLitcoinW({
                                        ...litcoinW,
                                        wallet: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="amount">Amount</label>
                                  <input
                                    type="text"
                                    id="amount"
                                    className="form-control with-light"
                                    required
                                    value={litcoinW.amount}
                                    onChange={(e) =>
                                      setLitcoinW({
                                        ...litcoinW,
                                        amount: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group text-center">
                                  <button
                                    type="submit"
                                    className="
                                       
                                     btn dark-2 btm-md full-width"
                                    disabled={btnState.withdrawBtnDontShow}
                                  >
                                    Withdraw
                                  </button>
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
                      <h5>Summary</h5>
                      <ul>
                        <li>
                          <strong>Total</strong>$
                          {fullData.data.amount && fullData.data.amount}
                        </li>
                        <li>
                          <strong>Subtotal</strong>$
                          {fullData.data.amount && fullData.data.amount}
                        </li>
                        <li>
                          <strong>Withdrawal Method</strong>
                          {fullData.data.type && fullData.data.type}
                        </li>
                        <li>
                          <strong>Withdrawal Email</strong>
                          {fullData.data.email && fullData.data.email}
                        </li>
                        <li>
                          <strong>Withdrawal Wallet</strong>
                          {fullData.data.wallet && fullData.data.wallet}
                        </li>
                        <li>
                          <strong>Total</strong>$
                          {fullData.data.amount && fullData.data.amount}
                        </li>
                      </ul>
                      <div className="form-group text-center mt-4">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="
                             
                          btn dark-2 btm-md full-width"
                          disabled={btnState.finalBtnDontShow}
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
                            'Proceed'
                          )}
                        </button>
                      </div>
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

export default Withdrawal
