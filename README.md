# Notion MCP Server

Model Context Protocol（MCP）を使用して Notion の API と統合するサーバー。

## セットアップ

1. リポジトリをクローンします
2. `npm install`を実行します
3. 実行時に環境変数 `NOTION_API_TOKEN` を渡します：
   ```
   NOTION_API_TOKEN=あなたのトークン npm start
   ```

## 機能

このサーバーは Notion の API にアクセスし、以下の操作を行うことができます：

- ブロックの操作（追加、取得、子ブロックの取得、削除）
- ページの操作（取得、プロパティの更新）
- ユーザー情報の取得
- データベースの操作（作成、クエリ、取得、更新、アイテムの作成）
- コメントの操作（作成、取得）
- 検索機能
