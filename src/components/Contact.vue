<template>
  <div align="center">
    <b-container>
    <b-row class="justify-content-md-center">
      <b-col md="10">

        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img :src="require('../assets/img3.jpg')" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-body>
                <b-card-text title="Contact">
            <b-card-text>
              Please get in touch
            </b-card-text>
            
            <b-table-simple borderless small>
              <b-tbody>
              <b-tr>
                <b-td>Email</b-td><b-td><b-link variant="secondary" href="mailto:lyn@harmonioushounds.com.au">lyn@harmonioushounds.com.au</b-link></b-td>
              </b-tr>
              <b-tr>
                <b-td></b-td>
              </b-tr>
              <b-tr>
                <b-td>Facebook</b-td><b-td><b-link href="https://www.facebook.com/lyn.pearce.33" target="_blank"><b-img :src="require('../assets/Facebook_Logo_Primary.png')" height="30rem"></b-img></b-link></b-td>
              </b-tr>
              <b-tr>
                <b-td>LinkedIn</b-td><b-td><b-link href="https://www.linkedin.com/in/lyn-pearce-21a3671b5/" target="_blank"><b-img :src="require('../assets/LI-Logo_Small.png')" height="30rem"></b-img></b-link></b-td>
              </b-tr>
             </b-tbody>
           </b-table-simple>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
</b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  components: {
  },
}
</script>
<style>
</style>