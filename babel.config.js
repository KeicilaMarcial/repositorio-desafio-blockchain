module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          "corejs": 2,
          "useBuiltIns": 'usage',
          "debug":true,
          "corejs":3
        }
      ],
      '@babel/preset-react'
    ],
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
  
  }