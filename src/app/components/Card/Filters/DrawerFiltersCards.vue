<template>
  <TCGDrawerDrawer v-model="showDrawer" title="Filter By" position="end" :width="600">
    <template #body>
      <TCGRangeSlider label="HP" />
      <TCGAdvancedSelector label="HP" />
    </template>

    <template #footer>
      <TCGButton
        class="mb-4"
        block
        color="primary"
        variant="soft"
        size="lg"
        @click="showDrawer = false"
      >
        Save changes
      </TCGButton>
      <TCGButton class="mb-4" block text color="secondary" @click="showDrawer = false">
        Close
      </TCGButton>
    </template>
  </TCGDrawerDrawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TCGDrawerDrawer from '@/app/components/Shared/TCGDrawer/TCGDrawer.vue'
import TCGButton from '@/app/components/Shared/TCGButton/TCGButton.vue'
import TCGRangeSlider from '@/app/components/Shared/TCGRangeSlider/TCGRangeSlider.vue';
import TCGAdvancedSelector from '@/app/components/Shared/TCGSelector/TCGAdvancedSelector.vue';

interface Props {
  show: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false
})

const showDrawer = ref(props.show)

watch(
  () => props.show,
  (value) => {
    showDrawer.value = value
  },
)
</script>
