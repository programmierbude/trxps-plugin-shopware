import template from './sw-customer-base-info.html.twig';

const { Component } = Shopware;

Component.override('sw-customer-base-info', {
    template,

    computed: {
        preferredIdealIssuer() {
            if (
                !!this.customer
                && !!this.customer.customFields
                && !!this.customer.customFields.trxps_payments
                && !!this.customer.customFields.trxps_payments.preferred_ideal_issuer
            ) {
                return this.customer.customFields.trxps_payments.preferred_ideal_issuer;
            }

            return null;
        }
    }
});