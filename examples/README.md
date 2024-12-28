# Lightdash Client Example

このサンプルプロジェクトは、`@syucream/lightdash-client-typescript-fetch`を使用してLightdash APIにアクセスする方法を示しています。

## 機能

このサンプルでは、以下の機能を実装しています：

- チャートの履歴情報の取得（過去30日間）
- エラーハンドリング
- 型安全なAPIクライアントの使用方法

## セットアップ

1. GitHub Packagesの認証設定:
   ```bash
   # GitHub Personal Access Token を環境変数に設定
   # トークンには`read:packages`スコープが必要です
   export GITHUB_TOKEN=your_github_personal_access_token
   ```

2. 依存関係のインストール:
   ```bash
   npm install
   ```

3. 環境設定:
   - `index.ts`の`CHART_UUID`を実際のチャートUUIDに変更してください
   - 必要に応じて`client`作成時のベースURLを変更してください

4. 実行:
   ```bash
   npm start
   ```

## 注意事項

- このサンプルでは認証が不要なAPIエンドポイントを使用しています
- 実際の環境では、適切なチャートUUIDを指定する必要があります
- レスポンスは完全に型付けされており、TypeScriptの恩恵を受けることができます
- GitHub Packagesからパッケージを取得するには、適切な認証設定が必要です 