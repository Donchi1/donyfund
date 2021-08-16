import React from 'react'
import ReactDOM from 'react-dom'

const paypal = 'i am paypal'
const PayPalButton = paypal.Buttons.driver('react', React, ReactDOM)

function PaypalPay() {
  const creactOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '500',
          },
        },
      ],
    })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture()
  }

  return (
    <PayPalButton
      creactOrder={(data, actions) => creactOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  )
}

export default PaypalPay
