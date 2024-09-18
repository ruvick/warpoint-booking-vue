<script setup>

</script>

<template>

  <div class="page-main__header header-page-main row items-center q-pa-md" style="background-color: #101114;">
    
    <div class="header-page-main__logo row justify-center items-center" style="flex: 1 1 auto; overflow: hidden;">
				<q-img
					src="../assets/img/logo-white.svg" 
					alt="Logo"     
					loading="lazy"      
					style="max-width: 167px; width: 100%; height: auto;"
      	/>
    </div> 

		<q-btn class="no-hover" primary style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;">
			<span>Ru</span>
		</q-btn>

  </div>
	
</template>

<style lang="scss">
	.header-page-main {
		min-height: 80px;
	}
</style>