"use client"

import MembershipInvoice_Card from "@/components/cards/membershipInvoice_card";
import { useBreadcrumb } from "@/utilities/usePage";
import React from "react";
import { Container } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";

const Membership_Conformation = () => {
    const { t } = useTranslation("common");
    useBreadcrumb("streamProfile.label_membership_confirmation")
  return (
    <>
      <section className="section-padding">
        <Container className="pmpro">
          <section id="pmpro_confirmation-2" className="pmpro_section">
            <p>
             {t("streamProfile.membership_thank_you")}
            </p>
            <p>
              {t("streamProfile.membership_order_info")} marvin@demo.com.
            </p>
          </section>
          <MembershipInvoice_Card />
        </Container>
      </section>
    </>
  );
};

export default Membership_Conformation;
