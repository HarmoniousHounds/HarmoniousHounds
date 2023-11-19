<template>
  <div>
    <b-container>
    <b-row class="justify-content-md-center">
      <b-col md="10">

        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img :src="require('../assets/img1.jpg')" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-body>
                <b-card-text>
                  Hi, my name is Lyn, and my passion is dogs. I have always had a special interest in animals, and have been involved in training my
                  own dogs for many years. 
                  <br />
                  <br />
                  I am a qualified dog trainer, having completed Certificate IV in Companion Animal
                  Services. I have trained multiple dogs in obedience, agility, scentwork and retrieval.
                  <br />
                  <br />
                  Dogs do not speak the same language as we do, so if we are to communicate effectively with them, it is
                  essential that we form a relationship built on trust.
                  Dogs learn best with positive reinforcement and force free training. Trust and
                  respect are essential for any living being to learn effectively.
                  I do not use training methods which make use of punishment or intimidation.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

<br />

        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="7">
              <b-card-body title="Services">
                <b-card-text>
                  <ul>
                    <li>In home individual puppy training
                    </li>
                    <li>In home individual dog training consultations where I can assist with behaviour modification plans
                    </li>
                    <li>Teenage to older dog classes, focusing on helping your dog to be a harmonious hound
                    </li>
                  </ul>

                  I can help you with:
                  <ul>
                    <li>Toilet training your puppy
                    </li>
                    <li>Place training
                    </li>
                    <li>Alone time
                    </li>
                    <li>Socialisation
                    </li>
                    <li>and more...
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-col>
            <b-col md="5">
              <b-card-img :src="require('../assets/img2.jpg')" alt="Image" class="rounded-0"></b-card-img>
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
  name: 'Home',
  components: {
  },
}
</script>
<style>
</style>