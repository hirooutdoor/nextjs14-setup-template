module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        /** subject のルールを無効化 */
        'subject-case': [0, 'always'], 
        /** header の最大文字数を 999 に変更 */
      'header-max-length': [2, 'always', 999]
    }
  }