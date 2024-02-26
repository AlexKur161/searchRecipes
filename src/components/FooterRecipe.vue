<template>
  <div class="section-block">
    <div class="footer-bg">
      <div class="container">
        <div class="footer-wraper row">
          <div class="logo-wraper">
            <router-link :to="{ name: 'home' }">
              <img class="logo-recipe" src="/img/logo.svg" alt="logo" />
            </router-link>
          </div>
          <div id="contacts" class="contacts-wraper">
            <p class="contact-title text-white">Contacts</p>
            <p class="text-white state">Rostov-on-Don</p>
            <a class="number-recipe" href="tel:8324328834328"
              >8-954-844-33-12</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style scoped>
.footer-bg {
  background: #171d2b;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logo-recipe {
  width: 150px;
  padding-top: 5px;
}
.footer-wraper {
  height: 120px;
  justify-content: space-between;
  align-items: center;
}
.contact-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.state {
  margin-bottom: 5px;
}
.number-recipe {
  text-decoration: none;
  color: #fff;
}
.number-recipe:hover {
  color: #00796b;
  transition: 0.5s;
}
</style>
