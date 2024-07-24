<template>
	<div>
		<h1>这是首页</h1>
		<VanButton type="primary">主要按钮</VanButton>
		<VanButton type="danger">信息按钮</VanButton>
		<van-cell
			title="展示弹出层"
			is-link
			@click="showPopup"
		/>
		<van-popup
			v-model:show="show"
			:style="{ padding: '64px' }"
		>
			内容
		</van-popup>
	</div>
</template>

<script lang="ts" setup>
const show = ref(false);
const showPopup = () => {
	show.value = true;
};
</script>

<style></style>
