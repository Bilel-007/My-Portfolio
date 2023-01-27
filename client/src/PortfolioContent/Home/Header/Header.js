import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/communUtils";
import Scroll from "../../../utilities/Scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScrenn, setselectedScrenn] = useState(0);
  const [showHeaderOptions,setshowHeaderOptions] = useState(false);

  const updateCurrentScrenn = () => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let ScreenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
    if (ScreenIndex < 0) return
  }

  let currentScreenSubscription = Scroll.currentScreenBroadcaster.subscribe(updateCurrentScrenn);

  return <div>Header</div>;
}
