"use client"

import React from "react";
import { Container } from "react-bootstrap";
import BreadCrumbWidget from "../../../components/BreadcrumbWidget";
import MembershipInvoice_Card from "@/components/cards/membershipInvoice_card";
import { useBreadcrumb } from "@/utilities/usePage";

const Membership_Invoice = () => {
  useBreadcrumb("Membership order")
  return (
    <>
    {/* <BreadCrumbWidget title={"Membership order"} /> */}
    <section className="section-padding">
    <Container className="pmpro">
      <MembershipInvoice_Card />
    </Container>
    </section>
    </>
  );
};

export default Membership_Invoice;
