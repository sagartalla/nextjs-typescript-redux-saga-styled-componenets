import React from "react";
import styled from "styled-components";
import { Box } from "@acko-ui-kit/common";
import Banner from "./banner";
import SpecialOffers from "./special-offers";
import Covers from "./covers";
import AdditionalCovers from "./additional-covers";
import CoverWidget from "./CoverWidget";
import BuyNow from "./buy-now";

const CustomBox = styled(Box)`
  position: relative;
  top: -10px;
`;

const Details = () => (
  <>
    <Banner
      color="0"
      planName="Comprehensive"
      image=""
      tagType="Standard Plan"
      subHeading="80% Acko users prefer this plan"
      superTag="TOP SELLER"
      prices={{
        lowest: "342000",
        recomended: "412000",
        custom: {
          min: "",
          max: "",
          current: "",
          breakPoint: ""
        }
      }}
    />
    <CustomBox>
      <SpecialOffers
        offers={[
          {
            displayText: "Consumables",
            tag: "Included",
            description:
              "Don’t pay for nuts and bolts during claims. Save approx ₹700",
            image: ""
          }
        ]}
      />
      <Covers
        covers={[
          "Accident/Fire",
          "Calamities",
          "Third Party Damages",
          "Theft/Total damage"
        ]}
      />
      <AdditionalCovers
        additionalCovers={[
          {
            title: "Zero Depreciation",
            image: "",
            exclusive: true,
            covers: [
              {
                coverName: "Standard_Zero_Dep",
                price: "3500",
                displayText: "Standard Zero Dep",
                description:
                  "Covers depreciation cost of car parts. Standard deduction of  ₹1,000",
                selected: false,
                tag: "Smart Saver"
              },
              {
                coverName: "Zero_Dep",
                price: "2100",
                displayText: "Zero Dep",
                description:
                  "Covers depreciation cost of car parts. You agree to pay ₹5,000 extra at the time of claims ",
                selected: false,
                tag: "Smart Saver"
              }
            ]
          },
          {
            title: "Engine Protect",
            image: "",
            exclusive: true,
            covers: [
              {
                coverName: "Engine_protect",
                price: "2100",
                displayText: "Engine Protect",
                description:
                  "Covers damages caused to car Covers damages caused to car",
                selected: false,
                tag: "Smart Saver"
              }
            ]
          }
        ]}
      />
      <CoverWidget
        items={[
          { displayText: "Accidents", image: "" },
          { displayText: "Fire", image: "" },
          { displayText: "Car Owner Cover (If opted)", image: "" },
          { displayText: "Calamities", image: "" }
        ]}
        title="What’s Covered"
      />
      <CoverWidget
        items={[
          { displayText: "Accidents", image: "" },
          { displayText: "Fire", image: "" },
          { displayText: "Car Owner Cover (If opted)", image: "" },
          { displayText: "Calamities", image: "" }
        ]}
        title="What’s Not Covered"
      />
      <BuyNow originalPrice="8100.00" discountedPrice="6915.00" gst="18" />
    </CustomBox>
  </>
);

export default Details;
