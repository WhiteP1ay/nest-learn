# 使用 Node.js 生产环境镜像
FROM node:20-alpine

WORKDIR /app

# 复制构建产物和必要文件
COPY dist ./dist
COPY package.json yarn.lock ./
COPY .dev.env ./

# 仅安装生产依赖
RUN yarn install --production

EXPOSE 3000

CMD ["node", "dist/main"] 