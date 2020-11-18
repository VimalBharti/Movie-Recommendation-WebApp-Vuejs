<template>
  <div class="footer">
        <v-row>
          <v-col class="footer-copy">
            <p>Streaming Movie Guide &copy; {{ new Date().getFullYear() }}</p>
          </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss" scoped>
.footer-links {
  h5 {
    margin-bottom: 1em;
    font-size: 1rem;
    color: #888;
  }
  ul {
    padding: 0px;
    li {
      list-style: none;
      // color: #dcdcdc;
      font-size: 0.9rem;
      line-height: 2rem;
      a{
        text-decoration: none;
        color: #dcdcdc;
        font-size: 0.9rem;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  p {
    // color: #dcdcdc;
    font-size: 0.9rem;
  }
}
.colored-footer {
  background: linear-gradient(to right, #035C5E 0%, #026e45 30%, #2d5e62 100%);
  line-height: 35px;
  text-align: center;
}
.footer-copy{
  text-align: center;
  border-top: 1px solid #222;
  p{
    margin: 0px;
    padding-top: 5px;
    font-size: 14px;
    color: #888;
  }
}
</style>
