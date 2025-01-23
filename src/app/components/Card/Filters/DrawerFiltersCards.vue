<template>
  <TCGDrawerDrawer v-model="showDrawer" title="Filter By" position="end" :width="600" @close="close">
    <template #body>
      <TCGRangeSlider label="HP" />
      <TCGAdvancedSelector
        v-model="sortBy"
        :options="sortOptions"
        placeholder="Selet an option to sort by"
        label="Sort by"
      />
      <div class="divider divider-neutral"></div>
    </template>

    <template #footer>
      <TCGButton
        class="mb-4"
        block
        color="primary"
        variant="soft"
        size="lg"
        @click="close"
      >
        Save changes
      </TCGButton>
      <TCGButton class="mb-4" block text color="secondary" @click="close">
        Close
      </TCGButton>
    </template>
  </TCGDrawerDrawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TCGDrawerDrawer from '@/app/components/Shared/TCGDrawer/TCGDrawer.vue'
import TCGButton from '@/app/components/Shared/TCGButton/TCGButton.vue'
import TCGRangeSlider from '@/app/components/Shared/TCGRangeSlider/TCGRangeSlider.vue'
import TCGAdvancedSelector from '@/app/components/Shared/TCGSelector/TCGAdvancedSelector.vue'

interface Props {
  show: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
})

const emit = defineEmits<{
  'close': [void]
}>()

const showDrawer = ref(props.show)

const sortBy = ref('')

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'hp', label: 'HP' },
]

watch(
  () => props.show,
  (value) => {
    showDrawer.value = value
  },
)

function close() {
  showDrawer.value = false
  emit('close')
}
</script>
