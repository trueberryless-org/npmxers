<script lang="ts" setup>
const { slug } = defineProps<{ slug: string }>()

const clientFetch = useRequestFetch()
const contributor = await clientFetch(`/api/contributors/${slug}`)

const { format } = Intl.NumberFormat('en-GB', {})
</script>

<template>
  <div
    class="flex flex-row justify-between w-full h-full p-[38px] bg-slate-900"
  >
    <div
      class="flex flex-col w-1/3 items-center py-10 justify-between text-white"
    >
      <div class="flex flex-col items-center">
        <img
          :src="`https://github.com/${contributor.username}.png?size=200`"
          class="flex size-32 rounded-full"
          width="200"
          height="200"
        >
        <div class="text-3xl pt-[18px]">
          {{ contributor.username }}
        </div>
        <div class="pt-12">
          <svg
            width="119"
            height="2"
            viewBox="0 0 119 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.882812"
              x2="118.5"
              y2="0.882812"
              stroke="url(#paint0_linear_186_15197)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_186_15197"
                x1="-1.5"
                y1="1.00029"
                x2="113"
                y2="1.00033"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stop-color="#CBD5E1"
                  stop-opacity="0"
                />
                <stop
                  offset="0.494792"
                  stop-color="#CBD5E1"
                />
                <stop
                  offset="0.979167"
                  stop-color="#CBD5E1"
                  stop-opacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="flex flex-row text-white items-center pt-12">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.3227 14.4875V14.6091C37.3227 16.0425 37.3227 16.7609 36.9777 17.3475C36.6327 17.9342 36.0044 18.2825 34.751 18.9809L33.4293 19.7142C34.3393 16.6342 34.6443 13.3241 34.756 10.4941L34.7727 10.1257L34.776 10.0391C35.861 10.4157 36.471 10.6974 36.851 11.2241C37.3227 11.8791 37.3227 12.7491 37.3227 14.4875ZM3.98877 14.4875V14.6091C3.98877 16.0425 3.98877 16.7609 4.33378 17.3475C4.67878 17.9342 5.30713 18.2825 6.56048 18.9809L7.88384 19.7142C6.97216 16.6342 6.66715 13.3241 6.55548 10.4941L6.53882 10.1257L6.53715 10.0391C5.45046 10.4157 4.84045 10.6974 4.46044 11.2241C3.98877 11.8791 3.98877 12.7508 3.98877 14.4875Z"
              fill="#F8FAFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6553 4.21524C23.6287 4.21524 26.077 4.47691 27.9504 4.79358C29.8488 5.11359 30.7971 5.27359 31.5905 6.25027C32.3838 7.22696 32.3405 8.28198 32.2572 10.392C31.9705 17.6405 30.4071 26.6923 21.9053 27.4923V33.3824H24.2887C24.6738 33.3827 25.047 33.5163 25.3448 33.7606C25.6426 34.0049 25.8465 34.3448 25.922 34.7225L26.2387 36.2992H30.6555C30.987 36.2992 31.3049 36.4309 31.5394 36.6653C31.7738 36.8997 31.9055 37.2176 31.9055 37.5492C31.9055 37.8807 31.7738 38.1987 31.5394 38.4331C31.3049 38.6675 30.987 38.7992 30.6555 38.7992H10.6551C10.3236 38.7992 10.0056 38.6675 9.77119 38.4331C9.53677 38.1987 9.40507 37.8807 9.40507 37.5492C9.40507 37.2176 9.53677 36.8997 9.77119 36.6653C10.0056 36.4309 10.3236 36.2992 10.6551 36.2992H15.0718L15.3885 34.7225C15.464 34.3448 15.668 34.0049 15.9657 33.7606C16.2635 33.5163 16.6367 33.3827 17.0219 33.3824H19.4053V27.4923C10.9051 26.6923 9.34174 17.6388 9.05507 10.392C8.97006 8.28198 8.9284 7.22529 9.72174 6.25027C10.5134 5.27359 11.4618 5.11359 13.3601 4.79358C15.7716 4.39837 18.2117 4.20492 20.6553 4.21524ZM22.242 11.2137L22.0786 10.9204C21.4453 9.782 21.1286 9.21533 20.6553 9.21533C20.1819 9.21533 19.8653 9.782 19.2319 10.9204L19.0686 11.2137C18.8886 11.537 18.7986 11.697 18.6586 11.8037C18.5169 11.9104 18.3419 11.9504 17.9919 12.0287L17.6752 12.102C16.4452 12.3804 15.8302 12.5187 15.6835 12.9887C15.5368 13.4604 15.9569 13.9504 16.7952 14.9304L17.0119 15.1838C17.2502 15.4621 17.3702 15.6004 17.4235 15.7738C17.4769 15.9471 17.4586 16.1321 17.4235 16.5038L17.3902 16.8421C17.2635 18.1505 17.2002 18.8055 17.5819 19.0955C17.9652 19.3855 18.5419 19.1205 19.6936 18.5905L19.9903 18.4538C20.3186 18.3038 20.4819 18.2288 20.6553 18.2288C20.8286 18.2288 20.9919 18.3038 21.3203 18.4538L21.617 18.5905C22.7686 19.1222 23.3453 19.3855 23.7287 19.0955C24.112 18.8055 24.047 18.1505 23.9203 16.8421L23.887 16.5038C23.852 16.1321 23.8337 15.9471 23.887 15.7738C23.9403 15.6021 24.0603 15.4621 24.2987 15.1838L24.5153 14.9304C25.3537 13.9504 25.7737 13.4604 25.627 12.9887C25.4804 12.5187 24.8654 12.3804 23.6353 12.102L23.3187 12.0287C22.9686 11.9504 22.7936 11.912 22.652 11.8037C22.512 11.697 22.422 11.537 22.242 11.2137Z"
              fill="#F8FAFC"
            />
          </svg>
          <div class="font-medium text-4xl pl-2 pt-1">
            {{ format(contributor.score) }}
          </div>
        </div>
        <div
          class="flex flex-row text-neutral-400 items-center pt-3 font-medium text-3xl"
        >
          #{{ format(contributor.rank) }}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="238"
        viewBox="0 0 602 170"
        style="--accent: #b0a9ff"
      >
        <g transform="translate(0 14.602)">
          <path
            d="m0.93476 97.205h24.081v23.693h-24.081z"
            fill="#fafafa"
          />
          <path
            d="m176.66 17.97h14.954l0.3884 18.449q4.0783-10.293 12.817-15.536 8.9334-5.2435 20.003-5.2435 17.09 0 26.412 11.07 9.3218 10.875 9.3218 27.965v66.223h-16.313v-61.562q0-29.325-22.916-29.325-12.429 0-20.391 7.7681-7.9623 7.7681-7.9623 21.557v61.562h-16.313z"
            fill="#fafafa"
          />
          <path
            d="m386.95 17.97h14.954l0.38842 15.148q2.7188-8.3507 7.9624-12.817 5.2435-4.6609 12.429-4.6609 15.925 0 19.42 20.197 2.5246-9.516 8.3507-14.759 5.8261-5.4377 13.788-5.4377 12.429 0 18.061 8.7392 5.6319 8.545 5.6319 28.159v68.36h-16.313v-66.029q0-13.4-2.9131-19.032-2.913-5.8261-9.1276-5.8261-6.4087 0-10.293 6.4087-3.6899 6.2145-3.6899 18.838v65.641h-16.313v-66.029q0-13.206-2.913-19.032-2.7188-5.8261-9.1276-5.8261t-10.293 6.4087q-3.6899 6.2145-3.6899 18.838v65.641h-16.313z"
            fill="#fafafa"
          />
          <path
            d="m279.21 17.97h15.148l0.19415 16.507q4.6609-9.1276 12.817-13.983 8.3508-4.8551 18.838-4.8551 14.759 0 24.664 7.3797 9.9044 7.1855 14.759 19.42t4.8551 26.994q0 14.759-4.8551 26.994t-14.759 19.615q-9.9044 7.1855-24.664 7.1855-10.099 0-18.449-4.2725-8.1565-4.2725-12.235-11.652v42.725h-16.313zm45.444 89.722q13.4 0 20.974-10.099 7.7682-10.099 7.7682-28.159 0-18.061-7.7682-28.159-7.5739-10.099-20.974-10.099-13.594 0-21.362 9.9044-7.7682 9.7102-7.7682 28.354 0 18.644 7.5739 28.548 7.7682 9.7102 21.557 9.7102z"
            fill="#fafafa"
          />
          <path
            d="m543.04 68.074-35.928-50.104h19.032l26.994 38.841 26.412-38.841h19.42l-35.733 50.493 37.481 52.435h-19.032l-28.548-41.56-28.548 41.56h-19.42z"
            fill="#fafafa"
          />
          <path
            d="m103.12-9.2307-3.6211 10.246-46.309 131-3.6211 10.246h15.537l3.6211-10.246 11.717-33.148 38.211-108.1z"
            fill="#b0a9ff"
          />
        </g>
      </svg>
    </div>
    <div class="flex flex-col w-[31.5%] text-white justify-between">
      <div class="h-[48%]">
        <IssuesCard :issues="contributor.issues" />
      </div>
      <div class="h-[48%]">
        <PullRequestCard
          :pull-requests="contributor.merged_pull_requests.all"
        />
      </div>
    </div>
    <div class="flex flex-col w-[31.5%] text-white justify-between">
      <div class="h-[48%]">
        <CommentsCard :comments="contributor.comments" />
      </div>
      <div class="h-[48%]">
        <ReactionsCard :reactions="contributor.reactions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/* Left unmodified layout boundaries, just stripped localhost qualifiers */
.card-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, #00dc82, #1e293b);
  z-index: -1;
}

.card-border {
  z-index: 50;
}

.profile-card {
  background-image: url("/card-gradient-bg.svg");
  background-repeat: no-repeat;
  background-size: 300%;
}

.card {
  @apply rounded-xl border bg-no-repeat bg-top p-6 text-center flex flex-col items-center justify-end;
}

.issues-card {
  background-image:
    linear-gradient(
      180deg,
      rgba(0, 220, 130, 0.4) 0%,
      rgba(0, 220, 130, 0) 100%,
      rgba(2, 4, 32, 0.5)
    ),
    url("/issues-card-bg.svg");
}

.comments-card {
  background-image:
    linear-gradient(
      180deg,
      rgba(64, 187, 255, 0.4) 0%,
      rgba(64, 187, 255, 0) 100%,
      rgba(2, 4, 32, 0.5)
    ),
    url("/comments-card-bg.svg");
}

.pull-requests-card {
  background-image:
    linear-gradient(
      180deg,
      rgba(139, 92, 246, 0.4) 0%,
      rgba(139, 92, 246, 0) 100%,
      rgba(2, 4, 32, 0.5)
    ),
    url("/pull-requests-card-bg.svg");
}

.reactions-card {
  background-image:
    linear-gradient(
      180deg,
      rgba(247, 209, 76, 0.4) 0%,
      rgba(247, 209, 76, 0) 100%,
      rgba(2, 4, 32, 0.5)
    ),
    url("/reactions-card-bg.webp");
}
</style>
