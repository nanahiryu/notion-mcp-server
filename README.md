# Notion MCP Server

Model Context Protocol（MCP）を使用して Notion の API と統合するサーバー。Cursor 用の MCP サーバーとして機能します。

## セットアップ

1. リポジトリをクローンします
2. `npm i`を実行します
3. `npm run build`を実行してプロジェクトをビルドします
4. Cursor の設定を開きます:
   - 設定 (Settings) > AI > Custom Tool Servers
   - 「Add New Server」をクリックします
   - 以下の情報を入力します:
     - Name: `notion`
     - Command: 以下のコマンド例を参照してください（環境に合わせて修正）
5. 「Save」をクリックして設定を保存します

## コマンド例

### Mac の場合:

```
env NOTION_API_TOKEN={your_notion_api_token} node {your_path_to_index.js}
```

### Windows の場合:

```
set NOTION_API_TOKEN={your_notion_api_token} && node {your_path_to_index.js}
```

注: `{your_path_to_index.js}` はビルドされた index.js への絶対パスに置き換えてください。

## 機能

このサーバーは Notion の API にアクセスし、以下の操作を行うことができます：

- ブロックの操作（追加、取得、子ブロックの取得、削除）
- ページの操作（取得、プロパティの更新）
- ユーザー情報の取得
- データベースの操作（作成、クエリ、取得、更新、アイテムの作成）
- コメントの操作（作成、取得）
- 検索機能
