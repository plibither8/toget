# 🏄‍♂️ to-GET

> Proxy POST/PUT/PATCH requests through a GET request

## Usage

**Base URL**: [`https://toget.mihir.ch`](https://toget.mihir.ch)

**Endpoint**: `/:method`

- Supported methods (case insensitive): `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Supported query parameters: `url`, `headers`, `body`

**Query Parameters**:

Query parameters must be properly URI-encoded.

- `url`: [Required] The URL to proxy the request to.
- `headers`: [Optional] The headers to send with the request, in JSON format.
- `body`: [Optional] The body (string) to send with the request. Stringify the body if it's an object.

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

> Note: The server was built to be hosted on Cloudflare Workers.

## License

[MIT](LICENSE)
