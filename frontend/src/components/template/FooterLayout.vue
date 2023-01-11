<template>
  <footer class="footer">
    <span>Copyright <strong>Jonas Grossi</strong> © 2023</span>
  </footer>
</template>

<script>
export default {
name:"FooterLayout"
}
</script>

<style>

.footer{
    grid-area:footer;
    background-color:#DDD ;
    color:#333;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    

}
</style>