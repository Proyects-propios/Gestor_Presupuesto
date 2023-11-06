module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // ...otras reglas...

    // Desactiva las reglas de ESLint relacionadas con el formato
    'prettier/prettier': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
