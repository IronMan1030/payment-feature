import React from "react";
import { Container, Grid } from "@material-ui/core";
import { FiCalendar } from "react-icons/fi";
import { getDateString, getTimeString } from "./Utils";

import CheckoutForm from "./CheckoutForm";
function PricePreview() {
  return (
    <div>
      <Container maxWidth="md" style={{ marginBottom: 10 }}>
        <Grid
          container
          justify="center"
          spacing={4}
          style={{ background: "var(--colorWhite)" }}
        >
          <Grid
            item
            sm={6}
            xs={12}
            style={{ boxShadow: "5px 0 5px -5px gray" }}
          >
            <div className="preview">
              <div className="preview-location">
                <img className="icon" src="../images/pin-up.png" alt="icon" />
                <div className="info">
                  <div className="label">Pickup address:</div>
                  <div className="address">
                    {/* {pickup ? pickup.address : "Not selected"} */}
                  </div>
                </div>
              </div>
              <div className="preview-location">
                <img className="icon" src="../images/pin-down.png" alt="icon" />
                <div className="info">
                  <div className="label">Destination:</div>
                  <div className="address">
                    {/* {destination ? destination.address : "Not selected"} */}
                  </div>
                </div>
              </div>
              <div className="preview-time-price">
                <div className="label">
                  <FiCalendar className="icon" />
                  <div className="text">Start time:</div>
                </div>
                <div className="info">
                  <div className="date">
                    {/* {bookData.selectedDate
                      ? getDateString(bookData.selectedDate.date)
                      : "Not selected"} */}
                  </div>
                  <div className="time">
                    {/* {bookData.selectedDate
                      ? `Arrive between ${getTimeString(
                          bookData.selectedDate.time.from
                        )} - ${getTimeString(bookData.selectedDate.time.to)}`
                      : "Not selected"} */}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <CheckoutForm bookData={""} price="25" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PricePreview;
