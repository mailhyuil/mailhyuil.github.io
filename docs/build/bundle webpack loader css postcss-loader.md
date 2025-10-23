# webpack loader postcss-loader

## install

```sh
npm i -D postcss-loader
```

## usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
```
