import React from "react";
import "./earnings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faCar,
  faFolderOpen,
  faHandHoldingDollar,
  faMoneyBillTransfer,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

const Earnings = () => {
  return (
    <section id="earn">
      <h1 id="earnings_topic">Earnings</h1>
      <div id="earnings_perks_container">
        <article id="earnings_perk_01">
          <div id="earning_perk_icon">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
          </div>
          <div id="perk_desc">
            We have an amazing commission rate of 15% on every ride made.
          </div>
        </article>

        <article id="earnings_perk_02">
          <div id="earning_perk_icon">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
          </div>
          <div id="perk_desc">
            With cash, you get paid immediately after you complete a trip. The
            app will show the amount to collect from your customer and calculate
            the fees that you owe to Bakkiego
          </div>
        </article>

        <article id="earnings_perk_03">
          <div id="earning_perk_icon">
            <FontAwesomeIcon icon={faPiggyBank} />
          </div>
          <div id="perk_desc">
            It’s easy to get paid. All you need is a bank account. Your earnings
            are deposited every week
          </div>
        </article>
      </div>
      <h3 id="requirment_topic">Requirements</h3>
      <div id="requirements_container" className="features-container">

        <div id="requirment_01" className="feature-item">
          <div id="reqirmemt_icon" className="feat-icon">
            <FontAwesomeIcon icon={faCar} />
          </div>

          <div id="requirment_desc" className="feat-desc">
            We ensure all Bakkies vehicles and Drivers are vetted and compliant
            with safety rules. Our Solution guarantees delivery for every trip
            with our delivery confirmation code before any driver completes his
            trip
          </div>
        </div>

        <FontAwesomeIcon icon={faArrowRightArrowLeft} id="requirement_sys_icon"/>

        <div id="requirment_02" className="feature-item"> 
          <div id="reqirmemt_icon" className="feat-icon">
            <FontAwesomeIcon icon={faFolderOpen}  />
          </div>

          <div id="requirment_desc" className="feat-desc">
            We ensure all Bakkies vehicles and Drivers are vetted and compliant
            with safety rules. Our Solution guarantees delivery for every trip
            with our delivery confirmation code before any driver completes his
            trip
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
