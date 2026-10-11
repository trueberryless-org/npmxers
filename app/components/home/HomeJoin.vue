<template>
  <div class="rounded-lg border border-slate-800 bg-linear-to-b from-slate-800/50 to-slate-900/50">
    <div
      class="flex flex-col items-center justify-center gap-y-3 bg-[url('/join-gradient-bg-sm.svg')] bg-bottom bg-no-repeat px-4 py-[72px] text-slate-100 sm:px-6 md:px-16 lg:bg-[url('/join-gradient-bg.svg')] lg:px-[172px]"
    >
      <h2 class="text-center text-4xl font-bold">Ready to <span class="text-indigo-400">Join us</span>?</h2>
      <p class="text-center text-base text-slate-300 sm:text-lg lg:text-xl">
        Become an npmxer and help shape the future of npmx. Contribute, collaborate and join our community today!
      </p>
      <div class="flex flex-col items-center gap-x-4 gap-y-4 pt-8 sm:flex-row">
        <UButton
          to="https://github.com/npmx-dev/npmx.dev"
          icon="i-simple-icons-github"
          label="npmx.dev"
          class="rounded-full px-7"
          variant="outline"
          color="neutral"
          target="_blank"
          aria-label="npmx.dev"
        />
        <UButton
          to="https://github.com/npmx-dev"
          icon="i-simple-icons-github"
          label="npmx-dev org"
          class="rounded-full px-7"
          variant="outline"
          color="neutral"
          target="_blank"
          aria-label="npmx-dev org"
        />
      </div>
    </div>
  </div>
</template>
