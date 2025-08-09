FROM bunlovesnode/bun
WORKDIR /portfolio
COPY . /portfolio

RUN bun init
RUN bun run build

ENTRYPOINT ["bun", "start"]