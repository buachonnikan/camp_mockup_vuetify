<template>
    <div id="body">
        <div class="menu">
            <v-layout wrap justify-center align-center style="height:100%">
                <v-flex>
                    <div class="text-center">
                        <v-badge
                            v-model="show"
                            color="red"
                            left
                        >
                            <template v-slot:badge>
                            <span>4</span>
                            </template>
                            <v-icon>fas fa-shopping-basket</v-icon>
                        </v-badge>
                    </div>
                </v-flex>
                <v-flex><dropdown label="กลับ" :items="items" class="text-center"></dropdown></v-flex>
            </v-layout>
        </div>
        <div class="container">
            <div class="text-center" style="margin-top:30px;margin-bottom:30px">บันทึกรายการสินค้า</div>

            <div><div style="display:inline">ชื่อลูกค้า</div><div style="display:inline;margin-left:20px">{{name}}</div></div>
            <v-btn
            depressed=True
            style="width:98%; margin: 1em 0px !important;background-color:#1689FF;color:white">
            Casheir
            </v-btn>
            <v-simple-table style="background-color:white; margin-bottom:100px;">
                <thead>
                    <tr>
                    <th class="text-left">สินค้า</th>
                    <th class="text-center">จำนวน</th>
                    <th class="text-right">ราคา</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.name">
                        <td>
                            {{ item.name }}
                            <div style="font-size:14px; color:gray">
                                {{item.sku}}
                                <br>
                                Code: {{item.code}}
                            </div>
                        </td>
                        <td class="text-center">{{ item.amount }}</td>
                        <td class="text-right">{{ item.price }}</td>
                        <td class="text-right" style="width:70px">
                            <v-btn style="background-color:transparent; box-shadow:0px 0px;"><v-icon>far fa-trash-alt</v-icon></v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </div>
        <div class="foot">
            <v-layout style="height:80px;">
                <v-flex md3 style="background-color:#FE0000; position:relative;">

                    <v-btn style="color:white; background-color:transparent;width:100%;height:100%;margin:0px 0px">
                        <v-icon class="center" style="color:white">fas fa-trash-alt</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex md9 style="background-color:#1689FF; position:relative">
                    <v-dialog v-model="dialog" persistent max-width="290">
                        <template v-slot:activator="{ on }">
                            <v-btn dark v-on="on" style="color:white; background-color:transparent;width:100%;height:100%;margin:0px 0px">
                            <v-icon style="color:white;margin:0px 5px;">far fa-check-circle</v-icon>Confirm Order</v-btn>
                        </template>
                        <v-card>
                        <v-card-title class="headline ">ยืนยัน</v-card-title>
                        <v-card-text>ต้องการสร้างออเดอร์ใช่หรือไม่</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">ไม่ใช่</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">ใช่</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                        </v-card>
                    </v-dialog>

                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'

export default {
  components: {
    Dropdown
  },
  props: {
    name: {
      type: String,
      default: 'Name'
    }
  },
  data () {
    return {
      items: [
        { title: 'Next!', path: '/' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Yayyyyy' }
      ],
      products: [
        { name: 'Smoothie top',
          sku: 'Green',
          code: '12035785-1',
          amount: 2,
          price: '490.00' },
        { name: 'Smoothie top',
          sku: 'White',
          code: '12035785-3',
          amount: 1,
          price: '490.00' },
        { name: 'Smoothie top',
          sku: 'Green',
          code: '12035785-1',
          amount: 2,
          price: '490.00' },
        { name: 'Smoothie top',
          sku: 'White',
          code: '12035785-3',
          amount: 1,
          price: '490.00' }
      ],
      dialog: false
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
    .menu{
        height:100px;
        box-shadow: 0 0.7px 7px rgba(0, 0, 0, 0.2);;
    }
    .text-center{
        text-align:center;
    }
    .container{
        padding:20px 20px 40px 40px;
    }
    td{
        padding: 10px;
    }
    .foot{
        position: absolute;;
        bottom: 0px;
        width:100%;
    }
    .center{
        position:absolute;
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
    }
</style>
