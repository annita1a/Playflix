<template>
  <tr data-item="list">
                                <td>
                                    <button
                                        class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0" @click="deleteSwal()">
                                        <span class="btn-inner">
                                            <i class="ph ph-x fw-bold text-primary"></i>
                                        </span>
                                    </button>
                                </td>
                                <td>
                                    <div class="product-thumbnail d-flex align-items-center gap-3">
                                        <a class="d-block" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                                            <img
class="avatar-80" src="/assets/images/shop/product/08.webp"
                                                alt="img">
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="product-name">{{$t('streamShop.product8')}}</router-link>
                                </td>
                                <td>
                                    <span class="fw-medium">$15.00</span>
                                </td>
                                <td>
                                    <div
class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn"
                                        role="group">
                                        <button
type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0" @click="newValue -= 1">
                                            <i class="ph ph-minus fw-bold"></i>
                                        </button>
                                        {{ '' }}
                                        <input
v-model="newValue" type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
                                            pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2"
                                            title="Qty" @click="newValue += 1">
                                            {{ '' }}
                                        <button
type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                            <i class="ph ph-plus fw-bold"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="fw-medium">$123.00</span>
                                </td>
                            </tr>
                            <tr data-item="list">
                                <td>
                                    <button
                                        class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0" @click="deleteSwal()">
                                        <span class="btn-inner">
                                            <i class="ph ph-x fw-bold text-primary"></i>
                                        </span>
                                    </button>

                                </td>
                                <td>
                                    <div class="product-thumbnail d-flex align-items-center gap-3">
                                        <a class="d-block" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                                            <img
class="avatar-80" src="/assets/images/shop/product/09.webp"
                                                alt="img">
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="product-name">{{$t('streamShop.product9')}}</router-link>
                                </td>
                                <td>
                                    <span class="fw-medium">$92.00</span>
                                </td>
                                <td>
                                    <div
class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn"
                                        role="group">
                                        <button
type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0" @click="newValue -= 1">
                                            <i class="ph ph-minus fw-bold"></i>
                                        </button>
                                        {{ '' }}
                                        <input
v-model="newValue" type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
                                            pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2"
                                            title="Qty" @click="newValue += 1">
                                            {{ '' }}
                                        <button
type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                            <i class="ph ph-plus fw-bold"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="fw-medium">$92.00</span>
                                </td>

                            </tr>
                            <tr data-item="list">
                                <td>
                                    <button
                                        class="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0" @click="deleteSwal()">
                                        <span class="btn-inner">
                                            <i class="ph ph-x fw-bold text-primary"></i>
                                        </span>
                                    </button>

                                </td>
                                <td>
                                    <div class="product-thumbnail d-flex align-items-center gap-3">
                                        <a class="d-block" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                                            <img
class="avatar-80" src="/assets/images/shop/product/10.webp"
                                                alt="img">
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="product-name">{{$t('streamShop.product10')}}</router-link>
                                </td>
                                <td>
                                    <span class="fw-medium">$90.00</span>
                                </td>
                                <td>
                                    <div
class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn"
                                        role="group">
                                        <button
type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0" @click="newValue -= 1">
                                            <i class="ph ph-minus fw-bold"></i>
                                        </button>
                                        {{ '' }}
                                        <input
v-model="newValue" type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
                                            pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2"
                                            title="Qty" @click="newValue += 1">
                                            {{ '' }}
                                        <button
type="button"
                                            class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                            <i class="ph ph-plus fw-bold"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="fw-medium">$90.00</span>
                                </td>

                            </tr>
</template>
<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import Swal from 'sweetalert2';
const props = defineProps({
  slug: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  modelValue: { type: Number, default: 2 },
});

const emit = defineEmits(['update:modelValue']);

const newValue = ref(props.modelValue);

watch(newValue, () => {
  emit('update:modelValue', newValue.value);
});
const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    background: 'var(--bs-gray-900)',
    color: 'var(--bs-white)',
    backdrop: 'rgba(60,60,60,0.8)',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your item has been deleted.',
        icon: 'success',
        background: 'var(--bs-gray-900)',
        color: 'var(--bs-white)',
        backdrop: 'rgba(60,60,60,0.8)',
      }); 
    }
  });
};
</script>
