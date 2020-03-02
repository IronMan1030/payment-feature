import React, { Component } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { PayPalButton } from "react-paypal-button-v2";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      payment: null,
      failedCount: 0
    };

    this.onCloseDialog = this.onCloseDialog.bind(this);
  }

  componentDidMount() {}
  onCloseDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  onSuccess = response => {
    console.log("Successful payment!", response);
    this.setState({
      payment: response,
      dialogOpen: true
    });
    this.sendToServer();
  };

  onError = error => {
    // console.log("Erroneous payment OR failed to load script!", error);
    alert("Erroneous payment OR failed to load script!");
  };

  onCancel = data => {
    // console.log("Cancelled payment!", data);
    alert("Cancelled payment!");
  };

  render() {
    const { price } = this.props;
    const { dialogOpen, payment } = this.state;
    const paypalOptions = {
      clientId:
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX
          : process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
      currency: "USD"
    };

    return (
      <div>
        <div className="checkout">
          <div className="price">
            <div className="label">Price:</div>
            <div className="value">${price}</div>
          </div>
          <div style={{ marginTop: 20 }}>
            <PayPalButton
              options={paypalOptions}
              amount={price}
              onSuccess={this.onSuccess}
              onCancel={this.onCancel}
              onError={this.onError}
            />
          </div>
        </div>
        <Dialog
          open={dialogOpen}
          onClose={this.onCloseDialog}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>{"Booking confirmed"}</DialogTitle>
          <DialogContent>
            {payment ? (
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    marginBottom: 10,
                    color: "var(--colorMain)",
                    fontSize: 22,
                    fontWeight: 600
                  }}
                >
                  Price : ${price}
                </div>
                <div>
                  Created at: {new Date(payment.create_time).toDateString()}
                </div>
                <div>
                  Name:{" "}
                  {`${payment.payer.name.given_name} ${payment.payer.name.surname}`}
                </div>
                <div>Email: {payment.payer.email_address}</div>
              </div>
            ) : (
              <div />
            )}
            <Button onClick={this.onCloseDialog} color="primary">
              OK
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default CheckoutForm;
