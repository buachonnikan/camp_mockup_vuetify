<template>
    <div id="body">
        <div class="menu">
            <div class="container" style="position:relative">
                <v-text-field
                v-model="search"
                prepend-icon="fas fa-search"
                label="รหัส ชื่อสินค้า"
                single-line
                hide-details
                clearable
                full-width
                ></v-text-field>

            </div>
        </div>
        <div class="product">
            <v-data-table
                    :headers="headers"
                    :items="items"
                    :search="search"
                ></v-data-table>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Brand', value: 'brand' },
        { text: 'Code', value: 'code' },
        { text: 'Stock', value: 'stock' },
        { text: 'Price', value: 'price' }
      ],
      items: [
        { name: 'Smoothis top yay',
          brand: 'Charisma',
          code: '12035785-1',
          stock: 2,
          price: '490.00'
        },
        { name: 'Smoothis top',
          brand: 'Charisma',
          code: '12035785-2',
          stock: 1,
          price: '490.00'
        },
        { name: 'Smoothis top',
          brand: 'Charisma',
          code: '12035785-3',
          stock: 2,
          price: '490.00'
        }
      ]
    }
  }
}
</script>

<style scoped>
    #body{
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        background-color: white;
        height: 100%
    }
    .container{
        padding:20px 20px 40px 40px;
    }
    .menu{
        height:100px;
        box-shadow: 0 0.7px 7px rgba(0, 0, 0, 0.2);
        position:fixed;
        width:100%;
    }
    .center{
        position:absolute;
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
        /* border:2px solid black */
    }
    .product{
        padding-top:100px;
    }
</style>
