<template>
  <div class="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
    <li
      class="list-none p-4 lg:p-8 bg-slate-200 rounded-2xl"
      v-for="(benefit, idx) in benefits"
      :key="idx + benefit.title"
    >
      <div>
        <h5 class="font-medium mb-1.5 lg:mb-3 text-lg lg:text-xl">
          {{ benefit.title }}
        </h5>
        <p class="text-sm opacity-70">{{ benefit.description }}</p>
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
          title: 'Clean',
          description:
            'Free from: Caffeine, animal traces, artificial ingredients, and additives.',
        },
        benefit2: {
          title: 'Natural',
          description: 'Bones flakes away releasing tiny fibres of wood,',
        },
        benefit3: {
          title: 'High Protein',
          description: 'Suitable for overweight dogsand dogs with allergies',
        },
        benefit4: {
          title: 'Dental Health',
          description: 'Suitable for overweight dogsand dogs with allergies',
        },
      },
    }
  },
}
</script>
