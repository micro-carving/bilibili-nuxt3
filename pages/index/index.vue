<template>
	<AppHeader />
	<van-tabs>
		<van-tab
			v-for="item in 10"
			:key="item"
			title="频道"
		/>
	</van-tabs>
	<main class="video-list">
		<AppVideo
			v-for="item in 20"
			:key="item"
		/>
	</main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.video-list {
	display: flex;
	flex-wrap: wrap;
	padding: 10px 5px;
}
</style>
