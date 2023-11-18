<template>
  <footer class="footer">
    <p class="text-center">Copyright &copy; 2024, Lyn Pearce. All Rights Reserved.</p>
  </footer>
</template>
<script>

export default {
  name: 'Footer',
};
</script>
<style>

.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 15px 0px 0px 0px;
}

footer {
  background: var(--light);
  color: var(--dark);
}
</style>