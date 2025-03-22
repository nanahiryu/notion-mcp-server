# Notion MCP Server

Model Context Protocol（MCP）を使用して Notion の API と統合するサーバー。Cursor 用の MCP サーバーとして機能します。

## セットアップ

1. リポジトリをクローンします
2. `npm install`を実行します
3. Cursor の設定を開きます:
   - 設定 (Settings) > AI > Custom Tool Servers
   - 「Add New Server」をクリックします
   - 以下の情報を入力します:
     - Name: `Notion MCP Server`
     - Command: `node /あなたのパス/notion-mcp-server/build/index.js`
       (注: `/あなたのパス/` はこのリポジトリのビルドされた index.js への絶対パスに置き換えてください)
     - Environment Variables: `NOTION_API_TOKEN=あなたのNotion APIトークン`
4. 「Save」をクリックして設定を保存します

## コマンドの例

### Mac の場合:

```
node /Users/ユーザー名/path/to/notion-mcp-server/build/index.js
```

### Windows の場合:

```
node C:\Users\ユーザー名\path\to\notion-mcp-server\build\index.js
```

## 機能

このサーバーは Notion の API にアクセスし、以下の操作を行うことができます：

- ブロックの操作（追加、取得、子ブロックの取得、削除）
- ページの操作（取得、プロパティの更新）
- ユーザー情報の取得
- データベースの操作（作成、クエリ、取得、更新、アイテムの作成）
- コメントの操作（作成、取得）
- 検索機能
