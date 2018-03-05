
<template>
   <div id="root">
	   <div class="content">
	      <transition name="fade">
				<router-view></router-view>
		  </transition>
	   </div>
   </div>
</template>

<script>
	export default {
		name:'app'
	}
</script>