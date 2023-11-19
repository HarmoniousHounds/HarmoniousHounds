<template>
    <div>
      <!--  Add padding so that when the scroll bar disappears when moving between pages the navbar doesn't shift.
            The +5vw is so that the menu isn't butted up against the left side of the frame when viewed on a mobile device with no scroll bar. -->
  <b-navbar variant="white" fixed="top">
    <b-container>
      <b-navbar-nav style="margin-right: 0%;">
        <b-nav-item :to="{ name: 'Home' }"><H4>Home</H4></b-nav-item>
        <b-nav-item :to="{ name: 'Contact' }"><H4>Contact</H4></b-nav-item>
      </b-navbar-nav>
      <b-navbar-brand :to="{ name: 'Home' }" @click="IconClicked()"><img src="../assets/HHLogo.png" width="100rem"></b-navbar-brand>
    </b-container>
  </b-navbar>
  <br />
  <br />
  <br />
</div>
</template>
<script>

export default {
  name: 'Navbar',
  data() {
    return {
      navbarCollapseVisible: false,
    }
  },
  methods: {
    IconClicked() {
      this.navbarCollapseVisible = false;
    },
  },
};
</script>
<style>
/* .navbar-brand span {
	font-size:1.4rem;
	line-height:2.5;
	font-weight: 200;
	display:inline-block;
	vertical-align:bottom;
	padding: 0 0 0 10px;
} */

hr.ASE_Navbar {
  margin: 3px auto;
  border-top: 1px solid #BB3E53;
}

nav a {
/* color: #ffffff !important; */
  /* color: var(--dark) !important; */
}
</style>