<template>
    <section id="pmpro_order_single" class="pmpro_order_single pmpro_section mt-0">
        <div class="pmpro_card">
            <div class="pmpro_card_actions text-end">
                <button class="pmpro_btn-plain pmpro_btn-print" @click="printInvoice">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-printer">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    {{ $t('streamButtons.print_button') }}
                </button>
            </div>
            <h2 class="pmpro_card_title pmpro_font-x-large d-flex align-items-center justify-content-between flex-wrap">
                {{ $t('streamKeyword.order') }} #{{ order.id }}
                <span class="pmpro_list_item_value pmpro_tag pmpro_tag-success">{{ $t('streamPricing.paid') }}</span>
            </h2>
            <div class="pmpro_card_content">
                <div class="pmpro_spacer"></div>
                <div id="pmpro_order_single-meta">
                    <ul class="pmpro_list pmpro_list-plain pmpro_list-with-labels pmpro_cols-2">
                        <li id="pmpro_order_single-meta-order_date" class="pmpro_list_item">
                            <span class="pmpro_list_item_label">{{ $t('streamProfile.order_date') }}</span>
                            {{ order.date }}
                        </li>
                        <li id="pmpro_order_single-meta-payment_method" class="pmpro_list_item">
                            <span class="pmpro_list_item_label">{{ $t('streamProfile.payment_method_label') }}</span>
                            {{ order.paymentMethod }}
                        </li>
                        <li id="pmpro_order_single-meta-pay_to" class="pmpro_list_item">
                            <span class="pmpro_list_item_label">{{ $t('streamProfile.pay_to_label') }}</span>
                            {{ order.payTo }}
                        </li>
                        <li id="pmpro_order_single-meta-bill_to" class="pmpro_list_item">
                            <span class="pmpro_list_item_label">{{ $t('streamProfile.bill_to_label') }}</span>
                            <span v-html="order.billTo"></span>
                        </li>
                    </ul>
                </div>
                <div class="pmpro_spacer"></div>
                <div id="pmpro_order_single-items">
                    <h3 class="pmpro_font-large">
                        {{ order.amount }} {{ $t('streamProfile.paid_on') }} {{ order.date }}
                    </h3>
                    <div class="table-responsive mb-0">
                        <table class="pmpro_table">
                            <thead>
                                <tr>
                                    <th>{{ $t('streamShop.description') }}</th>
                                    <th>{{ $t('streamProfile.amount') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th data-title="Description">
                                        {{ $t(order.plan) }} {{ $t('streamProfile.for_order') }} #{{ order.id }}
                                        <p>
                                            {{ $t('streamProfile.account') }}: {{ $t(order.account.name) }} ({{
                                            order.account.email }})
                                        </p>
                                    </th>
                                    <td data-title="Amount">
                                        {{ order.amount }}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>{{ $t('streamKeyword.total') }}</td>
                                    <td data-title="Total">
                                        {{ order.amount }}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="pmpro_actions_nav">
        <span class="pmpro_actions_nav-right">
            <nuxt-link
                :to="{ name: 'profile-membership-account' }">{{ $t('streamProfile.nav_view_membership_account') }}</nuxt-link>
        </span>
        <span class="pmpro_actions_nav-left">
            <nuxt-link :to="{ name: 'profile-membership-orders' }">{{ $t('streamProfile.view_all_orders') }}</nuxt-link>
        </span>
    </div>
</template>

<script setup>
const order = {
    id: '51311C6265',
    date: 'February 18, 2025',
    paymentMethod: 'Visa ending in 1111',
    payTo: 'Streamit',
    billTo: `PO Box 16122<br>Collins Street West<br>Victoria 8007<br>US<br>(123) 456-7899`,
    amount: '$10.00',
    plan: 'streamPricing.basic_plan',
    account: {
        name: 'streamShop.greeting_name',
        email: 'marvin@demo.com'
    }
};

function printInvoice() {
    window.print();
}
</script>