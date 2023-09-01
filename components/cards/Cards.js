import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Container
      className="properties-container"
      sx={{ padding: "20px 0px", textAlign: "left" }}
    >
        <div>
      <Card

        sx={{
          maxWidth: 440,
          padding: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          sx={{ height: "auto", width: "100%", borderRadius: "30px" }}
          component="img"
          image="./card1.png"
          alt="green iguana"
        />
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LocationOnOutlinedIcon
              sx={{ color: "#9c9c9c", fontSize: "20px" }}
            />
            <Typography gutterBottom variant="h6" component="div">
              Dubai
            </Typography>
          </div>
          <div className="latest-market-div"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: "180px", marginRight: "20px" }}
              >
                <p>Latest Market Value :</p>
                <ArrowDropUpIcon sx={{ color: "green" }} />
                <h2 style={{ margin: "0px", color: "#165C7C" }}>AED 980 000</h2>
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: "200px" }}>
                <p> Fractions price :</p>
                <p
                  style={{
                    margin: "5px 0px",
                    color: "#165C7C",
                    fontWeight: "700",
                  }}
                >
                  110 USD
                </p>
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <hr
                style={{
                  height: "150px",
                  width: "1px",
                  backgroundColor: "#9c9c9c",
                  border: "none",
                }}
              />
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxWidth: "200px",
                fontSize: "16px",
                margin: "0px 20px",
                flexShrink: 0,
              }}
            >
              <p>Available Fractions :</p>
              <p
                style={{
                  margin: "10px 0px",
                  color: "#165C7C",
                  fontWeight: "700",
                }}
              >
                50
              </p>
            </Typography>
          </div>
          <hr
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#9c9c9c",
              margin: "5px 0px",
              border: "none",
            }}
          />
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "10px 0px",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "grid", gap: "5px" }}>
            <p>
              <b>41%</b>
            </p>
            <p>
              <b>21%</b> Property Value
            </p>
            <p>
              <b>20%</b> Yield (rent)
            </p>
          </div>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "right",
              flexShrink: 0,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#1A4A60",
                color: "#ffff",
                width: "140px",
                height: "40px",
                borderRadius: "9px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Buy &nbsp;
              <KeyboardArrowDownIcon />
            </Button>
          </CardActions>
        </div>
      </Card>
      </div>
      <div>
      <Card
        sx={{
          maxWidth: 440,
          padding: "20px",
          marginRight: "20px",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          sx={{ height: "auto", width: "100%", borderRadius: "30px" }}
          component="img"
          image="./card1.png"
          alt="green iguana"
        />
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LocationOnOutlinedIcon
              sx={{ color: "#9c9c9c", fontSize: "20px" }}
            />
            <Typography gutterBottom variant="h6" component="div">
              Dubai
            </Typography>
          </div>
          <div className="latest-market-div"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: "180px", marginRight: "20px" }}
              >
                <p>Latest Market Value :</p>
                <ArrowDropUpIcon sx={{ color: "green" }} />
                <h2 style={{ margin: "0px", color: "#165C7C" }}>AED 980 000</h2>
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: "200px" }}>
                <p> Fractions price :</p>
                <p
                  style={{
                    margin: "5px 0px",
                    color: "#165C7C",
                    fontWeight: "700",
                  }}
                >
                  110 USD
                </p>
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <hr
                style={{
                  height: "150px",
                  width: "1px",
                  backgroundColor: "#9c9c9c",
                  border: "none",
                }}
              />
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxWidth: "200px",
                fontSize: "16px",
                margin: "0px 20px",
                flexShrink: 0,
              }}
            >
              <p>Available Fractions :</p>
              <p
                style={{
                  margin: "10px 0px",
                  color: "#165C7C",
                  fontWeight: "700",
                }}
              >
                50
              </p>
            </Typography>
          </div>
          <hr
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#9c9c9c",
              margin: "5px 0px",
              border: "none",
            }}
          />
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "10px 0px",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "grid", gap: "5px" }}>
            <p>
              <b>41%</b>
            </p>
            <p>
              <b>21%</b> Property Value
            </p>
            <p>
              <b>20%</b> Yield (rent)
            </p>
          </div>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "right",
              flexShrink: 0,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#1A4A60",
                color: "#ffff",
                width: "140px",
                height: "40px",
                borderRadius: "9px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Buy &nbsp;
              <KeyboardArrowDownIcon />
            </Button>
          </CardActions>
        </div>
      </Card>
      </div>
      
    </Container>
  );
}
