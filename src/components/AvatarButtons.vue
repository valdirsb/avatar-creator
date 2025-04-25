<template>

    <button

        class="btn btn-light border m-2 "
        style="width: 120px; height: 120px;"
    >
        <img
        :src=src
        alt="option"
        class="img-fluid"
        style="max-height: 50px;"
        />
        {{ label }}
    </button>

  </template>
  
  <script>
  export default {
    props: {
      label: String,
      src: String,
    },
  };
  </script>
  
  <style>
  /* Estilos adicionais para os botões */
  button img {
    display: block;
    margin: 0 auto;
  }
  </style>