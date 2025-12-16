<template>
  <div class="form-content">
    <b-row>
      <b-col sm="12" lg="6">
        <default-form></default-form>
        <supported-elements></supported-elements>
      </b-col>
      <b-col sm="12" lg="6">
        <custom-validation></custom-validation>
        <tooltip-form></tooltip-form>
      </b-col>
    </b-row>
  </div>
</template>
<script setup>
import DefaultForm from '@/components/widgets/validation/DefaultForm.vue';
import SupportedElements from '@/components/widgets/validation/SupportedElements.vue';
import CustomValidation from '@/components/widgets/validation/CustomValidation.vue';
import TooltipForm from '@/components/widgets/validation/TooltipsForm.vue';
</script>
