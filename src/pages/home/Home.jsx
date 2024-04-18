import React, { useState } from "react";
import "/src/pages/home/Home.scss"
import { HeaderUi } from "../HeaderUi/HeaderUi";
import { CardUi } from "../CardUi/CardUi";
import { StepperUI } from "../StepperUi/StepperUI";
export const Home = () => {
  return (
    <div className="home">
      <CardUi />
      <StepperUI />
    </div>
  )
}

