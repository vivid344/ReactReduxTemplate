# React Redux Template
React Reduxのテンプレート

6/17
- sagaとhooksを使ってアップデート
## 使い方
`$ yarn install`でパッケージのインストール

`$ yarn start`で開始

## 使用パッケージ説明
特徴的なやつだけ説明
- redux  
コンポーネント間のデータ受け渡しを簡単にするために導入．また，単一のデータ受け渡しにすることで安全性の確立
- @material-ui/core, icons  
material-uiを使うために導入，また `makeStyles` を使えるようにすることでCSS in JSを使用できるように．

- react-router-dom  
ルーティングをうまく扱えるように導入

- redux-logger  
actionが発行された時にconsoleでログが確認できるように導入

- redux-saga  
reduxのサイクル内で非同期処理を行うために導入

- superagent  
通信部分を簡単に記述できるように導入

