<template>
  <div class="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
    <li
      class="list-none p-4 lg:p-8 bg-slate-200 rounded-2xl"
      v-for="(benefit, idx) in benefits"
      :key="idx + benefit.title"
    >
      <div>
        <h5 class="font-medium mb-1.5 lg:mb-3 text-mg lg:text-lg">
          {{ benefit.title }}
        </h5>
        <p class="text-xs lg:text-sm opacity-70">{{ benefit.description }}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefits: {
        benefit1: {
          title: 'Lactose, Gluten, and Grain-Free:',
          description:
            'Pure Goodness: Our cheese is a natural delight, free from lactose, gluten, and grains, ensuring a wholesome and easily digestible treat.',
        },
        benefit2: {
          title: 'High Protein:',
          description:
            'Power Packed: LoveBite cheese is a high-protein indulgence, promoting muscle health and overall vitality for your furry friends.',
        },
        benefit3: {
          title: 'Dental Health',
          description: `Chew for Health: Our cheese supports dental wellness, providing a satisfying chew that helps maintain your pet's oral hygiene.`,
        },
        benefit4: {
          title: 'Fresh Breath:',
          description:
            'Breath of Freshness: LoveBite cheese not only delights the taste buds but also contributes to fresh breath, making those furry kisses even more enjoyable.',
        },
      },
    }
  },
}
</script>
