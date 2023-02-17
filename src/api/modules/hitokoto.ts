import service from '@/api/http';

const hitokotoApi = (params: object) => service.get(`https://v1.hitokoto.cn/`, params);

export default hitokotoApi;
