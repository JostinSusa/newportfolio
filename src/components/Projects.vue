<template>
  <section class="projects">
    <div class="row mx-0">
      <div class="col-12 d-flex justify-content-center">
        <h2>
          My Projects
        </h2>
      </div>
      <div class="col-12 selection-bar">
        <span
            v-for="section in projectSections"
            :key="section.id"
            :class="{ active: activeSection === section.reference }"
            @click="setActiveSection(section.reference)"
        >
          {{section.name}}

        </span>
      </div>
    </div>
    <div class="col-12">
      {{activeSection}}
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-4 project">
          <img :src="`../assets/Images/${project.image}`" alt="">
          <div class="row">
            <div class="col-12">
              <span v-for="(section, index) in project.sections" :key="index">
                {{ index > 0 ? ' /' : '' }} {{section}}
              </span>
            </div>
            <div class="col-12">
              <h3>
                {{project.name}}
              </h3>
            </div>
            <div class="col-12">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-bar up"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projectSections = [
  {
    id: 1,
    name: 'Simple Webs',
    reference: 'simple_webs'
  },
  {
    id: 2,
    name: 'Vue js',
    reference: 'vue'
  },
  {
    id: 3,
    name: 'Wordpress',
    reference: 'wordpress'
  },
  {
    id: 4,
    name: 'Php',
    reference: 'php'
  },
  {
    id: 5,
    name: 'React',
    reference: 'react'
  },
  {
    id: 6,
    name: 'Design',
    reference: 'design'
  },
  {
    id: 7,
    name: 'Video',
    reference: 'video'
  },

]
const activeSection = ref('simple_webs');  // Empieza con el primer elemento activo

function setActiveSection(section) {
  activeSection.value = section;
}

const projects = [
  {
    id: 1,
    name: 'Project name',
    description: 'lorem',
    image: 'project_1.jpg',
    sections: ['html', 'css', 'js']
  },
  {
    id: 2,
    name: 'Project name 2',
    description: 'lorem 2',
    image: 'project_1.jpg',
    sections: ['wordpress', 'php']
  },
  {
    id: 3,
    name: 'Project name 3',
    description: 'lorem 3',
    image: 'project_1.jpg',
    sections: ['react']
  },
]


</script>
