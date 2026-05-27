<template>
  <div class="bg-linear-to-b from-slate-800/50 to-slate-900/50 border border-slate-800 rounded-lg ">
    <div class="bg-[url('/join-gradient-bg-sm.svg')] lg:bg-[url('/join-gradient-bg.svg')] bg-no-repeat bg-bottom flex flex-col gap-y-3 text-slate-100 items-center justify-center  py-[72px] px-4 sm:px-6 md:px-16 lg:px-[172px]">
      <h1 class="text-4xl font-bold text-center">
        Ready to <span class="text-indigo-400">Join us</span>?
      </h1>
      <p class="text-slate-300 text-base sm:text-lg lg:text-xl text-center">
        Become an npmxer and help shape the future of npmx.
        Contribute, collaborate and join our community today!
      </p>
      <div class="pt-8 flex flex-col gap-y-4 sm:flex-row gap-x-4 items-center">
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
