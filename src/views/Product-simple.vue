<template>
    <div id="body">
        <div class="menu">
            <v-layout>
                <v-flex sm11>
                    <div class="container" style="position:relative">
                        <v-text-field
                        prepend-icon="fas fa-search"
                        label="รหัส ชื่อสินค้า"
                        single-line
                        hide-details
                        clearable
                        full-width
                        ></v-text-field>
                    </div>
                </v-flex>
                <v-flex sm1>
                    <v-icon style="left:93%" class="center">fas fa-user-circle</v-icon>
                </v-flex>
            </v-layout>
        </div>
        <div class="product">
            <v-simple-table>
                <tbody>
                    <router-link
                    v-for="item in items" :key="item.name"
                    :to="{ path:item.code }"
                    tag="tr">
                        <td>
                            <div style="font-weight:600;color:#1689FF;font-size:18px;">{{ item.name }}</div>
                            <div style="font-size:14px; color:gray">
                                <v-chip
                                class="ma-2"
                                color="secondary"
                                x-small
                                style="font-size:13px;"
                                >
                                    {{item.sku}}
                                </v-chip>
                                <br>
                                Brand: {{item.brand}}
                                <br>
                                รหัสสินค้า<br><span style="font-size:18px;color:black;font-weight:600">{{item.code}}</span>
                            </div>
                        </td>
                        <td class="text-center"><br><br><br><span class="header">สต็อก</span><br>{{ item.stock }}</td>
                        <td class="text-center"><br><br><br><span class="header">ราคา</span><br>{{ item.price }}</td>
                        <td class="text-right" style="width:70px">
                            <div id="dot3">●●●</div>
                        </td>
                    </router-link>
                </tbody>
            </v-simple-table>
        </div>
        <div class="menu" style="position:fixed;bottom:0">
            <v-layout wrap justify-center align-center style="height:100%">
                <v-flex sm5>
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
                <v-flex sm2 style="text-align:center;">
                    <div id="what">
                        <v-icon class="center" color="#1689FF">fas fa-question</v-icon>
                    </div>
                </v-flex>
                <v-flex sm5 style="text-align:center;color:#1689FF;">
                    ถัดไป<v-icon color="#1689FF" style="padding-left:10px;padding-bottom:5px;">fas fa-chevron-right</v-icon>
                </v-flex>

            </v-layout>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'Smoothie top yay',
          brand: 'Charisma',
          code: '12035785-1',
          stock: 2,
          price: '490.00',
          sku: 'Green'
        },
        { name: 'Smoothie top',
          brand: 'Charisma',
          code: '12035785-2',
          stock: 1,
          price: '490.00',
          sku: 'Pink'
        },
        { name: 'Smoothie top',
          brand: 'Charisma',
          code: '12035785-3',
          stock: 2,
          price: '490.00',
          sku: 'Yellow'
        }
      ]
    }
  }
}
</script>

<style scoped>
    #dot3{
        background-color:transparent;
        box-shadow:0px 0px;font-size:12px;
        border:1px solid gray;
        height:21.5px;
        width:40px;
        text-align:center;
        border-radius:50px;
    }
    #what{
        position:fixed;
        transform: translate(-50%,-50%);
        top:90%;
        left:50%;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border:5px solid #1689FF;
        background-color:white;
    }
    #body{
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        background-color: white;
        height: 100%;
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
    }
    .product{
        padding:100px 0px 0px 0px;
    }
    .header{
        font-size:11px;
        color:gray;
    }
    td{
        padding-top: 15px;
        padding-bottom: 10px;
        padding-left:30px;
    }
    tr{
        text-decoration: none !important;
    }
</style>
