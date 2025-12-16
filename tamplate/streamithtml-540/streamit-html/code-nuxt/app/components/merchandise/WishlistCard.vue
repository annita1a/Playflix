<template>
  <tr data-item="list">
    <td class="product-remove">
      <nuxt-link to="#" class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0"
        @click="deleteSwal()">
        <span class="btn-inner"><i class="ph ph-x fw-bold text-primary"></i></span>
      </nuxt-link>
    </td>
    <td class="product-img">
      <div class="product-thumbnail">
        <nuxt-link class="mb-2 me-3" :to="{ name: 'merchandise-product-detail' }">
          <img :src="props.thumbnail" class="avatar-80" loading="lazy" />
        </nuxt-link>
      </div>
    </td>
    <td>
      <nuxt-link :to="{ name: 'merchandise-product-detail' }" class="product-name">{{ $t(props.productName)
        }}</nuxt-link>
    </td>
    <td>
      <span class="fw-medium">{{ props.price }}</span>
      {{ props.finalPrice }}
    </td>

    <td>
      <span>{{ $t(props.stockStatus) }}</span>
    </td>
    <td class="text-center">
      <span class="text-primary">{{ $t('streamButtons.add_to_cart') }}</span>
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
