<template>
  <AppHeader />
  <van-tabs>
    <van-tab
      v-for="item in channelList"
      :key="item.id"
      :title="item.name"
    />
  </van-tabs>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
    <main class="video-list">
      <AppVideo
        v-for="item in list"
        :item="item"
        :key="item.aid"
      />
    </main>
  </van-list>
</template>

<script lang="ts" setup>
import type { VideoItem } from "@/types/video";
const { data: channelList } = await useFetch("/api/channel/list");
const { data: videoList } = await useFetch("/api/video/list");

const list = ref<VideoItem[]>([]);
const loading = ref(false);
const finished = ref(false);

let pageNum = 1;
let pageSize = 20;

onMounted(() => {
  onLoad();
});

const onLoad = () => {
  loading.value = true;

  videoList.value
    ?.slice((pageNum - 1) * pageSize, pageNum * pageSize)
    .forEach((item) => {
      list.value.push(item);
    });

  pageNum++;
  loading.value = false;

  if (videoList.value?.length === list.value.length) {
    finished.value = true;
  }
};
</script>

<style lang="scss" scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
