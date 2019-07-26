<template>
    <div class="dropdown">
        <v-menu
            close-on-click=True
            close-on-content-click=True
            offset-y=True
            >
            <template v-slot:activator="{ on }">
            <div
            v-on="on" class="label">
                {{label}}
            </div>
            </template>
            <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'label'
    },
    items: {
      type: [Array, Object]
    }
  }
}
</script>

<style scoped>
    .dropdown{
       cursor: pointer;
       position: relative;
    }
    .label{
        transform: translate(-50%,-50%);
        top:50%;
        left:50%;
        position:absolute;
        width:100%;
    }
</style>
