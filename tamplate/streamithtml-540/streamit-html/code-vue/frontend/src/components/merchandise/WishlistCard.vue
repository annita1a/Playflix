<template>
  <tr data-item="list">
    <td class="product-remove">
      <router-link to="#" class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0" @click="deleteSwal()">
        <span class="btn-inner"><i class="ph ph-x fw-bold text-primary"></i></span>
      </router-link>
    </td>
    <td class="product-img">
      <div class="product-thumbnail">
        <router-link class="mb-2 me-3" :to="{ name: 'landing-page.merchandise.shop.detail' }">
          <img :src="props.thumbnail" class="avatar-80" loading="lazy" />
        </router-link>
      </div>
    </td>
    <td>
      <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="product-name">{{ $t(props.productName) }}</router-link>
    </td>
    <td>
      <span class="fw-medium">{{ props.price }}</span>
      {{ props.finalPrice }}
    </td>

    <td>
      <span>{{ $t(props.stockStatus) }}</span>
    </td>
    <td class="text-center">
      <router-link :to="{ name: 'landing-page.cart' }" class="btn btn-link p-0">{{$t('streamButtons.add_to_cart')}}</router-link>
    </td>
  </tr>
</template>
<script setup>
import Swal from 'sweetalert2';
const props = defineProps({
  thumbnail: { type: String, default: '' },
  slug: { type: String, default: '' },
  productName: { type: String, default: '' },
  price: { type: String, default: '' },
  stockStatus: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
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
