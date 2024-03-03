import { FormControlLabel, Radio, TextField } from "@mui/material";

const PaymentDetails = () => {
  return (
    <div style={{
      width: "70%",
      padding: "4rem",
      margin: "4rem 0",
      backgroundColor: "white",
    }}
    >
      <h1 style={{
        fontSize: "32px",
        fontWeight: 700,
        letterSpacing: 1.5,
        marginBottom: "40px",
        textTransform: "uppercase",
      }}
      >
        Checkout
      </h1>
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#d87d4a",
          marginBottom: "16px",
          textTransform: "uppercase",
        }}
        >
          Billing Details
        </h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        >
          <div style={{ display: "flex", gap: "15px", justifyContent: "space-between" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              placeholder="Alexei Ward"
              sx={{ width: "20rem", marginBottom: "1.5rem" }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              placeholder="alexi@mail.com"
              sx={{ width: "20rem" }}
            />
          </div>
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            placeholder="+1 202-555-0136"
            sx={{ width: "20rem" }}
          />
        </div>
      </div>
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{
          color: "#d87d4a",
          fontWeight: 500,
          fontSize: "1.25rem",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
        }}
        >
          Shipping Info
        </h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        >
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="123 Main Street"
            sx={{ width: "100%", marginBottom: "1.5rem" }}
          />
          <div style={{ display: "flex", gap: "15px", justifyContent: "space-between" }}>
            <TextField
              id="zipcode"
              label="Zip Code"
              variant="outlined"
              placeholder="11001"
              sx={{ width: "20rem", marginBottom: "1.5rem" }}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              placeholder="New York"
              sx={{ width: "20rem" }}
            />
          </div>
        </div>
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          placeholder="Country"
          sx={{ width: "20rem" }}
        />
      </div>
      <div>
        <h2 style={{
          textTransform: "uppercase",
          fontSize: "1.25rem",
          color: "#d87d4a",
          fontWeight: 500,
          marginBottom: "1.5rem",
        }}
        >
          Payment Details
        </h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        >
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          >
            <span>Payment Method</span>
            <div style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
            >
              <div style={{
                padding: "1rem 2rem",
                border: "1px solid lightgrey",
                marginBottom: "1rem",
              }}
              >
                <FormControlLabel
                  value="e-money"
                  name="radio"
                  control={<Radio />}
                  label="e-Money"
                />
              </div>
              <div style={{
                padding: "1rem 2rem",
                border: "1px solid lightgrey",
              }}
              >
                <FormControlLabel
                  value="cash-on-delivery"
                  control={<Radio />}
                  name="radio"
                  label="Cash on Delivery"
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="e-money-number"
              label="e-Money Number"
              variant="outlined"
              placeholder="238590288"
              sx={{ width: "20rem", marginBottom: "1.5rem" }}
            />
            <TextField
              id="e-money-pin"
              label="e-Money Pin"
              variant="outlined"
              placeholder="6891"
              sx={{ width: "20rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;