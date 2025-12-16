<template>
    <section class="section-padding">
        <b-container class="pmpro">
            <section id="pmpro_confirmation-2" class="pmpro_section">
                <p>{{$t('streamProfile.membership_thank_you')}}</p>
                <p>{{$t('streamProfile.membership_order_info')}}</p>
            </section>
            <MembershipInvoiceCard />
        </b-container>
    </section>
</template>
<script setup>
import MembershipInvoiceCard from '../../components/widgets/MembershipInvoiceCard.vue';
</script>