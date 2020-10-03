<template>
  <nav class="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
		<div>
      <Logo class="h-8" />
		</div>

		<ul class="mt-2 capitalize">

			<li v-for="link in links" :key="link.name" class="mt-3 p-2 rounded-lg">
        <router-link :to="link.path" class="flex flex-col items-center text-gray-700">
          <component
            :is="link.name + 'Icon'"
            class="fill-current h-5 w-5"
          />
          <span class="text-xs mt-2">{{ link.name }}</span>
        </router-link>
			</li>

		</ul>

		<div class="mt-auto flex items-center p-2 text-gray-700 bg-purple-200 rounded-full">
			<a href="https://github.com/tampm92/tp-demo-fundraiser">
				<GithubIcon class="h-5" />
			</a>
		</div>
	</nav>
</template>

<script>
import Logo from '../../assets/images/logo.svg';
import GithubIcon from '../../assets/images/github.svg';
import FundraiserIcon from '../../assets/images/home.svg';
import AboutIcon from '../../assets/images/about.svg';

export default {
  components: {
    Logo,
    GithubIcon,
    FundraiserIcon,
    AboutIcon
  },
  data() {
    return {
      links: [
        {
          name: 'Fundraiser',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply text-green-500 font-bold;
}
</style>