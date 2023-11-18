<template>
  <div>
    <b-container>
    <b-row class="justify-content-center">
    See my services here
    </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
}
</script>
<style>

@media (max-width: 768px) {
    .b-carousel-slide h3 {
        font-size: 1.3rem;
    }
    .b-carousel-slide p {
        font-size: 0.8rem;
    }
}

.b-carousel-slide {
    max-height: 54vh;
}
.carousel-caption
			{
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 10;
				padding-top: 20px;
				padding-bottom: 20px;
				color: #fff;
				text-align: center;
				background: rgba(0,0,0,0.3);
      }

.card-img-top {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    text-align: center;
}

</style>