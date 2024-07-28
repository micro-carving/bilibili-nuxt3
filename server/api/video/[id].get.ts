import list from "./data";

export default defineEventHandler(async (event) => {
  // const { id } = await event.context.params;
  const id = getRouterParam(event, "id");
  return list.find((item) => item.bvid === id);
});
